import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FaStar, FaRegStar, FaClock, FaMapMarkerAlt, FaUser, FaCalendarAlt } from 'react-icons/fa'

// Mock data - this would come from an API in a real app
const serviceData = {
  id: '1',
  name: 'Professional Plumbing Service',
  description: 'Expert plumbing services for all your needs. We handle everything from small repairs to complete installation and renovation projects. Our team of licensed plumbers provides fast, reliable service at competitive rates.',
  longDescription: 'We offer comprehensive plumbing services for residential and commercial properties. Our experienced team can handle a wide range of plumbing issues, including leak repairs, pipe installations, drain cleaning, water heater services, bathroom and kitchen renovations, and emergency plumbing. We pride ourselves on providing timely, professional service with transparent pricing and guaranteed workmanship.',
  category: 'Plumbing',
  price: 85,
  priceUnit: 'hour',
  rating: 4.8,
  reviews: 124,
  provider: {
    id: 'p1',
    name: 'John Smith',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4.9,
    reviews: 212,
    memberSince: 'January 2019',
    completedJobs: 347
  },
  images: [
    'https://images.unsplash.com/photo-1606341518934-abe87f36668a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1574359411659-13c065443c9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599236449650-f2a86b592422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  ],
  features: [
    'Licensed & Insured Plumbers',
    '24/7 Emergency Services',
    'Free Estimates',
    '90-Day Labor Warranty',
    'Senior & Military Discounts',
    'Transparent Pricing'
  ],
  areas: ['Downtown', 'North Side', 'South Side', 'East Side', 'West Side'],
  availability: ['Weekdays', 'Weekends', 'Evenings']
}

// Sample review data
const reviewsData = [
  {
    id: 'r1',
    user: 'Michael Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
    date: '2023-06-12',
    comment: 'Excellent service! Fixed my leaking sink quickly and professionally. Would definitely recommend.'
  },
  {
    id: 'r2',
    user: 'Sarah Wilson',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    rating: 4,
    date: '2023-05-28',
    comment: 'Very professional and knowledgeable. Arrived on time and completed the job efficiently.'
  },
  {
    id: 'r3',
    user: 'David Thompson',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 5,
    date: '2023-05-15',
    comment: 'Great experience. John was very thorough and explained everything he was doing. Fair pricing too.'
  }
]

function ServiceDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)
  const [service, setService] = useState(serviceData)
  const [reviews, setReviews] = useState(reviewsData)
  const [isLoading, setIsLoading] = useState(false)

  // In a real application, you would fetch the service data based on the ID
  useEffect(() => {
    setIsLoading(true)
    // This would be an API call in a real application
    setTimeout(() => {
      setService(serviceData)
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

  const handleBookNow = () => {
    navigate(`/booking/${service.id}`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm">
        <Link to="/" className="text-gray-500 hover:text-blue-600">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/" className="text-gray-500 hover:text-blue-600">{service.category}</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">{service.name}</span>
      </div>

      {/* Service Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Image Gallery */}
        <div className="lg:col-span-2">
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img 
              src={service.images[selectedImage]} 
              alt={service.name} 
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {service.images.map((image, index) => (
              <div 
                key={index}
                className={`cursor-pointer w-24 h-24 rounded-md overflow-hidden border-2 ${
                  selectedImage === index ? 'border-blue-500' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image} 
                  alt={`${service.name} ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Service Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h1>
          <div className="flex items-center mb-3">
            <div className="flex mr-2">
              {renderRatingStars(service.rating)}
            </div>
            <span className="text-gray-600">
              {service.rating} ({service.reviews} reviews)
            </span>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-4">
            ${service.price}/{service.priceUnit}
          </p>
          <div className="border-t border-b py-4 my-4 border-gray-200">
            <p className="text-gray-700 mb-4">{service.description}</p>
          </div>

          {/* Provider info */}
          <div className="flex items-center mb-6">
            <img 
              src={service.provider.image} 
              alt={service.provider.name} 
              className="w-14 h-14 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{service.provider.name}</p>
              <div className="flex items-center text-sm text-gray-600">
                <div className="flex mr-1">
                  {renderRatingStars(service.provider.rating)}
                </div>
                <span>{service.provider.rating} ({service.provider.reviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* Book now button */}
          <button 
            onClick={handleBookNow}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Book Now
          </button>

          {/* Service features */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Service includes:</h3>
            <ul className="text-gray-600">
              {service.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start mb-1">
                  <span className="text-green-500 mr-2">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Description */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">About This Service</h2>
            <p className="text-gray-700 mb-4">{service.longDescription}</p>
            
            {/* Features */}
            <h3 className="font-bold text-gray-800 mb-2 mt-6">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Reviews ({service.reviews})
              </h2>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {renderRatingStars(service.rating)}
                </div>
                <span className="text-gray-600">{service.rating} overall</span>
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
                      <div className="flex mb-2">
                        {renderRatingStars(review.rating)}
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Reviews Button */}
            <div className="mt-6 text-center">
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                View All Reviews
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div>
          {/* Availability */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="font-bold text-gray-800 mb-3">Availability</h3>
            <div className="space-y-2">
              {service.availability.map((time, index) => (
                <div key={index} className="flex items-center">
                  <FaClock className="text-gray-500 mr-2" />
                  <span className="text-gray-700">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="font-bold text-gray-800 mb-3">Service Areas</h3>
            <div className="space-y-2">
              {service.areas.map((area, index) => (
                <div key={index} className="flex items-center">
                  <FaMapMarkerAlt className="text-gray-500 mr-2" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Provider Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-gray-800 mb-4">About the Provider</h3>
            <div className="flex items-center mb-4">
              <img 
                src={service.provider.image} 
                alt={service.provider.name} 
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">{service.provider.name}</p>
                <div className="flex items-center text-sm">
                  <div className="flex mr-1">
                    {renderRatingStars(service.provider.rating)}
                  </div>
                  <span className="text-gray-600">
                    {service.provider.rating} ({service.provider.reviews})
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center">
                <FaUser className="mr-2 text-gray-500" />
                <span>Member since {service.provider.memberSince}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-gray-500" />
                <span>{service.provider.completedJobs} completed jobs</span>
              </div>
            </div>
            
            <div className="mt-4">
              <Link 
                to={`/providers/${service.provider.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetailsPage 