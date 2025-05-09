import { Request, Response } from 'express'
import User from '../models/User'

// @desc    Get user profile by ID
// @route   GET /api/users/:id
// @access  Public
export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).select('-password')

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json(user)
  } catch (error: any) {
    console.error('Get user profile error:', error)
    res.status(500).json({
      message: 'Server error while fetching user profile',
      error: error.message,
    })
  }
}

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user._id)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Update fields if provided
    if (req.body.name) user.name = req.body.name
    if (req.body.email) user.email = req.body.email
    if (req.body.phone) user.phone = req.body.phone
    if (req.body.address) user.address = req.body.address
    if (req.body.bio) user.bio = req.body.bio

    // Don't allow role updates from this endpoint
    // Only update password if provided
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      phone: updatedUser.phone,
      address: updatedUser.address,
      profilePicture: updatedUser.profilePicture,
      bio: updatedUser.bio,
    })
  } catch (error: any) {
    console.error('Update user profile error:', error)
    res.status(500).json({
      message: 'Server error while updating user profile',
      error: error.message,
    })
  }
}

// @desc    Get all service providers
// @route   GET /api/users/providers
// @access  Public
export const getServiceProviders = async (req: Request, res: Response) => {
  try {
    const providers = await User.find({ role: 'provider' }).select('-password')

    res.status(200).json(providers)
  } catch (error: any) {
    console.error('Get service providers error:', error)
    res.status(500).json({
      message: 'Server error while fetching service providers',
      error: error.message,
    })
  }
} 