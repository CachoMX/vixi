// app/portfolio/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ArrowRight, Globe, Users, Target, Code, Palette, BarChart, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "Our Work & Success Stories",
  description: "Explore our portfolio of successful digital marketing campaigns, web development projects, and brand transformations."
}

export default function Portfolio() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              <span>Our Work</span>
            </h1>
            <p className="text-xl mb-8">
              <span>Explore our portfolio of successful digital transformations across industries.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-gray-700 space-y-6">
          <h2 className="text-2xl font-bold">Our Portfolio of Success</h2>
          <p>
            Every project we deliver is crafted with a growth-driven mindset. From complete website redesigns to
            social media campaigns that spark engagement, we’re proud to have helped businesses from all industries
            boost their online presence.
          </p>
          <p>
            Below, you’ll find a selection of our favorite success stories, highlighting results we’ve achieved 
            through strategic marketing, creative design, and data-backed advertising. We let our work speak for itself.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {['All Projects', 'Web Development', 'Social Media', 'Digital Advertising', 'Graphic Design'].map((filter) => (
              <Button
                key={filter}
                variant={filter === 'All Projects' ? 'default' : 'outline'}
                className={filter === 'All Projects' ? 'bg-primary-blue' : ''}
              >
                <span>{filter}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* E-commerce Project */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <span className="absolute bottom-4 left-4 bg-primary-blue text-white px-4 py-1 rounded-full text-sm">
                  Web Development
                </span>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle><span>E-commerce Platform</span></CardTitle>
                    <CardDescription><span>Retail & Fashion</span></CardDescription>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  <span>Custom e-commerce solution with advanced filtering, secure payments, and inventory management.</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Shopify</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Campaign */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <span className="absolute bottom-4 left-4 bg-primary-blue text-white px-4 py-1 rounded-full text-sm">
                  Social Media
                </span>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle><span>Brand Launch Campaign</span></CardTitle>
                    <CardDescription><span>Food & Beverage</span></CardDescription>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  <span>Comprehensive social media campaign resulting in 300% follower growth and 5x engagement.</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Instagram</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">TikTok</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Content Strategy</span>
                </div>
              </CardContent>
            </Card>

            {/* Digital Advertising */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <span className="absolute bottom-4 left-4 bg-primary-blue text-white px-4 py-1 rounded-full text-sm">
                  Digital Advertising
                </span>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle><span>Lead Generation Campaign</span></CardTitle>
                    <CardDescription><span>Real Estate</span></CardDescription>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  <span>Multi-platform advertising campaign generating qualified leads for luxury properties.</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Facebook Ads</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Google Ads</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Landing Pages</span>
                </div>
              </CardContent>
            </Card>

            {/* Brand Identity */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <span className="absolute bottom-4 left-4 bg-primary-blue text-white px-4 py-1 rounded-full text-sm">
                  Graphic Design
                </span>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle><span>Brand Identity Package</span></CardTitle>
                    <CardDescription><span>Technology Startup</span></CardDescription>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  <span>Complete brand identity design including logo, guidelines, and marketing collateral.</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Branding</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Logo Design</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Guidelines</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span>Results That Speak</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '150M+', label: 'Ad Impressions' },
              { number: '200%', label: 'Average ROI' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-blue mb-2">
                  <span>{stat.number}</span>
                </div>
                <div className="text-gray-600">
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span>Industries We Serve</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'E-commerce',
              'Real Estate',
              'Technology',
              'Healthcare',
              'Food & Beverage',
              'Professional Services',
              'Education',
              'Manufacturing'
            ].map((industry) => (
              <Card key={industry} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <span>{industry}</span>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span>Ready to Start Your Project?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            <span>Let's discuss how we can help achieve your digital marketing goals.</span>
          </p>
          <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild >
              <Link href="/contact">
                <span>Start Your Project</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
        </div>
      </section>
    </main>
  )
}