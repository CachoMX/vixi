// app/contact/thank-you/page.tsx
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
            </div>

            {/* Thank You Message */}
            <h1 className="text-4xl font-bold mb-6">
              <span>Thank You for Contacting Us!</span>
            </h1>
            
            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <p className="text-xl text-gray-700 mb-4">
                <span>We've received your message and will get back to you within 24 hours.</span>
              </p>

              <div className="space-y-4 text-left">
                <h2 className="text-lg font-semibold">
                  <span>What happens next?</span>
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary-blue mt-1">1.</span>
                    <span>Our team will review your inquiry</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary-blue mt-1">2.</span>
                    <span>We'll prepare a customized response based on your needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-secondary-blue mt-1">3.</span>
                    <span>You'll receive a detailed email or phone call from our team</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Immediate Contact Options */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4">
                <span>Need Immediate Assistance?</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary-blue">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>(214) 499-5629</span>
                </Button>
                <Button variant="outline">
                  <Mail className="mr-2 h-5 w-5" />
                  <span>sales@vixi.agency</span>
                </Button>
              </div>
            </div>

            {/* Navigation Options */}
            <div className="space-y-4">
              <Link href="/">
                <Button variant="ghost" className="text-primary-blue">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  <span>Return to Homepage</span>
                </Button>
              </Link>
            </div>

            {/* Business Hours Reminder */}
            <div className="mt-12 text-sm text-gray-600">
              <p>
                <span>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM CST</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}