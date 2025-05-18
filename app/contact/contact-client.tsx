'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock, MessageSquare } from 'lucide-react'
import { CalendlyButton } from '@/components/calendly-button'

export default function ContactClient() {
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
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              <span>Get in Touch</span>
            </h1>
            <p className="text-xl mb-8">
              <span> Ready to transform your digital presence? Let's talk about your goals.</span>
            </p>
          </div>
        </div>
      </section>



        {/* Why Contact Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Why Choose Vixi Agency?</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  At Vixi, we're more than a marketing agency — we're your digital growth partners. Whether you need a new website,
                  want to launch an ad campaign, or elevate your brand on social media, we're here to help.
                </p>
                <p>
                  Our Dallas-based team of designers, developers, and strategists are ready to support your business growth 
                  with personalized solutions and measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              {status.submitted && (
                <div className="mb-8 p-4 bg-green-100 text-green-700 rounded-md">
                  Thank you for your message. We'll get back to you soon!
                </div>
              )}
              
              {status.error && (
                <div className="mb-8 p-4 bg-red-100 text-red-700 rounded-md">
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-sm">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Quick Response Guarantee</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 text-primary-blue mr-3" />
                  <span>Phone calls: Immediate during business hours</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 text-primary-blue mr-3" />
                  <span>Emails: Within 24 hours</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <MessageSquare className="h-5 w-5 text-primary-blue mr-3" />
                  <span>Contact form: Within 24 hours</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Schedule a Meeting</h3>
              <p className="text-gray-600 mb-6">
                Prefer to schedule a specific time? Book a 30-minute consultation with our team.
              </p>
              <CalendlyButton />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Based in Dallas, TX</h3>
            <p className="text-gray-600">
              We collaborate with clients nationwide, delivering top-tier digital marketing solutions. 
              Our team is always available to assist remotely.
            </p>
          </div>
        </div>
      </section>
    </main>
    )
  }