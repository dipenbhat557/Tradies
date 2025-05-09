import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaSearch, FaArrowRight, FaHammer, FaTools, FaWrench, FaHome, FaShieldAlt, FaUserCog } from 'react-icons/fa'
import { motion } from 'framer-motion'

// Sample data for popular service categories with better icons
const categories = [
  { id: 1, name: 'Plumbing', icon: <FaWrench className="text-primary text-4xl" />, count: 124 },
  { id: 2, name: 'Electrical', icon: <FaTools className="text-primary text-4xl" />, count: 98 },
  { id: 3, name: 'Cleaning', icon: <FaHome className="text-primary text-4xl" />, count: 156 },
  { id: 4, name: 'Carpentry', icon: <FaHammer className="text-primary text-4xl" />, count: 87 },
  { id: 5, name: 'Gardening', icon: <FaTools className="text-primary text-4xl" />, count: 112 },
  { id: 6, name: 'Painting', icon: <FaTools className="text-primary text-4xl" />, count: 76 },
]

// Updated sample data for popular services with verified images
const popularServices = [
  {
    id: 1,
    title: 'Custom Carpentry',
    category: 'Carpentry',
    rating: 4.9,
    reviews: 138,
    price: '$65/hr',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    provider: {
      name: 'Thomas Wright',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  },
  {
    id: 2,
    title: 'Electrical Installations',
    category: 'Electrical',
    rating: 4.7,
    reviews: 98,
    price: '$45/hr',
    image: 'https://images.unsplash.com/photo-1565007880222-c989d4eae0ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    provider: {
      name: 'Sarah Johnson',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
  {
    id: 3,
    title: 'Kitchen Renovation',
    category: 'Renovation',
    rating: 5.0,
    reviews: 172,
    price: '$75/hr',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    provider: {
      name: 'Michael Chen',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
  },
]

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    text: "The craftsmanship was exceptional. The carpenter I hired through Tradies built a beautiful custom bookshelf that perfectly matched my home's style.",
    author: 'Jessica Thompson',
    role: 'Homeowner',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
  {
    id: 2,
    text: "As a woodworker, Tradies has connected me with clients who truly appreciate handcrafted quality. It's transformed my small business completely.",
    author: 'Robert Williams',
    role: 'Master Carpenter',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    id: 3,
    text: "I've used Tradies for everything from cabinet installation to a complete kitchen remodel. Every craftsperson has been professional and highly skilled.",
    author: 'David Chen',
    role: 'Homeowner',
    image: 'https://randomuser.me/api/portraits/men/60.jpg',
  },
]

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Add search functionality here
    console.log('Searching for:', searchQuery)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Woodworking background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/70"></div>
        </div>
        
        <div className="container relative mx-auto px-4 flex flex-col items-center text-center">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Craftsmanship at Your Fingertips
            </h1>
            <p className="text-xl mb-10 text-white opacity-90 max-w-2xl mx-auto">
              Connect with skilled tradespeople who take pride in their work.
              Quality craftsmanship for your home improvement needs.
            </p>
            
            <form onSubmit={handleSearch} className="flex mb-10 max-w-2xl mx-auto">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-500" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-12 pr-4 py-4 rounded-l-lg text-gray-900 placeholder-gray-500 text-lg shadow-lg"
                  placeholder="What project do you need help with?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-r-lg transition shadow-lg text-lg font-semibold"
              >
                Find Help
              </button>
            </form>
            
            <div className="flex flex-wrap justify-center gap-4 text-white">
              <Link to="/services?category=carpentry" className="px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                Carpentry
              </Link>
              <Link to="/services?category=plumbing" className="px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                Plumbing
              </Link>
              <Link to="/services?category=electrical" className="px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                Electrical
              </Link>
              <Link to="/services?category=renovation" className="px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                Renovation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="bg-gray-50 py-8 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center">
              <FaShieldAlt className="text-primary text-2xl mr-2" />
              <span className="font-semibold">Verified Professionals</span>
            </div>
            <div className="flex items-center">
              <FaUserCog className="text-primary text-2xl mr-2" />
              <span className="font-semibold">Skilled Craftspeople</span>
            </div>
            <div className="flex items-center">
              <FaStar className="text-primary text-2xl mr-2" />
              <span className="font-semibold">Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Expert Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Browse our categories of skilled professionals ready to bring your ideas to life
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/services?category=${category.name}`}
                className="flex flex-col items-center p-6 rounded-lg transition-all hover:transform hover:-translate-y-1 hover:shadow-lg bg-gray-50 border border-gray-100"
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="font-semibold text-lg mb-1 text-gray-800">
                  {category.name}
                </h3>
                <p className="text-gray-500 text-sm">{category.count} providers</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary px-8 py-3 text-lg">
              Browse All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Finding quality craftsmanship has never been easier
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
              <div className="bg-primary text-white rounded-full h-14 w-14 flex items-center justify-center text-2xl font-bold absolute -top-7 left-1/2 transform -translate-x-1/2">1</div>
              <h3 className="text-2xl font-semibold mb-4 mt-6 text-gray-800">Describe Your Project</h3>
              <p className="text-gray-600 leading-relaxed">
                Share what you need done, whether it's fixing a leaky sink or building custom furniture
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
              <div className="bg-primary text-white rounded-full h-14 w-14 flex items-center justify-center text-2xl font-bold absolute -top-7 left-1/2 transform -translate-x-1/2">2</div>
              <h3 className="text-2xl font-semibold mb-4 mt-6 text-gray-800">Match with Artisans</h3>
              <p className="text-gray-600 leading-relaxed">
                We'll connect you with skilled tradespeople who specialize in your exact needs
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
              <div className="bg-primary text-white rounded-full h-14 w-14 flex items-center justify-center text-2xl font-bold absolute -top-7 left-1/2 transform -translate-x-1/2">3</div>
              <h3 className="text-2xl font-semibold mb-4 mt-6 text-gray-800">Quality Work, Delivered</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy professional craftsmanship completed to your satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2 text-gray-800">Featured Craftspeople</h2>
              <p className="text-gray-600 text-lg">Discover exceptional skill and craftsmanship</p>
            </div>
            <Link
              to="/services"
              className="flex items-center font-semibold text-primary hover:text-primary-600 transition text-lg"
            >
              <span className="mr-2">View All</span>
              <FaArrowRight />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-lg font-bold">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">{service.title}</h3>
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className="ml-2 font-medium text-gray-700">{service.rating}</span>
                    <span className="ml-1 text-gray-500">({service.reviews} reviews)</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <div className="flex items-center">
                      <img
                        src={service.provider.image}
                        alt={service.provider.name}
                        className="w-10 h-10 rounded-full border-2 border-primary-100 mr-3"
                      />
                      <span className="text-gray-700">{service.provider.name}</span>
                    </div>
                    <span className="text-primary-700 font-bold">{service.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Customer Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hear from homeowners and businesses who found skilled artisans through Tradies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="absolute -top-5 left-8 text-primary-500 text-7xl opacity-10">"</div>
                <p className="text-gray-700 mb-6 relative z-10 text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full border-2 border-primary-100 mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                    <p className="text-primary-700">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1567025343664-dab4214b626b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Woodworking tools"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Join thousands who've discovered skilled craftspeople for their home improvement projects
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services" className="btn bg-white hover:bg-gray-100 text-primary-800 px-10 py-4 text-lg font-bold shadow-lg">
              Find a Craftsperson
            </Link>
            <Link to="/register" className="btn bg-secondary hover:bg-secondary-600 text-white px-10 py-4 text-lg font-bold shadow-lg">
              Join as a Provider
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 