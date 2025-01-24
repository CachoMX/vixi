// app/services/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  Mail, 
  Globe, 
  Users, 
  Target, 
  Palette, 
  Code, 
  Search, 
  Share2, 
  BarChart3, 
  PenTool,
  LayoutGrid
} from 'lucide-react'

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

      {/* Website Development Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span>Website Development</span>
              </h2>
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
                    <item.icon className="h-5 w-5 text-blue-600" />
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
                  <span className="text-blue-600">•</span>
                  <span>Custom website design and development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span>Mobile-first responsive development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span>Search engine optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span>Content management system</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span>Website hosting and maintenance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
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
                  <span className="text-blue-600">•</span>
                  <span>Content creation and curation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span>Community management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span>Social media strategy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span>Engagement monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span>Analytics and reporting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span>Campaign management</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span>Social Media Management</span>
              </h2>
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
                    <item.icon className="h-5 w-5 text-blue-600" />
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
                        <span className="text-blue-600 mr-2">•</span>
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
                <span>Professional design services that elevate your brand and create stunning visuals across all your marketing materials.</span>
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: PenTool, text: "Brand Identity" },
                  { icon: Palette, text: "Visual Design" },
                  { icon: LayoutGrid, text: "Marketing Materials" },
                  { icon: Share2, text: "Social Graphics" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <item.icon className="h-5 w-5 text-blue-600" />
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
                  <span className="text-blue-600">•</span>
                  <span>Logo design and brand guidelines</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span>Social media graphics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span>Marketing collateral</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span>Digital ad creatives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span>Email templates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span>Presentation design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span>Ready to Get Started?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            <span>Contact us today to discuss your digital marketing needs and how we can help achieve your goals.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              <span>(214) 499-5629</span>
            </Button>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" >
              <Mail className="mr-2 h-5 w-5" />
              <a href="mailto:info@vixi.agency">
                <span>info@vixi.agency</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}