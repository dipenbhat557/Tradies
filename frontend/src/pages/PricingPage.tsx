import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly')
  
  // Pricing plans data
  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Perfect for individuals and small projects',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Create a customer profile',
        'Browse service providers',
        'Post up to 3 projects per month',
        'Basic customer support',
      ],
      cta: 'Sign Up Free',
      isPopular: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Great for regular home improvement needs',
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      features: [
        'All Basic features',
        'Priority matching',
        'Unlimited project posts',
        'Direct messaging with providers',
        'Priority customer support',
        'Project management tools',
      ],
      cta: 'Try Pro',
      isPopular: true,
    },
    {
      id: 'business',
      name: 'Business',
      description: 'For property managers and businesses',
      monthlyPrice: 49.99,
      annualPrice: 499.99,
      features: [
        'All Pro features',
        'Dedicated account manager',
        'Multiple user accounts',
        'Advanced reporting tools',
        '24/7 premium support',
        'Customized service agreements',
        'Bulk project management',
      ],
      cta: 'Contact Sales',
      isPopular: false,
    },
  ]

  // Provider pricing plans
  const providerPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'For individual tradespeople just getting started',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Professional profile page',
        'Receive up to 5 job leads per month',
        'Basic job management tools',
        'Standard placement in search results',
      ],
      cta: 'Start Free',
      isPopular: false,
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'For established tradespeople and small teams',
      monthlyPrice: 29.99,
      annualPrice: 299.99,
      features: [
        'All Starter features',
        'Unlimited job leads',
        'Priority placement in search results',
        'Advanced profile customization',
        'Review management tools',
        'Analytics dashboard',
        'Dedicated customer support',
      ],
      cta: 'Try Professional',
      isPopular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large contracting companies and teams',
      monthlyPrice: 99.99,
      annualPrice: 999.99,
      features: [
        'All Professional features',
        'Team management tools',
        'Custom branding options',
        'Featured provider status',
        'API access for integration',
        'Dedicated account manager',
        'Advanced analytics and reporting',
        'Premium customer support',
      ],
      cta: 'Contact Sales',
      isPopular: false,
    },
  ]

  // Save percentage calculation for annual billing
  const calculateSavings = (monthly: number, annual: number) => {
    if (monthly === 0) return 0
    const monthlyCost = monthly * 12
    const savings = ((monthlyCost - annual) / monthlyCost) * 100
    return Math.round(savings)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the plan that works for your needs. All plans include access to our platform's core features.
        </p>
      </div>

      {/* Pricing toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 p-1 rounded-lg inline-flex">
          <button
            className={`px-6 py-3 rounded-md text-sm font-medium ${
              billingPeriod === 'monthly'
                ? 'bg-white shadow-sm text-gray-800'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setBillingPeriod('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-3 rounded-md text-sm font-medium ${
              billingPeriod === 'annually'
                ? 'bg-white shadow-sm text-gray-800'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setBillingPeriod('annually')}
          >
            Annual <span className="text-primary">Save up to 20%</span>
          </button>
        </div>
      </div>

      {/* Customer Pricing Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">For Customers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl border ${
                plan.isPopular ? 'border-primary' : 'border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-primary py-2 text-white text-center font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-gray-800">
                    ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    <span className="text-base font-normal text-gray-600">
                      /{billingPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                  </p>
                  {billingPeriod === 'annually' && plan.monthlyPrice > 0 && (
                    <p className="text-green-600 font-medium mt-1">
                      Save {calculateSavings(plan.monthlyPrice, plan.annualPrice)}% with annual billing
                    </p>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-md font-semibold ${
                  plan.isPopular
                    ? 'bg-primary text-white hover:bg-primary-600'
                    : 'bg-white text-primary border border-primary hover:bg-primary-50'
                } transition-colors`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Provider Pricing Section */}
      <div>
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">For Service Providers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {providerPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl border ${
                plan.isPopular ? 'border-secondary' : 'border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-secondary py-2 text-white text-center font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-gray-800">
                    ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    <span className="text-base font-normal text-gray-600">
                      /{billingPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                  </p>
                  {billingPeriod === 'annually' && plan.monthlyPrice > 0 && (
                    <p className="text-green-600 font-medium mt-1">
                      Save {calculateSavings(plan.monthlyPrice, plan.annualPrice)}% with annual billing
                    </p>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-md font-semibold ${
                  plan.isPopular
                    ? 'bg-secondary text-white hover:bg-secondary-600'
                    : 'bg-white text-secondary border border-secondary hover:bg-secondary-50'
                } transition-colors`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Can I change plans later?</h3>
              <p className="text-gray-600">Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes to your subscription will take effect immediately.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How does billing work?</h3>
              <p className="text-gray-600">We offer both monthly and annual billing options. Annual plans come with a discount. You'll be charged at the beginning of each billing cycle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Do you offer refunds?</h3>
              <p className="text-gray-600">We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team within 14 days of your purchase for a full refund.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans. Contact our sales team for other payment options.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-24 bg-primary-50 rounded-lg p-10 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to get started?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of customers and service providers who are already using Tradies to connect, collaborate, and get things done.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/register?type=customer" className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            Sign Up as a Customer
          </a>
          <a href="/register?type=provider" className="bg-secondary hover:bg-secondary-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            Join as a Provider
          </a>
        </div>
      </div>
    </div>
  )
}

export default PricingPage 