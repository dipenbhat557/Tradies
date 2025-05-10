import { useEffect } from 'react'

const TermsPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Terms of Service</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Please read these terms carefully before using the Tradies platform.
        </p>
        <p className="text-sm text-gray-500 mt-4">Last updated: June 1, 2023</p>
      </div>

      {/* Terms content */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Welcome to Tradies. These Terms of Service govern your use of our website, mobile 
              applications, and services (collectively, the "Platform"). By accessing or using our 
              Platform, you agree to be bound by these Terms.
            </p>
            <p>
              If you do not agree to these Terms, please do not use our Platform. We may update these 
              Terms from time to time, and your continued use of the Platform following any changes 
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Definitions</h2>
            <p>In these Terms, the following definitions apply:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>"Customer" refers to any user who requests services through our Platform.</li>
              <li>"Service Provider" refers to any tradesperson, contractor, or business that offers services through our Platform.</li>
              <li>"User" refers to any person who accesses or uses our Platform, including both Customers and Service Providers.</li>
              <li>"Content" refers to any information, text, graphics, photos, or other materials uploaded, downloaded, or appearing on our Platform.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
            <p>
              To use certain features of our Platform, you may need to create an account. You agree to 
              provide accurate, current, and complete information during the registration process and to 
              update such information to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding your password and for all activities that occur under 
              your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            <p>
              We reserve the right to disable any user account at any time if, in our opinion, you have 
              failed to comply with these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Service Providers</h2>
            <p>As a Service Provider on our Platform, you agree to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Provide accurate information about your services, qualifications, and experience.</li>
              <li>Possess all required licenses, permits, and insurance for the services you offer.</li>
              <li>Perform services with reasonable skill and care, in a professional manner.</li>
              <li>Respond to inquiries and booking requests in a timely manner.</li>
              <li>Honor the prices and terms quoted to Customers through our Platform.</li>
              <li>Comply with all applicable laws and regulations in the performance of your services.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Customers</h2>
            <p>As a Customer on our Platform, you agree to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Provide accurate and complete information about your service needs.</li>
              <li>Communicate respectfully with Service Providers.</li>
              <li>Pay for services as agreed with the Service Provider.</li>
              <li>Provide reasonable access and safe working conditions for Service Providers.</li>
              <li>Leave honest and fair reviews based on your experience.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Payments and Fees</h2>
            <p>
              Tradies may charge fees for certain features or services on our Platform. These fees will be 
              clearly disclosed before you incur any charges.
            </p>
            <p>
              For transactions between Customers and Service Providers, we may offer payment processing 
              services. By using these services, you agree to our Payment Terms, which are incorporated 
              into these Terms by reference.
            </p>
            <p>
              Service Providers are responsible for all taxes, fees, and charges related to their services, 
              and for complying with all applicable tax laws.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Prohibited Activities</h2>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Violating any laws or regulations.</li>
              <li>Infringing on the intellectual property rights of others.</li>
              <li>Posting or transmitting unauthorized commercial communications.</li>
              <li>Uploading viruses or other malicious code.</li>
              <li>Attempting to access accounts or data that doesn't belong to you.</li>
              <li>Interfering with the proper working of the Platform.</li>
              <li>Creating false accounts or providing false information.</li>
              <li>Harassing, intimidating, or discriminating against other users.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Content and Intellectual Property</h2>
            <p>
              Our Platform contains content owned or licensed by Tradies, including text, graphics, logos, 
              icons, images, audio, and software. This content is protected by copyright, trademark, and 
              other intellectual property laws.
            </p>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use our Platform 
              for personal or business purposes in accordance with these Terms.
            </p>
            <p>
              By posting Content on our Platform, you grant us a worldwide, non-exclusive, royalty-free 
              license to use, reproduce, modify, adapt, publish, translate, and distribute such Content 
              in connection with our Platform.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Tradies shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including but not limited to, 
              loss of profits, data, or use, arising out of or in connection with your use of our Platform.
            </p>
            <p>
              We do not guarantee the quality, safety, or legality of services provided by Service 
              Providers, the truth or accuracy of listings, or that Service Providers will perform as 
              promised.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
            <p>
              We may terminate or suspend your account and access to our Platform at any time, without 
              prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use our Platform will cease immediately. All provisions 
              of these Terms which by their nature should survive termination shall survive, including 
              ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Australia, 
              without regard to its conflict of law provisions.
            </p>
            <p>
              Any dispute arising out of or relating to these Terms or your use of the Platform shall be 
              subject to the exclusive jurisdiction of the courts located within Australia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="font-medium mt-2">
              Email: legal@tradies.com<br />
              Mailing Address: 123 Trade Street, Sydney, NSW 2000, Australia
            </p>
          </section>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center">
        <p className="text-gray-600 mb-6">
          By using our platform, you acknowledge that you have read and understand these Terms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/privacy" className="text-primary hover:text-primary-600 font-medium">
            Privacy Policy
          </a>
          <span className="hidden sm:inline text-gray-400">|</span>
          <a href="/cookies" className="text-primary hover:text-primary-600 font-medium">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  )
}

export default TermsPage 