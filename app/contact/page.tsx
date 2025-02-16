// app/contact/page.tsx
"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Phone, Mail, Clock, MapPin, MessageSquare, Calendar } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        const data = await res.json()

        if (!res.ok) {
            throw new Error(data.details || 'Failed to send message')
        }

        setStatus({
            submitting: false,
            submitted: true,
            error: null
        })
        
        setFormData({
            fullName: '',
            companyName: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        })
    } catch (error: any) {  // or be more specific with the error type
        console.error('Form submission error:', error)
        setStatus({
            submitting: false,
            submitted: false,
            error: error.message || 'Failed to send message. Please try again.'
        })
    }
}

  return (
    <main className="min-h-screen pt-16">
      {/* Previous sections remain the same */}

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span>Get In Touch</span>
            </h2>
            
            {status.submitted && (
              <div className="mb-8 p-4 bg-green-100 text-green-700 rounded-md">
                <span>Thank you for your message. We'll get back to you soon!</span>
              </div>
            )}
            
            {status.error && (
              <div className="mb-8 p-4 bg-red-100 text-red-700 rounded-md">
                <span>{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    <span>Full Name*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    <span>Company Name</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    <span>Email*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    <span>Phone Number*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  <span>Services Interested In*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Digital Advertising">Digital Advertising</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Multiple Services">Multiple Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  <span>Message*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  rows={6}
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary-blue hover:bg-primary-blue/90"
                disabled={status.submitting}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Response & Scheduling Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                <span>Quick Response Guarantee</span>
              </h3>
              <p className="text-gray-600 mb-6">
                <span>We value your time and aim to respond to all inquiries within:</span>
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-secondary-blue mr-2" />
                  <span>Phone calls: Immediate during business hours</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-secondary-blue mr-2" />
                  <span>Emails: Within 24 hours</span>
                </li>
                <li className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-secondary-blue mr-2" />
                  <span>Contact form: Within 24 hours</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">
                <span>Schedule a Meeting</span>
              </h3>
              <p className="text-gray-600 mb-6">
                <span>Prefer to schedule a specific time? Book a 30-minute consultation with our team.</span>
              </p>
              <Button className="bg-primary-blue hover:bg-primary-blue/90">
                <Calendar className="mr-2 h-5 w-5" />
                <span>Schedule Consultation</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/map.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/50"></div>

        {/* Content Container */}
        <div className="relative container mx-auto px-6 text-center bg-white/80 py-10 rounded-lg shadow-lg">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">
              <span>Based in Dallas, TX</span>
            </h3>
            <p className="text-gray-600">
              <span>We collaborate with clients nationwide, delivering top-tier digital marketing solutions. Our team is always available to assist remotely.</span>
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}