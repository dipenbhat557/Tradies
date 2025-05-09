import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaStar, FaRegStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendarAlt, FaCheckCircle, FaUserCircle, FaThumbsUp } from 'react-icons/fa'

// Mock data - this would come from an API in a real app
const providerData = {
  id: 'p1',
  name: 'John Smith',
  title: 'Master Plumber & Heating Specialist',
  image: 'https://randomuser.me/api/portraits/men/32.jpg',
  rating: 4.9,
  reviews: 212,
  completedJobs: 347,
  location: 'Sydney, NSW',
  memberSince: 'January 2019',
  verified: true,
  about: 'With over 15 years of experience in plumbing and heating services, I specialize in residential and commercial plumbing solutions. I am fully licensed and insured, committed to providing high-quality workmanship and excellent customer service. My team and I handle everything from emergency repairs to complete bathroom and kitchen renovations.',
  languages: ['English', 'Spanish'],
  skills: ['Plumbing', 'Heating', 'Gas Fitting', 'Drain Cleaning', 'Water Heater Installation', 'Bathroom Renovations', 'Kitchen Renovations'],
  certifications: [
    { name: 'Master Plumber License', issuer: 'NSW Plumbing Authority', year: 2015 },
    { name: 'Gas Fitting Certificate', issuer: 'Australian Gas Association', year: 2016 },
    { name: 'Advanced Heating Systems', issuer: 'HVAC Professional Institute', year: 2018 }
  ],
  services: [
    {
      id: 's1',
      name: 'Professional Plumbing Service',
      description: 'Expert plumbing services for all your needs. From small repairs to complete installations.',
      price: 85,
      priceUnit: 'hour',
      image: 'https://images.unsplash.com/photo-1606341518934-abe87f36668a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviews: 124
    },
    {
      id: 's2',
      name: 'Water Heater Installation & Repair',
      description: 'Specialized service for all types of water heaters. Installation, maintenance, and repair.',
      price: 120,
      priceUnit: 'service',
      image: 'https://images.unsplash.com/photo-1585704032905-d445200a6177?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: 5.0,
      reviews: 87
    },
    {
      id: 's3',
      name: 'Bathroom Renovation',
      description: 'Complete bathroom renovation services. From design to installation.',
      price: 2500,
      priceUnit: 'project',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 63
    }
  ],
  workPhotos: [
    'https://images.unsplash.com/photo-1584622650111-993a426bcf0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1631641551473-fbc06877e808?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  ]
}

// Sample review data
const reviewsData = [
  {
    id: 'r1',
    user: 'Michael Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
    date: '2023-06-12',
    serviceId: 's1',
    serviceName: 'Professional Plumbing Service',
    comment: 'John did an excellent job fixing our bathroom leak. He was punctual, professional and very knowledgeable. Highly recommend his services!'
  },
  {
    id: 'r2',
    user: 'Sarah Wilson',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    rating: 5,
    date: '2023-05-28',
    serviceId: 's2',
    serviceName: 'Water Heater Installation & Repair',
    comment: 'Very impressed with John\'s work installing our new water heater. He explained everything clearly and completed the job efficiently. Great service!'
  },
  {
    id: 'r3',
    user: 'David Thompson',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 4,
    date: '2023-05-15',
    serviceId: 's1',
    serviceName: 'Professional Plumbing Service',
    comment: 'John was very professional and fixed our kitchen sink issue quickly. Good value for the service provided.'
  }
]

function ProviderProfilePage() {
  const { id } = useParams()
  const [provider, setProvider] = useState(providerData)
  const [reviews, setReviews] = useState(reviewsData)
  const [activeTab, setActiveTab] = useState('services')
  const [isLoading, setIsLoading] = useState(false)

  // In a real application, you would fetch the provider data based on the ID
  useEffect(() => {
    setIsLoading(true)
    // This would be an API call in a real application
    setTimeout(() => {
      setProvider(providerData)
      setReviews(reviewsData)
      setIsLoading(false)
    }, 500)
  }, [id])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  // Render stars based on rating
  const renderRatingStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />)
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />)
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />)
      }
    }
    return stars
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm">
        <Link to="/" className="text-gray-500 hover:text-blue-600">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/" className="text-gray-500 hover:text-blue-600">Providers</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">{provider.name}</span>
      </div>

      {/* Provider Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Provider Image and Contact */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-center">
              <img 
                src={provider.image} 
                alt={provider.name} 
                className="w-32 h-32 rounded-full mb-4 border-4 border-blue-100"
              />
              <div className="flex mb-1">
                {renderRatingStars(provider.rating)}
              </div>
              <p className="text-gray-600 mb-3">
                {provider.rating} ({provider.reviews} reviews)
              </p>
              {provider.verified && (
                <div className="flex items-center text-green-600 text-sm mb-3">
                  <FaCheckCircle className="mr-1" />
                  <span>Verified Provider</span>
                </div>
              )}
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition w-full mb-2">
                Contact
              </button>
              <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-50 transition w-full">
                Request Quote
              </button>
            </div>
          </div>

          {/* Provider Info */}
          <div className="md:col-span-3">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">{provider.name}</h1>
            <p className="text-gray-600 mb-3">{provider.title}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2 text-gray-500" />
                <span>{provider.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaCalendarAlt className="mr-2 text-gray-500" />
                <span>Member since {provider.memberSince}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaUserCircle className="mr-2 text-gray-500" />
                <span>{provider.completedJobs} completed jobs</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaThumbsUp className="mr-2 text-gray-500" />
                <span>98% satisfaction rate</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">About</h2>
              <p className="text-gray-700 mb-4">{provider.about}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <h3 className="text-gray-700 font-semibold mr-2">Languages:</h3>
                {provider.languages.map((language, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 py-1 px-2 rounded text-sm">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex overflow-x-auto">
          <button 
            onClick={() => setActiveTab('services')} 
            className={`py-3 px-4 border-b-2 font-medium text-sm ${
              activeTab === 'services' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Services
          </button>
          <button 
            onClick={() => setActiveTab('reviews')} 
            className={`py-3 px-4 border-b-2 font-medium text-sm ${
              activeTab === 'reviews' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Reviews
          </button>
          <button 
            onClick={() => setActiveTab('portfolio')} 
            className={`py-3 px-4 border-b-2 font-medium text-sm ${
              activeTab === 'portfolio' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => setActiveTab('credentials')} 
            className={`py-3 px-4 border-b-2 font-medium text-sm ${
              activeTab === 'credentials' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Credentials
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {provider.services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{service.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex mr-1">
                      {renderRatingStars(service.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({service.reviews})
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-blue-600">
                      ${service.price}/{service.priceUnit}
                    </p>
                    <Link 
                      to={`/services/${service.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Client Reviews ({provider.reviews})
              </h2>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {renderRatingStars(provider.rating)}
                </div>
                <span className="text-gray-600">{provider.rating} overall</span>
              </div>
            </div>

            {/* Review List */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6">
                  <div className="flex items-start">
                    <img 
                      src={review.avatar} 
                      alt={review.user} 
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-gray-800">{review.user}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex mb-1">
                        {renderRatingStars(review.rating)}
                      </div>
                      <p className="text-sm text-blue-600 mb-2">
                        Service: {review.serviceName}
                      </p>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Work Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {provider.workPhotos.map((photo, index) => (
                <div key={index} className="rounded-lg overflow-hidden h-48">
                  <img 
                    src={photo} 
                    alt={`Portfolio item ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Credentials Tab */}
        {activeTab === 'credentials' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Professional Credentials</h2>
            
            {/* Certifications */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Certifications</h3>
              <div className="space-y-4">
                {provider.certifications.map((cert, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-800">{cert.name}</h4>
                    <p className="text-gray-600 text-sm">Issued by {cert.issuer} • {cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {provider.skills.map((skill, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 py-2 px-3 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProviderProfilePage 