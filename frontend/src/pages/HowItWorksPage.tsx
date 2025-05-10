import { FaRegLightbulb, FaUserCheck, FaHandshake, FaTools, FaThumbsUp } from 'react-icons/fa'

const HowItWorksPage = () => {
  // Steps for customers
  const customerSteps = [
    {
      id: 1,
      title: 'Describe Your Project',
      description: 'Tell us what you need done and provide some basic details about your project.',
      icon: <FaRegLightbulb className="text-primary text-4xl" />,
    },
    {
      id: 2,
      title: 'Browse and Select Professionals',
      description: 'Review profiles, compare quotes, and check ratings to find the right tradesperson for your project.',
      icon: <FaUserCheck className="text-primary text-4xl" />,
    },
    {
      id: 3,
      title: 'Book and Confirm',
      description: 'Schedule a date and time that works for you, and confirm the details with your chosen professional.',
      icon: <FaHandshake className="text-primary text-4xl" />,
    },
    {
      id: 4,
      title: 'Get the Job Done',
      description: 'Your selected tradesperson will arrive and complete the work to your satisfaction.',
      icon: <FaTools className="text-primary text-4xl" />,
    },
    {
      id: 5,
      title: 'Leave a Review',
      description: 'Rate your experience and help other customers find great service providers.',
      icon: <FaThumbsUp className="text-primary text-4xl" />,
    },
  ]

  // Steps for service providers
  const providerSteps = [
    {
      id: 1,
      title: 'Create Your Profile',
      description: 'Sign up and build a detailed profile showcasing your skills, experience, and portfolio.',
      icon: <FaUserCheck className="text-secondary text-4xl" />,
    },
    {
      id: 2,
      title: 'Set Your Availability',
      description: "Let customers know when you're available to take on new projects.",
      icon: <FaRegLightbulb className="text-secondary text-4xl" />,
    },
    {
      id: 3,
      title: 'Receive Job Requests',
      description: 'Get notified when customers are interested in your services.',
      icon: <FaHandshake className="text-secondary text-4xl" />,
    },
    {
      id: 4,
      title: 'Complete Projects',
      description: "Deliver high-quality work that meets your customers' expectations.",
      icon: <FaTools className="text-secondary text-4xl" />,
    },
    {
      id: 5,
      title: 'Get Paid and Grow',
      description: 'Receive secure payments and build your reputation through customer reviews.',
      icon: <FaThumbsUp className="text-secondary text-4xl" />,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">How Tradies Works</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our platform connects skilled tradespeople with customers needing their services.
          Here's how the process works for both sides.
        </p>
      </div>

      {/* For Customers Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">For Customers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find reliable professionals for your home improvement and repair needs in just a few simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-primary-100"></div>
          
          <div className="space-y-12">
            {customerSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-md"></div>

                  {/* Content */}
                  <div className="md:w-1/2 p-6 md:p-8 bg-white rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 text-primary">{step.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        <span className="text-primary mr-2">{step.id}.</span>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* For Service Providers Section */}
      <div className="pt-12 border-t border-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">For Service Providers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Grow your business and connect with customers looking for your skills and expertise.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-secondary-100"></div>
          
          <div className="space-y-12">
            {providerSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-secondary border-4 border-white shadow-md"></div>

                  {/* Content */}
                  <div className="md:w-1/2 p-6 md:p-8 bg-white rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 text-secondary">{step.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        <span className="text-secondary mr-2">{step.id}.</span>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center p-10 bg-primary-50 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of happy customers and skilled professionals on our platform today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/register?type=customer" className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            Sign Up as a Customer
          </a>
          <a href="/register?type=provider" className="bg-secondary hover:bg-secondary-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            Join as a Service Provider
          </a>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksPage 