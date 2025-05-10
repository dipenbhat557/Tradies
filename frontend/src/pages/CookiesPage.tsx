import { useEffect } from 'react'

const CookiesPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Cookie Policy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn how and why we use cookies and similar technologies on our platform.
        </p>
        <p className="text-sm text-gray-500 mt-4">Last updated: June 1, 2023</p>
      </div>

      {/* Cookie policy content */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              This Cookie Policy explains how Tradies ("we", "us", or "our") uses cookies and similar 
              technologies to recognize you when you visit our website and mobile applications 
              (collectively, the "Platform"). It explains what these technologies are and why we use 
              them, as well as your rights to control our use of them.
            </p>
            <p>
              Please read this Cookie Policy carefully. By using our Platform, you consent to the use 
              of cookies and similar technologies as described in this policy. If you do not agree with 
              our policies and practices, please do not use our Platform.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you 
              visit a website. Cookies are widely used by website owners to make their websites work, 
              or to work more efficiently, as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, Tradies) are called "first-party cookies." 
              Cookies set by parties other than the website owner are called "third-party cookies." 
              Third-party cookies enable third-party features or functionality to be provided on or 
              through the website (such as advertising, interactive content, and analytics).
            </p>
            <p>
              Cookies can remain on your computer or mobile device for different periods of time. Some 
              cookies are "session cookies," meaning that they exist only while your browser is open and 
              are deleted automatically once you close your browser. Other cookies are "persistent cookies," 
              meaning that they survive after your browser is closed and can be used by websites to recognize 
              your computer when you open your browser and browse the Internet again.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Other Tracking Technologies</h2>
            <p>
              In addition to cookies, we may use other similar technologies to track your use of our Platform, 
              including:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Web Beacons:</strong> Small graphic images (also known as "pixel tags" or "clear GIFs") 
                that may be included on our Platform and in our emails to track user behavior and measure 
                site performance.
              </li>
              <li>
                <strong>Local Storage:</strong> HTML5 local storage and similar technologies that store 
                information on your device to enable features and improve user experience.
              </li>
              <li>
                <strong>Device Fingerprinting:</strong> Collection of technical information from your device 
                used to identify and distinguish devices.
              </li>
            </ul>
            <p>
              For simplicity, we refer to all these technologies collectively as "cookies" in this Cookie Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Types of Cookies We Use</h2>
            <p>
              We use different types of cookies on our Platform for various purposes. These include:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the Platform to function properly and cannot be switched off in 
              our systems. They are usually only set in response to actions made by you which amount to a 
              request for services, such as setting your privacy preferences, logging in, or filling in forms.
            </p>
            <p>
              You can set your browser to block or alert you about these cookies, but some parts of the 
              Platform may not function properly without them.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Performance Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the 
              performance of our Platform. They help us to know which pages are the most and least popular 
              and see how visitors move around the Platform.
            </p>
            <p>
              All information these cookies collect is aggregated and therefore anonymous. If you do not 
              allow these cookies, we will not know when you have visited our Platform.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Functionality Cookies</h3>
            <p>
              These cookies enable the Platform to provide enhanced functionality and personalization. They 
              may be set by us or by third-party providers whose services we have added to our pages.
            </p>
            <p>
              If you do not allow these cookies, some or all of these services may not function properly.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">4.4 Targeting Cookies</h3>
            <p>
              These cookies may be set through our Platform by our advertising partners. They may be used by 
              those companies to build a profile of your interests and show you relevant advertisements on 
              other sites.
            </p>
            <p>
              They do not directly store personal information, but are based on uniquely identifying your 
              browser and internet device. If you do not allow these cookies, you will experience less 
              targeted advertising.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Our Use of Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>To authenticate users and prevent fraudulent use of user accounts</li>
              <li>To remember information about your preferences and choices on our Platform</li>
              <li>To understand how you use our Platform and which features are most popular</li>
              <li>To personalize your experience and deliver content tailored to your interests</li>
              <li>To measure the effectiveness of our marketing campaigns</li>
              <li>To improve our Platform and provide better services to you</li>
              <li>To enable certain functions and features on our Platform</li>
              <li>To provide analytics about how our Platform is used</li>
              <li>To deliver relevant advertising to you based on your interests</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third parties on our Platform. These third parties may include:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Analytics providers (such as Google Analytics)</li>
              <li>Advertising networks</li>
              <li>Social media platforms</li>
              <li>Payment processors</li>
              <li>Customer support service providers</li>
            </ul>
            <p>
              Please note that these third parties may have their own privacy policies and cookie policies, 
              which we encourage you to review. We do not control the cookies or other tracking technologies 
              used by third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Managing Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie 
              preferences in the following ways:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">7.1 Cookie Preference Tool</h3>
            <p>
              You can manage your cookie preferences through our cookie preference tool, which is 
              accessible via the "Cookie Settings" link in the footer of our Platform.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">7.2 Browser Settings</h3>
            <p>
              You can set or amend your web browser controls to accept or refuse cookies. If you choose 
              to reject cookies, you may still use our Platform, but your access to some functionality 
              and areas may be restricted.
            </p>
            <p>
              The way you can refuse cookies through your web browser controls varies from browser to 
              browser. Please visit your browser's help menu for more information.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">7.3 Third-Party Opt-Out Tools</h3>
            <p>
              For third-party cookies used for advertising, you can also opt out of many online behavioral 
              advertising programs by visiting:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li><a href="http://www.aboutads.info/choices/" className="text-primary hover:text-primary-600">Digital Advertising Alliance</a></li>
              <li><a href="http://www.youronlinechoices.com/" className="text-primary hover:text-primary-600">European Interactive Digital Advertising Alliance</a></li>
              <li><a href="http://youradchoices.ca/choices/" className="text-primary hover:text-primary-600">Digital Advertising Alliance of Canada</a></li>
            </ul>
            <p>
              Please note that opting out of advertising cookies does not mean you will no longer see 
              advertising on our Platform – it just means the advertising you see may be less relevant 
              to your interests.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Do Not Track Signals</h2>
            <p>
              Some browsers have a "Do Not Track" feature that signals to websites that you visit that 
              you do not want your online activity tracked. Due to the lack of a common standard for 
              Do Not Track signals across browsers, our Platform does not currently respond to Do Not 
              Track signals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, 
              regulation, or our business practices. When we post changes to this Cookie Policy, we 
              will update the "Last Updated" date at the top of this policy. If we make significant 
              changes to the policy, we will provide a more prominent notice.
            </p>
            <p>
              We encourage you to periodically review this Cookie Policy to stay informed about our 
              use of cookies and related technologies.
            </p>
          </section>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center">
        <p className="text-gray-600 mb-6">
          If you have any questions about our Cookie Policy, please <a href="/contact" className="text-primary hover:text-primary-600 font-medium">contact us</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/privacy" className="text-primary hover:text-primary-600 font-medium">
            Privacy Policy
          </a>
          <span className="hidden sm:inline text-gray-400">|</span>
          <a href="/terms" className="text-primary hover:text-primary-600 font-medium">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  )
}

export default CookiesPage 