import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import User, { IUser } from '../models/User'

// Generate JWT token
const generateToken = (id: string) => {
  return jwt.sign(
    { id }, 
    process.env.JWT_SECRET || 'your_jwt_secret_key', 
    {
      expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    } as jwt.SignOptions
  )
}

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body

    // Check if user already exists
    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // Validate role
    const validRoles = ['customer', 'provider']
    if (role && !validRoles.includes(role)) {
      return res.status(400).json({ message: 'Invalid role specified' })
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password,
      role: role || 'customer',
    })

    if (user) {
      // Generate token
      const token = generateToken(user._id.toString())

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token,
      })
    } else {
      res.status(400).json({ message: 'Invalid user data' })
    }
  } catch (error: any) {
    console.error('Registration error:', error)
    res.status(500).json({
      message: 'Server error during registration',
      error: error.message,
    })
  }
}

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    // Check for user email
    const user = await User.findOne({ email }).select('+password')
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Check if password matches
    const isMatch = await user.comparePassword(password)
    
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Generate token
    const token = generateToken(user._id.toString())

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profilePicture: user.profilePicture,
      token,
    })
  } catch (error: any) {
    console.error('Login error:', error)
    res.status(500).json({
      message: 'Server error during login',
      error: error.message,
    })
  }
}

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user._id)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      address: user.address,
      profilePicture: user.profilePicture,
      bio: user.bio,
    })
  } catch (error: any) {
    console.error('Get current user error:', error)
    res.status(500).json({
      message: 'Server error while fetching user profile',
      error: error.message,
    })
  }
} 