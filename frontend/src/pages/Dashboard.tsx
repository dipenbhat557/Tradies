import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaList, FaUser, FaCalendarAlt, FaStar, FaCog } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'
import LoadingSpinner from '../components/ui/LoadingSpinner'

// Mocked data for visualization purposes
const mockBookings = [
  {
    id: 1,
    service: 'Bathroom Renovation',
    provider: 'John Smith',
    date: '2023-07-15',
    status: 'completed',
  },
  {
    id: 2,
    service: 'Electrical Repairs',
    provider: 'Sarah Johnson',
    date: '2023-07-25',
    status: 'confirmed',
  },
  {
    id: 3,
    service: 'Deep Home Cleaning',
    provider: 'Michael Chen',
    date: '2023-08-05',
    status: 'pending',
  },
]

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings')
  const { user, isAuthenticated, checkAuthStatus } = useAuth()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      await checkAuthStatus()
      setIsLoading(false)
    }

    init()
  }, [checkAuthStatus])

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login', {
        state: { from: { pathname: '/dashboard' } },
      })
    }
  }, [isLoading, isAuthenticated, navigate])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'confirmed':
        return 'bg-blue-100 text-blue-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex border-b">
            <button
              className={`px-6 py-3 font-medium text-sm flex items-center ${
                activeTab === 'bookings'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('bookings')}
            >
              <FaCalendarAlt className="mr-2" />
              My Bookings
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm flex items-center ${
                activeTab === 'profile'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('profile')}
            >
              <FaUser className="mr-2" />
              Profile
            </button>
            {user?.role === 'provider' && (
              <button
                className={`px-6 py-3 font-medium text-sm flex items-center ${
                  activeTab === 'services'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('services')}
              >
                <FaList className="mr-2" />
                My Services
              </button>
            )}
            <button
              className={`px-6 py-3 font-medium text-sm flex items-center ${
                activeTab === 'reviews'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              <FaStar className="mr-2" />
              Reviews
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm flex items-center ${
                activeTab === 'settings'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('settings')}
            >
              <FaCog className="mr-2" />
              Settings
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'bookings' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">My Bookings</h2>
                  <div className="flex space-x-2">
                    <select className="input py-2">
                      <option>All Status</option>
                      <option>Pending</option>
                      <option>Confirmed</option>
                      <option>Completed</option>
                      <option>Cancelled</option>
                    </select>
                    <button className="btn btn-primary">Book New Service</button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Provider
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockBookings.map((booking) => (
                        <tr key={booking.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {booking.service}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{booking.provider}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{booking.date}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                                booking.status
                              )}`}
                            >
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-primary hover:text-primary-600 mr-4">
                              View
                            </a>
                            {booking.status === 'pending' && (
                              <a href="#" className="text-red-500 hover:text-red-700">
                                Cancel
                              </a>
                            )}
                            {booking.status === 'completed' && (
                              <a href="#" className="text-primary hover:text-primary-600">
                                Review
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 flex flex-col items-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-4">
                      {user?.profilePicture ? (
                        <img
                          src={user.profilePicture}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <FaUser size={48} />
                        </div>
                      )}
                    </div>
                    <button className="btn btn-outline text-sm">Change Photo</button>
                  </div>
                  <div className="md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="input"
                          defaultValue={user?.name || ''}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="input bg-gray-50"
                          defaultValue={user?.email || ''}
                          disabled
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="input"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          className="input"
                          placeholder="Your city and state"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Bio
                        </label>
                        <textarea
                          className="input h-24"
                          placeholder="Tell us a bit about yourself"
                        ></textarea>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="btn btn-primary">Save Changes</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs would be implemented here similarly */}
            {activeTab !== 'bookings' && activeTab !== 'profile' && (
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
                <p className="text-gray-600">
                  This section is under development and will be available soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 