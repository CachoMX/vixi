import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Vixi Agency",
  description: "Review Vixi Agency's terms of service and conditions for using our digital marketing services.",
};

// app/terms/page.tsx
export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Terms of Service
          </h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: January 12, 2025
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
               1. Agreement to Terms
              </h2>
              <p className="mb-4">
                
                  These Terms of Service constitute a legally binding agreement made between you and Vixi LLC ("we," "us," or "our"), concerning your access to and use of our services and website (vixi.agency).
                
              </p>
              <p>
                
                  By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
                
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                2. Services
              </h2>
              <p className="mb-4">
                
                  Vixi LLC provides digital marketing services including but not limited to website development, social media management, digital advertising, and graphic design services.
                
              </p>
              <h3 className="text-xl font-semibold mb-3">
                2.1 Service Delivery
              </h3>
              <p className="mb-4">
                We agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide services with reasonable care and skill</li>
                <li>Deliver services within agreed timeframes</li>
                <li>Communicate regularly about project progress</li>
                <li>Make reasonable efforts to achieve agreed-upon objectives</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                3. Client Responsibilities
              </h2>
              <p className="mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Review and respond to requests in a timely manner</li>
                <li>Pay agreed fees according to the payment schedule</li>
                <li>Provide necessary access and permissions for service delivery</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                4. Payment Terms
              </h2>
              <p className="mb-4">
                
                  Our services are provided on a monthly subscription basis. Payment terms include:
                
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Monthly fees are due at the beginning of each service period</li>
                <li>Payment methods must be kept current and valid</li>
                <li>Late payments may result in service suspension</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                5. Intellectual Property
              </h2>
              <p className="mb-4">
                
                  Upon full payment, clients receive all rights to the final deliverables, except for:
                
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Third-party materials used in the deliverables</li>
                <li>Our proprietary tools and processes</li>
                <li>Previous works and portfolio rights</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                6. Confidentiality
              </h2>
              <p className="mb-4">
                
                  Both parties agree to maintain the confidentiality of any proprietary information shared during the service relationship. This includes business strategies, customer data, and technical information.
                
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                7. Limitation of Liability
              </h2>
              <p className="mb-4">
                
                  To the maximum extent permitted by law, Vixi LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                8. Term and Termination
              </h2>
              <p className="mb-4">
                
                  Either party may terminate services with 30 days written notice. Upon termination:
                
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All outstanding fees become immediately due</li>
                <li>Access to services will be discontinued</li>
                <li>All confidential information must be returned or destroyed</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                9. Changes to Terms
              </h2>
              <p className="mb-4">
                
                  We reserve the right to modify these terms at any time. We will notify clients of any material changes via email or through our website.
                
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                10. Governing Law
              </h2>
              <p className="mb-4">
                
                  These terms are governed by and construed in accordance with the laws of the State of Texas. Any disputes shall be subject to the exclusive jurisdiction of the courts in Dallas, Texas.
                
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                11. Contact Information
              </h2>
              <p className="mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="mb-2">
                Vixi LLC<br />
                Dallas, TX<br />
                Email: 
                <a href="mailto:info@vixi.agency" className="text-secondary-blue hover:text-blue-800">
                  info@vixi.agency
                </a><br />
                Phone: 
                <a href="tel:+19459542923" className="text-secondary-blue hover:text-blue-800">
                  (945) 954-2923
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}