import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Services in Dallas | Vixi",
  description: "Explore Vixi's complete suite of services including website design, social media management, SEO, and digital advertising, tailored for business growth.",
};

// app/services/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Phone, ArrowRight,Mail, Globe, Users, Target, Palette, Code, Search, Share2, BarChart3, PenTool,LayoutGrid} from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              <span>Comprehensive Digital Marketing Solutions</span>
            </h1>
            <p className="text-xl mb-8">
              <span>From website development to social media management and digital advertising, we provide end-to-end solutions for your digital success.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
      <p className="text-gray-600 mb-12 text-lg max-w-3xl">
        We offer a full suite of digital marketing services tailored to help businesses grow online. Whether you're launching a new brand or scaling an existing one, our solutions are designed to maximize visibility, engagement, and revenue.
      </p>
      </div>
      </section>

      {/* Contact Section */}


      {/* Website Development Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span>Website Development</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                At Vixi, our web development services go beyond aesthetics. We build custom websites that are not only visually appealing but also strategically engineered for performance, SEO, and conversions. From responsive layouts to robust CMS integration, we tailor each site to support your business goals.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                <span>Custom-built websites that combine stunning design with powerful functionality to deliver exceptional user experiences and drive conversions.</span>
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, text: "Custom Development" },
                  { icon: Search, text: "SEO Optimization" },
                  { icon: Globe, text: "Responsive Design" },
                  { icon: LayoutGrid, text: "CMS Integration" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <item.icon className="h-5 w-5 text-secondary-blue" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                <span>What's Included:</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Custom website design and development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Mobile-first responsive development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Search engine optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Content management system</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Website hosting and maintenance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Security and performance optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Management Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                <span>Platform Management:</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Content creation and curation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Community management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Social media strategy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Engagement monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Analytics and reporting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Campaign management</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span>Social Media Management</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Social media is more than just posting content — it's about building a community and connecting authentically with your audience. Our social media experts create tailored strategies that align with your brand, foster engagement, and help grow your presence across all major platforms.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                <span>Strategic social media management that builds your brand, engages your audience, and drives meaningful results across all major platforms.</span>
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, text: "Community Building" },
                  { icon: Share2, text: "Content Creation" },
                  { icon: BarChart3, text: "Performance Tracking" },
                  { icon: Target, text: "Audience Growth" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <item.icon className="h-5 w-5 text-secondary-blue" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Advertising Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span>Digital Advertising</span>
            </h2>

            <p className="text-gray-600 mb-8 text-lg">
              Our digital advertising services are built to deliver measurable ROI. Whether through search, display, or social ads, we help you reach the right audience with the right message. Our team handles every aspect — from targeting and creatives to budget optimization and analytics — so you can focus on results.
            </p>

            <p className="text-lg text-gray-600">
              <span>Expert campaign management across all major advertising platforms to reach your target audience and achieve your marketing goals.</span>
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Search Advertising",
                description: "Targeted Google Ads and Bing Ads campaigns",
                features: ["Keyword research", "Ad copy optimization", "Landing page optimization"]
              },
              {
                title: "Social Advertising",
                description: "Campaigns across all major social platforms",
                features: ["Audience targeting", "Creative design", "Performance optimization"]
              },
              {
                title: "Display Advertising",
                description: "Visual ads across the web",
                features: ["Retargeting", "Banner design", "Placement optimization"]
              }
            ].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle><span>{service.title}</span></CardTitle>
                  <CardDescription><span>{service.description}</span></CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <span className="text-secondary-blue mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span>Graphic Design</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                <span>
                  Our graphic design service focuses on building a solid, memorable, and professional image for your brand. From logo creation to corporate presentations, we work with you to visually communicate what makes you unique in the market.
                </span>
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: PenTool, text: "Brand Identity" },
                  { icon: Palette, text: "Visual Design" },
                  { icon: LayoutGrid, text: "Marketing Materials" },
                  { icon: Share2, text: "Social Graphics" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <item.icon className="h-5 w-5 text-secondary-blue" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                <span>Design Services:</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Logo design and brand guidelines</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Social media graphics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Marketing collateral</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Digital ad creatives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Email templates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary-blue">•</span>
                  <span>Presentation design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span>Ready to Get Started?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            <span>Contact us today to discuss your digital marketing needs and how we can help achieve your goals.</span>
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