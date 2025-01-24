// app/packages/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Phone, Mail, ArrowRight, Check, Shield, BarChart, Users, Zap } from 'lucide-react'

export default function Packages() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              <span>Tailored Digital Solutions for Your Success</span>
            </h1>
            <p className="text-xl mb-8">
              <span>Flexible Monthly Packages Designed to Grow Your Business</span>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span>Why Choose Monthly Packages?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle><span>Dedicated Support</span></CardTitle>
                <CardDescription>
                  <span>Get a dedicated team of experts and priority support access</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle><span>Regular Updates</span></CardTitle>
                <CardDescription>
                  <span>Monthly strategy reviews and performance reports</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle><span>Flexible Solutions</span></CardTitle>
                <CardDescription>
                  <span>Customizable packages that grow with your business</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Essential Growth Package */}
            <Card className="relative">
              <CardHeader>
                <CardTitle><span>Essential Growth</span></CardTitle>
                <CardDescription>
                  <span>Perfect for small businesses and startups</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Website Management & Basic SEO</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Social Media Management (Single Platform)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Basic Digital Advertising</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Monthly Performance Reports</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-900">
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Business Accelerator Package */}
            <Card className="relative border-blue-900 shadow-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <CardHeader>
                <CardTitle><span>Business Accelerator</span></CardTitle>
                <CardDescription>
                  <span>Perfect for growing businesses</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Enhanced Website & SEO Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Multi-Platform Social Media Management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Advanced Digital Advertising (2-3 Platforms)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Design Services & Content Creation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Detailed Analytics & Strategy Sessions</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-900">
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Elite Package */}
            <Card className="relative">
              <CardHeader>
                <CardTitle><span>Enterprise Elite</span></CardTitle>
                <CardDescription>
                  <span>Perfect for large businesses</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Premium Website & Technical Services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Full-Service Social Media Management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Complete Multi-Platform Advertising</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Comprehensive Design Services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Dedicated Account Team</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-900">
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span>Need a Custom Package?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              <span>Don't see exactly what you need? We'll create a custom package tailored to your specific requirements.</span>
            </p>
            <Button size="lg" className="bg-blue-900">
              <span>Contact Us</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span>Common Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg"><span>How long are the contracts?</span></CardTitle>
                <CardDescription>
                  <span>We offer flexible monthly agreements with no long-term commitment required.</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg"><span>Can packages be modified?</span></CardTitle>
                <CardDescription>
                  <span>Yes, all packages can be customized to meet your specific needs and goals.</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg"><span>How quickly can we start?</span></CardTitle>
                <CardDescription>
                  <span>We can typically begin within 1-2 weeks of agreement finalization.</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg"><span>What is the onboarding process?</span></CardTitle>
                <CardDescription>
                  <span>Our streamlined onboarding process includes strategy development, account setup, and team introduction.</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span>Ready to Start Your Digital Journey?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            <span>Contact us to discuss the perfect package for your business needs.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              <span>(214) 499-5629</span>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Mail className="mr-2 h-5 w-5" />
              <span>info@vixi.agency</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}