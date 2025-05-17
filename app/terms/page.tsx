// app/terms/page.tsx
export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            <span>Terms of Service</span>
          </h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">
              <span>Last updated: January 12, 2025</span>
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>1. Agreement to Terms</span>
              </h2>
              <p className="mb-4">
                <span>
                  These Terms of Service constitute a legally binding agreement made between you and Vixi LLC ("we," "us," or "our"), concerning your access to and use of our services and website (vixi.agency).
                </span>
              </p>
              <p>
                <span>
                  By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
                </span>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>2. Services</span>
              </h2>
              <p className="mb-4">
                <span>
                  Vixi LLC provides digital marketing services including but not limited to website development, social media management, digital advertising, and graphic design services.
                </span>
              </p>
              <h3 className="text-xl font-semibold mb-3">
                <span>2.1 Service Delivery</span>
              </h3>
              <p className="mb-4">
                <span>We agree to:</span>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><span>Provide services with reasonable care and skill</span></li>
                <li><span>Deliver services within agreed timeframes</span></li>
                <li><span>Communicate regularly about project progress</span></li>
                <li><span>Make reasonable efforts to achieve agreed-upon objectives</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>3. Client Responsibilities</span>
              </h2>
              <p className="mb-4">
                <span>You agree to:</span>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><span>Provide accurate and complete information</span></li>
                <li><span>Review and respond to requests in a timely manner</span></li>
                <li><span>Pay agreed fees according to the payment schedule</span></li>
                <li><span>Provide necessary access and permissions for service delivery</span></li>
                <li><span>Comply with all applicable laws and regulations</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>4. Payment Terms</span>
              </h2>
              <p className="mb-4">
                <span>
                  Our services are provided on a monthly subscription basis. Payment terms include:
                </span>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><span>Monthly fees are due at the beginning of each service period</span></li>
                <li><span>Payment methods must be kept current and valid</span></li>
                <li><span>Late payments may result in service suspension</span></li>
                <li><span>All fees are non-refundable unless otherwise specified</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>5. Intellectual Property</span>
              </h2>
              <p className="mb-4">
                <span>
                  Upon full payment, clients receive all rights to the final deliverables, except for:
                </span>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><span>Third-party materials used in the deliverables</span></li>
                <li><span>Our proprietary tools and processes</span></li>
                <li><span>Previous works and portfolio rights</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>6. Confidentiality</span>
              </h2>
              <p className="mb-4">
                <span>
                  Both parties agree to maintain the confidentiality of any proprietary information shared during the service relationship. This includes business strategies, customer data, and technical information.
                </span>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>7. Limitation of Liability</span>
              </h2>
              <p className="mb-4">
                <span>
                  To the maximum extent permitted by law, Vixi LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </span>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>8. Term and Termination</span>
              </h2>
              <p className="mb-4">
                <span>
                  Either party may terminate services with 30 days written notice. Upon termination:
                </span>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><span>All outstanding fees become immediately due</span></li>
                <li><span>Access to services will be discontinued</span></li>
                <li><span>All confidential information must be returned or destroyed</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>9. Changes to Terms</span>
              </h2>
              <p className="mb-4">
                <span>
                  We reserve the right to modify these terms at any time. We will notify clients of any material changes via email or through our website.
                </span>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>10. Governing Law</span>
              </h2>
              <p className="mb-4">
                <span>
                  These terms are governed by and construed in accordance with the laws of the State of Texas. Any disputes shall be subject to the exclusive jurisdiction of the courts in Dallas, Texas.
                </span>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                <span>11. Contact Information</span>
              </h2>
              <p className="mb-4">
                <span>For questions about these Terms of Service, please contact us at:</span>
              </p>
              <p className="mb-2">
                <span>Vixi LLC</span><br />
                <span>Dallas, TX</span><br />
                <span>Email: </span>
                <a href="mailto:info@vixi.agency" className="text-secondary-blue hover:text-blue-800">
                  <span>info@vixi.agency</span>
                </a><br />
                <span>Phone: </span>
                <a href="tel:+19459542923" className="text-secondary-blue hover:text-blue-800">
                  <span>(945) 954-2923</span>
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}