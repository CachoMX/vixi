// app/contact/page.tsx
'use client' // Required for useState, useEffect, useSearchParams

import { useState, useEffect, Suspense } from 'react' // Added Suspense
import { useSearchParams } from 'next/navigation' // For reading URL params in App Router
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock, MessageSquare, MapPin, User, Building, AtSign, Smartphone, ListChecks, Send } from 'lucide-react' // Added more icons
import { CalendlyButton } from '@/components/calendly-button' // Assuming this component exists
import Link from 'next/link'

// Define service options for the dropdown and mapping URL params
const serviceOptions = [
  { value: "website-design-maintenance", label: "Website Design & Maintenance" },
  { value: "social-media-management", label: "Social Media Management" },
  { value: "ads-management", label: "Facebook & Google Ads Management" },
  { value: "graphic-design", label: "Graphic Design Services" },
  { value: "hyros-automation", label: "Hyros Setup & Marketing Automation" },
  { value: "multiple-services", label: "Multiple Services / Unsure" },
  { value: "general-inquiry", label: "General Inquiry" },
];

// Helper function to get label from value
const getServiceLabel = (value: string) => {
  const option = serviceOptions.find(opt => opt.value === value);
  return option ? option.label : "";
};

// Suspense Boundary for useSearchParams
function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: initialService, // Pre-fill from URL
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null as string | null
  });

  // Update form if service query param changes after initial load (e.g., client-side navigation)
  useEffect(() => {
    const serviceQueryParam = searchParams.get('service');
    if (serviceQueryParam && serviceQueryParam !== formData.service) {
      setFormData(prev => ({ ...prev, service: serviceQueryParam }));
    }
  }, [searchParams, formData.service]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const res = await fetch('/api/contact', { // Ensure this API route exists and is functional
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || data.details || 'Failed to send message. Please try again.');
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      setFormData({ // Reset form
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        service: '', // Reset service field too
        message: ''
      });

      // Optional: Scroll to top or show a more prominent success message
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error: any) {
      console.error('Form submission error:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message || "An unexpected error occurred. Please try again."
      });
    }
  };

  return (
    <>
      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <Card className="shadow-xl">
                <CardHeader className="bg-gray-100 p-6">
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-primary-blue">Send Us a Message</CardTitle>
                  <CardDescription className="text-gray-600">
                    We're excited to learn about your project! Fill out the form, and our Dallas team will get back to you promptly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 sm:p-8">
                  {status.submitted && (
                    <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md shadow-sm text-center">
                      Thank you for your message! Our Dallas team will be in touch within 24 business hours.
                    </div>
                  )}
                  
                  {status.error && (
                    <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md shadow-sm text-center" role="alert">
                      <strong>Error:</strong> {status.error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} required className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue" placeholder="John Doe" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Building className="h-5 w-5 text-gray-400" />
                          </div>
                          <input id="companyName" name="companyName" type="text" value={formData.companyName} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue" placeholder="Your Company LLC" />
                        </div>
                      </div>
                    </div>
            
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <AtSign className="h-5 w-5 text-gray-400" />
                          </div>
                          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue" placeholder="you@example.com" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Smartphone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue" placeholder="(123) 456-7890" />
                        </div>
                      </div>
                    </div>
            
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Services Interested In*</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <ListChecks className="h-5 w-5 text-gray-400" />
                        </div>
                        <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue bg-white appearance-none">
                          <option value="">Please select a service...</option>
                          {serviceOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
            
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message*</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue" placeholder="Tell us a bit about your project, goals, and how we can help your Dallas business succeed..."></textarea>
                    </div>
            
                    <Button 
                      type="submit" 
                      className="w-full bg-primary-blue hover:bg-secondary-blue text-white text-lg py-3 px-6"
                      disabled={status.submitting}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {status.submitting ? 'Sending Your Message...' : 'Send Message to Vixi Agency'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Alternatives Column */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary-blue">Other Ways to Reach Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>Our Dallas team is ready to assist you. Feel free to connect via:</p>
                  <a href="tel:+19459542923" className="flex items-center space-x-3 hover:text-primary-blue group">
                    <Phone className="h-6 w-6 text-primary-blue group-hover:animate-pulse" />
                    <span>(945) 954-2923</span>
                  </a>
                  <a href="mailto:info@vixiagency.com" className="flex items-center space-x-3 hover:text-primary-blue group">
                    <Mail className="h-6 w-6 text-primary-blue group-hover:animate-pulse" />
                    <span>info@vixiagency.com (General Inquiries)</span>
                  </a>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-primary-blue" />
                    <span>Business Hours: Mon - Fri, 9 AM - 5 PM (CST)</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary-blue">Schedule a Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Prefer to talk live? Book a complimentary 30-minute strategy session with one of our Dallas digital marketing specialists at your convenience.
                  </p>
                  <CalendlyButton /> {/* Ensure your CalendlyButton component is correctly implemented */}
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-primary-blue border-l-4 shadow-md">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary-blue">Our Commitment to You</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700 space-y-2">
                    <p><strong className="font-semibold">Prompt Response:</strong> We typically respond to all inquiries within 24 business hours.</p>
                    <p><strong className="font-semibold">Personalized Attention:</strong> Your Dallas business isn't just another number. We provide tailored advice.</p>
                    <p><strong className="font-semibold">No Obligation:</strong> Initial consultations are always free and without pressure.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Vixi - Reinforcement Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Partner with Dallas's Growth-Driven Digital Experts</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Vixi Agency, we're more than just a digital marketing agency in Dallas; we're dedicated partners in your success. Whether you need a cutting-edge website, a dominant social media presence, high-ROI ad campaigns, or compelling graphic design, our team is equipped with the expertise and passion to make it happen.
            </p>
            <p className="text-lg text-gray-600">
              We understand the Dallas market and combine local insight with global best practices to deliver digital marketing solutions that are not only innovative but also generate tangible results for businesses of all sizes. Let's build something great together.
            </p>
          </div>
        </div>
      </section>

      {/* Location & Map Section (Optional - if you have a physical office for meetings) */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <MapPin className="h-12 w-12 text-primary-blue mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Proudly Based in Dallas, TX</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            While we serve clients globally, our roots are firmly planted in Dallas. We're passionate about contributing to the success of our local business community.
          </p>
          {/* Optional: Embed a Google Map here if you have a physical office and want to show it */}
          {/* <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
            <iframe 
              src="YOUR_GOOGLE_MAPS_EMBED_URL" 
              width="100%" 
              height="100%" 
              style={{ border:0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div> */}
        </div>
      </section>
    </>
  );
}


// Main component export that includes Suspense
export default function ContactPage() {
  // SEO Optimized Metadata (Moved to be static export at the top of the file for Next.js App Router)
  // export const metadata = { ... } 

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-secondary-blue text-white py-20 md:py-28">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let's Connect & Grow Your Dallas Business
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Ready to transform your digital presence and achieve your marketing goals? The Vixi Agency team in Dallas is here to listen and strategize with you.
            </p>
          </div>
      </section>
      
      {/* Intro Text */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-gray-700 space-y-4">
            <p className="text-lg">
              At Vixi Agency, we’re passionate about helping Dallas businesses like yours thrive in the digital world. Whether you're exploring website development, aiming to boost your social media engagement, considering targeted ad campaigns, or need stunning graphic design, our expert team is ready to provide personalized solutions.
            </p>
            <p className="text-lg">
              Fill out the form below, give us a call, or schedule a free consultation. Let’s start building your brand’s success story today. We're committed to responding promptly and treating every project with the dedication it deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Suspense boundary for the form which uses useSearchParams */}
      <Suspense fallback={<div className="container mx-auto px-6 py-16 text-center">Loading contact form...</div>}>
        <ContactFormContent />
      </Suspense>
    </main>
  )
}
