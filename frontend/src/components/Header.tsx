import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaUser, FaBars, FaTimes, FaSearch } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when location changes
    setIsMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Tradies"
              className="h-10 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-primary">Tradies</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'text-primary font-medium' : 'text-gray-700'}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`nav-link ${location.pathname === '/services' ? 'text-primary font-medium' : 'text-gray-700'}`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'text-primary font-medium' : 'text-gray-700'}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === '/contact' ? 'text-primary font-medium' : 'text-gray-700'}`}
            >
              Contact
            </Link>
          </nav>

          {/* User Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Dashboard
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                    <span>{user.name}</span>
                    <FaUser />
                  </button>
                  <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/bookings"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      My Bookings
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="py-2 text-gray-700"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="py-2 text-gray-700"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="py-2 text-gray-700"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="py-2 text-gray-700"
              >
                Contact
              </Link>
              
              <div className="pt-4 border-t border-gray-200">
                {user ? (
                  <>
                    <div className="py-2 font-medium text-gray-900">
                      {user.name}
                    </div>
                    <Link
                      to="/dashboard"
                      className="block py-2 text-gray-700"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      className="block py-2 text-gray-700"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/bookings"
                      className="block py-2 text-gray-700"
                    >
                      My Bookings
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left py-2 text-gray-700"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link
                      to="/login"
                      className="py-2 text-gray-700"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="btn btn-primary"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header 