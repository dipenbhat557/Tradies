import { useEffect } from 'react'

const PrivacyPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn how we collect, use, and protect your personal information.
        </p>
        <p className="text-sm text-gray-500 mt-4">Last updated: June 1, 2023</p>
      </div>

      {/* Privacy content */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              At Tradies, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our website, mobile application, 
              and services (collectively, the "Platform").
            </p>
            <p>
              Please read this Privacy Policy carefully. By using our Platform, you consent to the data 
              practices described in this policy. If you do not agree with the practices described, please 
              do not use our Platform.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Personal Information</h3>
            <p>
              When you register for an account, request services, or participate in certain activities on 
              our Platform, we may collect personally identifiable information, including but not limited to:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Name, email address, phone number, and physical address</li>
              <li>Profile information and photographs</li>
              <li>Payment information, such as credit card details (which are processed securely through our payment processors)</li>
              <li>Service preferences and history</li>
              <li>For Service Providers: professional qualifications, license information, and insurance details</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Non-Personal Information</h3>
            <p>
              We may also collect non-personal information, which does not directly identify you, 
              including but not limited to:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Device information (type, operating system, browser)</li>
              <li>Usage data (pages visited, time spent, clicks)</li>
              <li>IP address and general location information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Provide, maintain, and improve our Platform and services</li>
              <li>Process transactions and send related information</li>
              <li>Connect Customers with Service Providers</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to customer service requests and support needs</li>
              <li>Personalize your experience and deliver content and product/service offerings relevant to your interests</li>
              <li>Enable user-to-user communications</li>
              <li>Conduct research and analysis to improve our Platform and services</li>
              <li>Enforce our terms, conditions, and policies</li>
              <li>Protect against, identify, investigate, and respond to misuse, fraud, or illegal activity</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. How We Share Your Information</h2>
            <p>We may share your information in the following situations:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>With Customers and Service Providers:</strong> To facilitate connections 
                and transactions between users of our Platform. For example, when a Customer requests 
                a service, we share relevant information with potential Service Providers.
              </li>
              <li>
                <strong>With Service Providers and Partners:</strong> We may share information with 
                third-party vendors, consultants, and other service providers who need access to such 
                information to carry out work on our behalf, such as payment processing, data analysis, 
                email delivery, hosting services, and customer service.
              </li>
              <li>
                <strong>For Legal Purposes:</strong> We may disclose information in response to subpoenas, 
                court orders, legal process, or government requests, or to establish or exercise our legal 
                rights or defend against legal claims.
              </li>
              <li>
                <strong>Business Transfers:</strong> If Tradies is involved in a merger, acquisition, or 
                sale of all or a portion of its assets, your information may be transferred as part of that 
                transaction.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information for any other purpose 
                disclosed by us when you provide your consent.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
            <p>
              We and our third-party service providers may use cookies, web beacons, and other tracking 
              technologies to collect information about your browsing activities on our Platform. This 
              information may include details about your visits to our Platform, including the pages you 
              view, the links you click, and other actions you take.
            </p>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when cookies 
              are being sent. If you disable or refuse cookies, please note that some parts of our Platform 
              may then be inaccessible or not function properly.
            </p>
            <p>
              For more detailed information about our use of cookies, please see our <a href="/cookies" className="text-primary hover:text-primary-600">Cookie Policy</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational measures designed to secure 
              your personal information from accidental loss and from unauthorized access, use, alteration, 
              and disclosure. All information you provide to us is stored on secure servers behind firewalls.
            </p>
            <p>
              Any payment transactions will be encrypted using SSL technology. However, the transmission of 
              information via the internet is not completely secure. Although we do our best to protect your 
              personal information, we cannot guarantee the security of your information transmitted to our 
              Platform. Any transmission of personal information is at your own risk.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Your Rights and Choices</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
              <li><strong>Correction:</strong> You can request that we correct inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> You can request that we delete your personal information.</li>
              <li><strong>Portability:</strong> You can request a copy of your personal information in a structured, commonly used, and machine-readable format.</li>
              <li><strong>Objection:</strong> You can object to our processing of your personal information.</li>
              <li><strong>Restriction:</strong> You can request that we restrict the processing of your personal information.</li>
              <li><strong>Withdrawal of Consent:</strong> You can withdraw any consent you previously provided for us to process your personal information.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided in the 
              "Contact Us" section below. Please note that we may ask you to verify your identity before 
              responding to such requests.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
            <p>
              Your information may be transferred to, and maintained on, computers located outside of your 
              state, province, country, or other governmental jurisdiction where the data protection laws 
              may differ from those in your jurisdiction.
            </p>
            <p>
              If you are located outside Australia and choose to provide information to us, please note 
              that we transfer the information, including personal information, to Australia and process 
              it there. Your submission of such information represents your agreement to that transfer.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p>
              Our Platform is not intended for use by children under the age of 18, and we do not knowingly 
              collect personal information from children under 18. If you are a parent or guardian and you 
              believe your child has provided us with personal information, please contact us, and we will 
              delete such information from our servers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for 
              other operational, legal, or regulatory reasons. We will post the updated Privacy Policy on this 
              page with a "Last Updated" date. We encourage you to review this Privacy Policy periodically for 
              any changes.
            </p>
            <p>
              Your continued use of our Platform after any changes to this Privacy Policy constitutes your 
              acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please 
              contact us at:
            </p>
            <p className="font-medium mt-2">
              Email: privacy@tradies.com<br />
              Mailing Address: 123 Trade Street, Sydney, NSW 2000, Australia
            </p>
          </section>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center">
        <p className="text-gray-600 mb-6">
          By using our platform, you acknowledge that you have read and understand our Privacy Policy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/terms" className="text-primary hover:text-primary-600 font-medium">
            Terms of Service
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

export default PrivacyPage 