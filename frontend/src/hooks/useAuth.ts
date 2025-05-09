import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import api from '../services/api'

const useAuth = () => {
  const { 
    user, 
    token, 
    setUser, 
    setToken, 
    clearAuth,
    isLoading,
    error,
    setError,
    setLoading
  } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    // Set authorization header for API requests if token exists
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      delete api.defaults.headers.common['Authorization']
    }
  }, [token])

  const login = async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    
    try {
      const { data } = await api.post('/api/auth/login', { email, password })
      setUser(data)
      setToken(data.token)
      localStorage.setItem('token', data.token)
      return true
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed')
      return false
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData: {
    name: string
    email: string
    password: string
    role?: string
  }) => {
    setLoading(true)
    setError(null)
    
    try {
      const { data } = await api.post('/api/auth/register', userData)
      setUser(data)
      setToken(data.token)
      localStorage.setItem('token', data.token)
      return true
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed')
      return false
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    clearAuth()
    localStorage.removeItem('token')
    navigate('/login')
  }

  const checkAuthStatus = async () => {
    const storedToken = localStorage.getItem('token')
    
    if (!token && storedToken) {
      setToken(storedToken)
      
      try {
        const { data } = await api.get('/api/auth/me')
        setUser(data)
      } catch (err) {
        clearAuth()
        localStorage.removeItem('token')
      }
    }
  }

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    register,
    logout,
    checkAuthStatus
  }
}

export default useAuth 