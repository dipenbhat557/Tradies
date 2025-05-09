import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaCreditCard, FaPaypal, FaApple } from 'react-icons/fa'

// Mock service data
const serviceData = {
  id: '1',
  name: 'Professional Plumbing Service',
  description: 'Expert plumbing services for all your needs.',
  price: 85,
  priceUnit: 'hour',
  estimatedDuration: 2,
  provider: {
    id: 'p1',
    name: 'John Smith',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4.9,
    reviews: 212
  }
}

// Available time slots
const availableTimeSlots = [
  { id: 't1', date: '2023-08-15', times: ['09:00', '11:00', '14:00', '16:00'] },
  { id: 't2', date: '2023-08-16', times: ['10:00', '13:00', '15:00', '17:00'] },
  { id: 't3', date: '2023-08-17', times: ['09:00', '12:00', '14:00', '16:00'] },
  { id: 't4', date: '2023-08-18', times: ['10:00', '12:00', '15:00', '17:00'] },
  { id: 't5', date: '2023-08-19', times: ['09:00', '11:00', '13:00', '16:00'] }
]

function BookingPage() {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  const [service, setService] = useState(serviceData)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [notes, setNotes] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('credit-card')
  const [isLoading, setIsLoading] = useState(true)
  const [currentStep, setCurrentStep] = useState(1)
  const [error, setError] = useState('')

  // In a real app, you would fetch service details based on serviceId
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setService(serviceData)
      setIsLoading(false)
    }, 500)
  }, [serviceId])

  const handleDateSelection = (date: string) => {
    setSelectedDate(date)
    setSelectedTime('') // Reset time when date changes
  }

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time)
  }

  const getAvailableTimesForDate = () => {
    const dateSlot = availableTimeSlots.find(slot => slot.date === selectedDate)
    return dateSlot ? dateSlot.times : []
  }

  const handleNextStep = () => {
    // Validate current step before proceeding
    if (currentStep === 1 && (!selectedDate || !selectedTime)) {
      setError('Please select both date and time')
      return
    }
    
    if (currentStep === 2 && (!address || !phoneNumber)) {
      setError('Please fill in all required fields')
      return
    }
    
    setError('')
    setCurrentStep(prev => prev + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1)
  }

  const handleSubmit = () => {
    // Here you would process the booking
    // For now we'll just simulate success and redirect
    setIsLoading(true)
    
    setTimeout(() => {
      navigate('/dashboard')
    }, 1000)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm">
        <Link to="/" className="text-gray-500 hover:text-blue-600">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to={`/services/${service.id}`} className="text-gray-500 hover:text-blue-600">
          {service.name}
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">Booking</span>
      </div>

      {/* Booking Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
              currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              1
            </div>
            <span className="text-sm">Schedule</span>
          </div>
          <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
              currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              2
            </div>
            <span className="text-sm">Details</span>
          </div>
          <div className={`w-16 h-1 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
              currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              3
            </div>
            <span className="text-sm">Payment</span>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Booking Form Section */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Step 1: Schedule */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Select Date & Time</h2>
                
                {/* Date Selection */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Date</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {availableTimeSlots.map(slot => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => handleDateSelection(slot.date)}
                        className={`py-2 px-3 rounded-md border text-center ${
                          selectedDate === slot.date
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'border-gray-300 hover:border-blue-400'
                        }`}
                      >
                        {formatDate(slot.date)}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Time Selection (only show if date is selected) */}
                {selectedDate && (
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Time</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {getAvailableTimesForDate().map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleTimeSelection(time)}
                          className={`py-2 px-4 rounded-md border flex items-center justify-center ${
                            selectedTime === time
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'border-gray-300 hover:border-blue-400'
                          }`}
                        >
                          <FaClock className="mr-2" /> {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Details */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Service Details</h2>
                
                {/* Address */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
                    Address*
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                      <FaMapMarkerAlt />
                    </span>
                    <input
                      type="text"
                      id="address"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                      placeholder="Enter your address"
                      required
                    />
                  </div>
                </div>
                
                {/* Phone Number */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                {/* Additional Notes */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="notes">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    rows={4}
                    className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                    placeholder="Any specific requirements or information the provider should know..."
                  />
                </div>
              </div>
            )}
            
            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h2>
                
                <div className="space-y-4 mb-6">
                  {/* Credit Card */}
                  <div 
                    className={`border rounded-md p-4 cursor-pointer ${
                      paymentMethod === 'credit-card' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
                    onClick={() => setPaymentMethod('credit-card')}
                  >
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border flex items-center justify-center mr-3 border-gray-400">
                        {paymentMethod === 'credit-card' && (
                          <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                        )}
                      </div>
                      <div className="flex items-center">
                        <FaCreditCard className="text-gray-600 mr-2" />
                        <span className="font-medium">Credit or Debit Card</span>
                      </div>
                    </div>
                    {paymentMethod === 'credit-card' && (
                      <div className="mt-4 pl-8">
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-medium mb-1">
                            Card Number
                          </label>
                          <input
                            type="text"
                            className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                              placeholder="MM / YY"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">
                              CVC
                            </label>
                            <input
                              type="text"
                              className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* PayPal */}
                  <div 
                    className={`border rounded-md p-4 cursor-pointer ${
                      paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
                    onClick={() => setPaymentMethod('paypal')}
                  >
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border flex items-center justify-center mr-3 border-gray-400">
                        {paymentMethod === 'paypal' && (
                          <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                        )}
                      </div>
                      <div className="flex items-center">
                        <FaPaypal className="text-blue-700 mr-2" />
                        <span className="font-medium">PayPal</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Apple Pay */}
                  <div 
                    className={`border rounded-md p-4 cursor-pointer ${
                      paymentMethod === 'apple-pay' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
                    onClick={() => setPaymentMethod('apple-pay')}
                  >
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border flex items-center justify-center mr-3 border-gray-400">
                        {paymentMethod === 'apple-pay' && (
                          <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                        )}
                      </div>
                      <div className="flex items-center">
                        <FaApple className="text-black mr-2" />
                        <span className="font-medium">Apple Pay</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="bg-gray-200 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-300 transition"
                >
                  Back
                </button>
              ) : (
                <div></div> // Empty div for spacing
              )}
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
                >
                  Book Now
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Booking Summary</h3>
            
            {/* Service Info */}
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-3">
                <img
                  src="https://images.unsplash.com/photo-1606341518934-abe87f36668a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{service.name}</h4>
                <p className="text-sm text-gray-600">By {service.provider.name}</p>
              </div>
            </div>
            
            {/* Booking Details */}
            <div className="border-t border-b py-4 mb-4">
              {selectedDate && selectedTime && (
                <div className="flex items-center text-gray-700 mb-2">
                  <FaCalendarAlt className="text-gray-500 mr-2" />
                  <span>{formatDate(selectedDate)} • {selectedTime}</span>
                </div>
              )}
              <div className="flex items-center text-gray-700">
                <FaClock className="text-gray-500 mr-2" />
                <span>Est. duration: {service.estimatedDuration} hour(s)</span>
              </div>
            </div>
            
            {/* Price Details */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Service fee</span>
                <span>${service.price} / {service.priceUnit}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Est. total hours</span>
                <span>{service.estimatedDuration}</span>
              </div>
              {service.priceUnit === 'hour' && (
                <div className="flex justify-between font-bold text-lg mt-4">
                  <span>Total</span>
                  <span>${service.price * service.estimatedDuration}</span>
                </div>
              )}
              {service.priceUnit !== 'hour' && (
                <div className="flex justify-between font-bold text-lg mt-4">
                  <span>Total</span>
                  <span>${service.price}</span>
                </div>
              )}
            </div>
            
            {/* Provider Info */}
            <div className="flex items-center border-t pt-4">
              <img
                src={service.provider.image}
                alt={service.provider.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium text-gray-800">{service.provider.name}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {service.provider.rating}
                  </span>
                  <span className="mx-1">•</span>
                  <span>{service.provider.reviews} reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPage 