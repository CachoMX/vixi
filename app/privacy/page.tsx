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
            Privacy Policy
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: January 12, 2025
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                1. Introduction
              </h2>
              <p className="mb-4">
                
                  Vixi LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website vixi.agency and use our services.
                
              </p>
              <p>
                
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
                
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold mb-3">
                2.1 Personal Information
              </h3>
              <p className="mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Fill out contact forms</li>
                <li>Request information about our services</li>
                <li>Sign up for our newsletter</li>
                <li>Contact us via email or phone</li>
              </ul>
              <p className="mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Business information relevant to our services</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">
                2.2 Automatically Collected Information
              </h3>
              <p className="mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Browser type</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited</li>
                <li>Time and date of visits</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide, operate, and maintain our website and services</li>
                <li>Improve and personalize your experience</li>
                <li>Understand how you use our website</li>
                <li>Develop new products, services, and features</li>
                <li>Communicate with you about our services</li>
                <li>Send you marketing and promotional communications (with your permission)</li>
                <li>Find and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisers including lawyers, accountants, and insurers</li>
                <li>Law enforcement or government agencies when required by law</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                5. Your Rights
              </h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent where provided</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                6. Security
              </h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your information. However, no security system is impenetrable, and we cannot guarantee the security of your personal information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                8. Contact Us
              </h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-2">
                Vixi LLC<br />
                Dallas, TX<br />
                Email: 
                <a href="mailto:info@vixi.agency" className="text-secondary-blue hover:text-blue-800">
                  info@vixi.agency
                </a><br />                
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}