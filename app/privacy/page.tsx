import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Vixi Agency",
  description: "Read Vixi Agency's privacy policy to understand how we collect, use, and protect your personal information.",
};

// app/privacy/page.tsx
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            <span>Privacy Policy</span>
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">
              <span>Last updated: January 12, 2025</span>
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>1. Introduction</span>
              </h2>
              <p className="mb-4">
                <span>
                  Vixi LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website vixi.agency and use our services.
                </span>
              </p>
              <p>
                <span>
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
                </span>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>2. Information We Collect</span>
              </h2>
              <h3 className="text-xl font-semibold mb-3">
                <span>2.1 Personal Information</span>
              </h3>
              <p className="mb-4">
                <span>We may collect personal information that you voluntarily provide to us when you:</span>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><span>Fill out contact forms</span></li>
                <li><span>Request information about our services</span></li>
                <li><span>Sign up for our newsletter</span></li>
                <li><span>Contact us via email or phone</span></li>
              </ul>
              <p className="mb-4">
                <span>This information may include:</span>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><span>Name</span></li>
                <li><span>Email address</span></li>
                <li><span>Phone number</span></li>
                <li><span>Company name</span></li>
                <li><span>Business information relevant to our services</span></li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">
                <span>2.2 Automatically Collected Information</span>
              </h3>
              <p className="mb-4">
                <span>When you visit our website, we automatically collect certain information about your device, including:</span>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><span>Browser type</span></li>
                <li><span>Operating system</span></li>
                <li><span>IP address</span></li>
                <li><span>Pages visited</span></li>
                <li><span>Time and date of visits</span></li>
                <li><span>Referring website addresses</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>3. How We Use Your Information</span>
              </h2>
              <p className="mb-4">
                <span>We use the information we collect to:</span>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><span>Provide, operate, and maintain our website and services</span></li>
                <li><span>Improve and personalize your experience</span></li>
                <li><span>Understand how you use our website</span></li>
                <li><span>Develop new products, services, and features</span></li>
                <li><span>Communicate with you about our services</span></li>
                <li><span>Send you marketing and promotional communications (with your permission)</span></li>
                <li><span>Find and prevent fraud</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>4. Information Sharing and Disclosure</span>
              </h2>
              <p className="mb-4">
                <span>We may share your information with:</span>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><span>Service providers who assist in our operations</span></li>
                <li><span>Professional advisers including lawyers, accountants, and insurers</span></li>
                <li><span>Law enforcement or government agencies when required by law</span></li>
              </ul>
              <p>
                <span>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</span>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>5. Your Rights</span>
              </h2>
              <p className="mb-4">
                <span>You have the right to:</span>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><span>Access your personal information</span></li>
                <li><span>Correct inaccurate personal information</span></li>
                <li><span>Request deletion of your personal information</span></li>
                <li><span>Object to processing of your personal information</span></li>
                <li><span>Withdraw consent where provided</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>6. Security</span>
              </h2>
              <p>
                <span>We implement appropriate technical and organizational security measures to protect your information. However, no security system is impenetrable, and we cannot guarantee the security of your personal information.</span>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>7. Changes to This Policy</span>
              </h2>
              <p>
                <span>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</span>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>8. Contact Us</span>
              </h2>
              <p className="mb-4">
                <span>If you have questions about this Privacy Policy, please contact us at:</span>
              </p>
              <p className="mb-2">
                <span>Vixi LLC</span><br />
                <span>Dallas, TX</span><br />
                <span>Email: </span>
                <a href="mailto:info@vixi.agency" className="text-secondary-blue hover:text-blue-800">
                  <span>info@vixi.agency</span>
                </a><br />                
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}