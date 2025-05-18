// app/packages/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Phone, Mail, ArrowRight, Check, Shield, BarChart, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketing Packages for Small Business | Vixi",
  description: "Choose the perfect marketing plan for your business. Our packages offer flexibility, results, and transparent pricing. Start growing with Vixi today.",
};

const packages = [
  {
    name: "Essential Growth",
    description: "Perfect for small businesses and startups",
    features: [
      "Website Management & Basic SEO",
      "Social Media Management (Single Platform)",
      "Basic Digital Advertising",
      "Monthly Performance Reports",
    ],
  },
  {
    name: "Business Accelerator",
    description: "Perfect for growing businesses",
    features: [
      "Enhanced Website & SEO Optimization",
      "Multi-Platform Social Media Management",
      "Advanced Digital Advertising (2-3 Platforms)",
      "Design Services & Content Creation",
      "Detailed Analytics & Strategy Sessions",
    ],
  },
  {
    name: "Enterprise Elite",
    description: "Perfect for large businesses",
    features: [
      "Premium Website & Technical Services",
      "Full-Service Social Media Management",
      "Complete Multi-Platform Advertising",
      "Comprehensive Design Services",
      "Dedicated Account Team",
    ],
  },
]

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
                <Users className="h-10 w-10 text-secondary-blue mb-4" />
                <CardTitle><span>Dedicated Support</span></CardTitle>
                <CardDescription>
                  <span>Get a dedicated team of experts and priority support access</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="h-10 w-10 text-secondary-blue mb-4" />
                <CardTitle><span>Regular Updates</span></CardTitle>
                <CardDescription>
                  <span>Monthly strategy reviews and performance reports</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-secondary-blue mb-4" />
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
            {packages.map((pkg) => (
              <Card key={pkg.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature) => (
                      <li className="flex items-start" key={feature}>
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary-blue" asChild>
                    <Link href="/contact">
                      Get Started
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
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
            <Button size="lg" className="bg-primary-blue" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
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
      <section className="py-20 bg-primary-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span>Ready to Start Your Digital Journey?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            <span>Contact us to discuss the perfect package for your business needs.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild >
              <Link href="/contact">
                <span>Contact Us</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}