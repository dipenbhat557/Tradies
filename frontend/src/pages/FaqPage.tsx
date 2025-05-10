import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const FaqPage = () => {
  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  // Toggle expanded state for an FAQ item
  const toggleItem = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // FAQ categories and questions
  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      faqs: [
        {
          id: 'what-is-tradies',
          question: 'What is Tradies?',
          answer: 'Tradies is a platform that connects homeowners and businesses with skilled tradespeople for a wide range of services. Our goal is to make it easy to find reliable professionals for your home improvement, repair, and maintenance needs.'
        },
        {
          id: 'how-works',
          question: 'How does Tradies work?',
          answer: 'As a customer, you can browse through our directory of service providers, or post a specific job. Once you find a suitable tradesperson, you can contact them, discuss your project, and book their services. As a service provider, you can create a profile, showcase your skills and previous work, and respond to job requests from potential customers.'
        },
        {
          id: 'coverage-area',
          question: 'Where is Tradies available?',
          answer: 'Tradies is currently available in major cities across Australia, including Sydney, Melbourne, Brisbane, Perth, and Adelaide. We're constantly expanding to new areas, so if we're not in your city yet, we likely will be soon!'
        },
        {
          id: 'service-types',
          question: 'What types of services can I find on Tradies?',
          answer: 'Tradies connects you with professionals in various trades, including plumbing, electrical work, carpentry, painting, cleaning, landscaping, HVAC, roofing, and more. Whatever home service you need, you can likely find a qualified professional on our platform.'
        },
      ]
    },
    {
      id: 'customers',
      title: 'For Customers',
      faqs: [
        {
          id: 'hiring-process',
          question: 'How do I hire a tradesperson?',
          answer: 'You can hire a tradesperson by browsing our directory, filtering by service type and location, and then contacting them directly through our platform. Alternatively, you can post a job and receive proposals from interested service providers.'
        },
        {
          id: 'verify-providers',
          question: 'How do you verify service providers?',
          answer: 'All service providers on Tradies go through a verification process that includes identity verification, trade license verification (where applicable), insurance checks, and a review of their work history. We also collect and display customer reviews to help you make informed decisions.'
        },
        {
          id: 'cost',
          question: 'How much does it cost to use Tradies as a customer?',
          answer: 'Basic usage of Tradies is free for customers. You can browse service providers and post jobs at no cost. We offer premium subscription plans for customers who need additional features like priority matching and unlimited project posts.'
        },
        {
          id: 'guarantee',
          question: 'Is there a guarantee on work completed?',
          answer: 'While Tradies doesn't provide a direct guarantee, we do have a satisfaction policy. If you're not satisfied with the work completed, we'll help mediate between you and the service provider to reach a resolution. Many service providers also offer their own guarantees or warranties on their work.'
        },
      ]
    },
    {
      id: 'providers',
      title: 'For Service Providers',
      faqs: [
        {
          id: 'join-provider',
          question: 'How do I join as a service provider?',
          answer: 'To join as a service provider, create an account on our platform, complete your profile with your skills, experience, and portfolio, verify your trade credentials (if applicable), and set up your availability and service area. Once your profile is approved, you can start receiving job requests.'
        },
        {
          id: 'provider-fees',
          question: 'What fees do you charge service providers?',
          answer: 'We offer different subscription tiers for service providers. Our basic tier is free and includes a limited number of job leads per month. Premium tiers offer additional features like priority placement in search results, unlimited job leads, and advanced profile customization for a monthly or annual fee.'
        },
        {
          id: 'leads-generation',
          question: 'How do I get more job leads?',
          answer: 'To maximize your job leads, complete your profile with detailed information about your services, add high-quality photos of your work, encourage satisfied customers to leave reviews, respond promptly to inquiries, and consider upgrading to a premium plan for better visibility in search results.'
        },
        {
          id: 'handle-payments',
          question: 'How are payments handled?',
          answer: 'Payments are typically arranged directly between you and your clients. However, we do offer an optional secure payment system that can handle invoicing, payments, and receipts for a small processing fee. This provides added security and convenience for both parties.'
        },
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      faqs: [
        {
          id: 'account-issues',
          question: 'I'm having trouble with my account. What should I do?',
          answer: 'If you're experiencing account issues, try resetting your password first. If that doesn't solve the problem, check our help center for common solutions, or contact our support team through the "Help" section in your account or by emailing support@tradies.com.'
        },
        {
          id: 'report-problem',
          question: 'How do I report a problem with a service provider or customer?',
          answer: 'You can report issues through the "Report" button on any profile or job listing. Alternatively, contact our support team with details about the problem, including relevant messages or transaction information. We take all reports seriously and will investigate promptly.'
        },
        {
          id: 'delete-account',
          question: 'How do I delete my account?',
          answer: 'To delete your account, go to your account settings and select "Delete Account" at the bottom of the page. Follow the prompts to confirm the deletion. Please note that this action is permanent and will remove all your data from our platform.'
        },
        {
          id: 'app-available',
          question: 'Is there a mobile app available?',
          answer: 'Yes, the Tradies mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store. The app offers all the features of the web platform, optimized for mobile use, with additional features like push notifications for job updates.'
        },
      ]
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find answers to common questions about how Tradies works for both customers and service providers.
        </p>
      </div>

      {/* FAQ Categories */}
      <div className="space-y-16">
        {faqCategories.map((category) => (
          <div key={category.id} className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-gray-800">{category.title}</h2>
            <div className="space-y-4">
              {category.faqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={expandedItems[faq.id]}
                  >
                    <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                    {expandedItems[faq.id] ? 
                      <FaChevronUp className="text-primary" /> : 
                      <FaChevronDown className="text-primary" />
                    }
                  </button>
                  {expandedItems[faq.id] && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Still have questions section */}
      <div className="mt-20 bg-primary-50 rounded-lg p-10 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Still Have Questions?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          If you couldn't find the answer you were looking for, our support team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            Contact Support
          </a>
          <a href="/help-center" className="bg-white border border-primary text-primary hover:bg-primary-50 px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            Visit Help Center
          </a>
        </div>
      </div>
    </div>
  )
}

export default FaqPage 