import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { FaFilter, FaSearch } from 'react-icons/fa'

const ServicesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  // Initialize state from URL parameters
  useEffect(() => {
    const queryFromUrl = searchParams.get('search') || ''
    const categoryFromUrl = searchParams.get('category') || 'all'
    
    setSearchQuery(queryFromUrl)
    setSelectedCategory(categoryFromUrl)
  }, [searchParams])

  // Update URL parameters when filters change
  const updateUrlParams = (newSearchQuery: string, newCategory: string) => {
    const params: Record<string, string> = {}
    
    if (newSearchQuery) {
      params.search = newSearchQuery
    }
    
    if (newCategory !== 'all') {
      params.category = newCategory
    }
    
    setSearchParams(params)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    updateUrlParams(searchQuery, selectedCategory)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value
    setSelectedCategory(newCategory)
    updateUrlParams(searchQuery, newCategory)
  }

  const handleViewDetails = (serviceId: number) => {
    navigate(`/services/${serviceId}`)
  }
  
  // Sample categories
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'plumbing', name: 'Plumbing' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'carpentry', name: 'Carpentry' },
    { id: 'cleaning', name: 'Cleaning' },
    { id: 'gardening', name: 'Gardening' },
    { id: 'painting', name: 'Painting' },
  ]
  
  // Sample services for demonstration
  const services = [
    {
      id: 1,
      title: 'Custom Carpentry',
      category: 'carpentry',
      description: 'Professional custom carpentry services for all your woodworking needs.',
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
    },
    {
      id: 2,
      title: 'Electrical Repairs',
      category: 'electrical',
      description: 'Expert electrical repair and installation services for your home or business.',
      image: 'https://images.unsplash.com/photo-1565007880222-c989d4eae0ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
    },
    {
      id: 3,
      title: 'Plumbing Services',
      category: 'plumbing',
      description: 'Professional plumbing services for repairs, installations, and maintenance.',
      image: 'https://images.unsplash.com/photo-1574314710619-f2c4784c926b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
    },
    {
      id: 4,
      title: 'Home Cleaning',
      category: 'cleaning',
      description: 'Comprehensive home cleaning services to keep your space spotless.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
    },
    {
      id: 5,
      title: 'Landscape Gardening',
      category: 'gardening',
      description: 'Transform your outdoor space with our professional landscaping services.',
      image: 'https://images.unsplash.com/photo-1586280268958-9483002d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
    },
    {
      id: 6,
      title: 'Interior Painting',
      category: 'painting',
      description: 'Professional interior painting services for a fresh new look.',
      image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
    },
  ]
  
  // Filter services based on category and search query
  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse our range of professional services and find the perfect match for your needs
        </p>
      </div>
      
      {/* Search and filters */}
      <div className="mb-10">
        <form onSubmit={handleSearch}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search bar */}
            <div className="w-full md:w-2/3 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                placeholder="Search services..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            
            {/* Categories dropdown */}
            <div className="w-full md:w-1/3 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaFilter className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-4 py-3 rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>
      
      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map(service => (
          <div 
            key={service.id} 
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
              <div className="mb-4 flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{service.rating}/5</span>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button 
                onClick={() => handleViewDetails(service.id)}
                className="bg-primary hover:bg-primary-600 text-white py-2 px-4 rounded-md transition-colors w-full"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* No results message */}
      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-600">No services found matching your criteria</h3>
          <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}

export default ServicesPage 