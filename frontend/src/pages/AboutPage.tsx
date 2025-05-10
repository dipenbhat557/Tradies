import { FaUsers, FaHandshake, FaShieldAlt, FaTools } from 'react-icons/fa'

const AboutPage = () => {
  const companyValues = [
    {
      id: 1,
      title: 'Quality Craftsmanship',
      description: 'We connect you with tradespeople who take pride in their work and deliver exceptional results.',
      icon: <FaTools className="text-primary text-4xl mb-4" />,
    },
    {
      id: 2,
      title: 'Trust & Reliability',
      description: 'Every service provider is thoroughly vetted to ensure reliability and professionalism.',
      icon: <FaShieldAlt className="text-primary text-4xl mb-4" />,
    },
    {
      id: 3,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our priority, and we work hard to ensure a seamless experience.',
      icon: <FaUsers className="text-primary text-4xl mb-4" />,
    },
    {
      id: 4,
      title: 'Community Building',
      description: 'We believe in building strong communities by connecting local customers with skilled professionals.',
      icon: <FaHandshake className="text-primary text-4xl mb-4" />,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">About Tradies</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to revolutionize the way homeowners connect with skilled tradespeople,
          making quality home services accessible to everyone.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="mb-20">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Tradies was founded in 2023 with a simple but powerful idea: to make it easier
                for homeowners to find reliable, skilled tradespeople for their home improvement
                and repair needs.
              </p>
              <p>
                After experiencing the frustration of trying to find quality craftspeople for their own
                home projects, our founders decided there had to be a better way. They envisioned a
                platform that would connect homeowners with pre-vetted, skilled professionals who take
                pride in their work.
              </p>
              <p>
                Today, Tradies has grown into a thriving marketplace where thousands of customers find
                the perfect match for their projects, and where skilled tradespeople can grow their
                businesses and showcase their expertise.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Tradies team"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These core principles guide everything we do at Tradies.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues.map((value) => (
            <div key={value.id} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team Section (Placeholder) */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The passionate people behind Tradies who work hard to make your experience exceptional.
          </p>
        </div>
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600">Team members information will be coming soon...</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center p-10 bg-primary-50 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Join Our Community</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you're looking for skilled professionals or you're a tradesperson looking to grow your business,
          we invite you to join our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/register" className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            Get Started Today
          </a>
          <a href="/contact" className="bg-white border border-primary text-primary hover:bg-primary-50 px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutPage 