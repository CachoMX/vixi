import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Vixi Agency",
  description: "Understand the terms and conditions for using Vixi Agency's digital marketing services, including client responsibilities, service terms, and legal disclaimers.",
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-4 italic">Effective date: January 12, 2025</p>

        <article className="prose prose-lg max-w-none text-gray-700">
          <section>
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") form a binding agreement between you ("Client") and Vixi LLC
              ("Vixi", "we", "our", or "us"). By using our services or visiting our website (vixi.agency), you agree to abide by these Terms.
            </p>
            <p>
              If you do not accept these Terms in full, you may not access or use our services.
            </p>
          </section>

          <section>
            <h2>2. Our Services</h2>
            <p>
              Vixi Agency offers a variety of digital marketing services, including:
            </p>
            <ul>
              <li>Website design and development</li>
              <li>Search engine optimization (SEO)</li>
              <li>Paid media and advertising (Google, Facebook, etc.)</li>
              <li>Graphic design and branding</li>
              <li>Social media management</li>
            </ul>
            <h3>2.1 Delivery Terms</h3>
            <p>We commit to delivering services with:</p>
            <ul>
              <li>Professionalism, care, and skill</li>
              <li>Timely updates and clear communication</li>
              <li>Results aligned with the strategy and goals</li>
            </ul>
          </section>

          <section>
            <h2>3. Client Responsibilities</h2>
            <p>As our client, you agree to:</p>
            <ul>
              <li>Provide accurate information and timely feedback</li>
              <li>Respond to approval requests and content reviews</li>
              <li>Ensure prompt payment as per agreed terms</li>
              <li>Grant necessary access to digital platforms and data</li>
              <li>Comply with all legal and platform-related regulations</li>
            </ul>
          </section>

          <section>
            <h2>4. Payment Terms</h2>
            <p>
              All services are billed monthly unless otherwise agreed in writing. Payment is due at the beginning of each billing cycle.
            </p>
            <ul>
              <li>Late payments may result in suspension of services</li>
              <li>All fees are non-refundable unless explicitly stated</li>
              <li>Clients must maintain an active payment method on file</li>
            </ul>
          </section>

          <section>
            <h2>5. Ownership and Intellectual Property</h2>
            <p>
              Upon full payment, you will own the final deliverables. However, Vixi retains ownership of:
            </p>
            <ul>
              <li>Proprietary tools and systems used in project execution</li>
              <li>Third-party content or software not developed by Vixi</li>
              <li>The right to showcase work in our portfolio (unless otherwise agreed)</li>
            </ul>
          </section>

          <section>
            <h2>6. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary, financial, or sensitive information shared during the project engagement.
            </p>
          </section>

          <section>
            <h2>7. Limitation of Liability</h2>
            <p>
              Vixi LLC shall not be liable for indirect or consequential damages including loss of profits or data arising from the use or inability to use our services.
            </p>
          </section>

          <section>
            <h2>8. Termination</h2>
            <p>
              Either party may terminate this agreement with 30 days written notice. Upon termination:
            </p>
            <ul>
              <li>Outstanding invoices must be paid immediately</li>
              <li>Access to services and tools will be revoked</li>
              <li>Confidential materials must be returned or destroyed</li>
            </ul>
          </section>

          <section>
            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Clients will be notified of significant changes via email or our website.
            </p>
          </section>

          <section>
            <h2>10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Texas. All disputes will be handled in the courts located in Dallas County.
            </p>
          </section>

          <section>
            <h2>11. Contact</h2>
            <p>If you have any questions about these Terms, you can reach us at:</p>
            <address>
              Vixi LLC<br />
              Dallas, TX<br />
              Email: <a href="mailto:info@vixi.agency">info@vixi.agency</a><br />
              Phone: <a href="tel:+19459542923">(945) 954-2923</a>
            </address>
          </section>
        </article>
      </div>
    </main>
  )
}
