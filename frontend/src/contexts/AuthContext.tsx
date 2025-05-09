import { createContext, useState, useContext, useEffect } from 'react'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

// Define user type
interface User {
  id: string
  name: string
  email: string
  role: 'customer' | 'provider' | 'admin'
}

// Define auth context type
interface AuthContextType {
  user: User | null
  isLoading: boolean
  error: string | null
  login: (email: string, password: string, remember?: boolean) => Promise<void>
  register: (userData: RegisterData) => Promise<void>
  logout: () => void
  clearError: () => void
}

// Register data interface
interface RegisterData {
  name: string
  email: string
  password: string
  role: 'customer' | 'provider'
}

// Create the auth context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  error: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  clearError: () => {}
})

// Mock user data for development
const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'customer' as const
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    role: 'provider' as const
  }
]

// Auth provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  // Check for existing user session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, this would verify the token with the server
        const token = localStorage.getItem('token')
        const storedUser = localStorage.getItem('user')
        
        if (token && storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (err) {
        console.error('Authentication error:', err)
        // Clear any invalid auth data
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      } finally {
        setIsLoading(false)
      }
    }
    
    checkAuth()
  }, [])

  // Login function
  const login = async (email: string, password: string, remember = false) => {
    setIsLoading(true)
    setError(null)
    
    try {
      // This is a mock login for development
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const foundUser = mockUsers.find(u => 
        u.email === email && u.password === password
      )
      
      if (foundUser) {
        const { password, ...userWithoutPassword } = foundUser
        setUser(userWithoutPassword)
        
        // Store auth data in localStorage if remember is checked
        localStorage.setItem('token', 'mock-jwt-token')
        localStorage.setItem('user', JSON.stringify(userWithoutPassword))
        
        // Redirect to dashboard or home
        navigate('/')
      } else {
        throw new Error('Invalid email or password')
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Register function
  const register = async (userData: RegisterData) => {
    setIsLoading(true)
    setError(null)
    
    try {
      // This is a mock registration for development
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Check if user already exists
      const existingUser = mockUsers.find(u => u.email === userData.email)
      if (existingUser) {
        throw new Error('User with this email already exists')
      }
      
      // Create new user (for demo purposes)
      const newUser = {
        id: String(mockUsers.length + 1),
        name: userData.name,
        email: userData.email,
        role: userData.role
      }
      
      // Set the user in state
      setUser(newUser)
      
      console.log(newUser)
      // Store auth data
      localStorage.setItem('token', 'mock-jwt-token')
      console.log("localStorage.getItem('token')")
      localStorage.setItem('user', JSON.stringify(newUser))
      
      // Redirect to home
      navigate('/')
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }

  // Clear error
  const clearError = () => {
    setError(null)
  }

  // Context value
  const value = {
    user,
    isLoading,
    error,
    login,
    register,
    logout,
    clearError
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthContext 