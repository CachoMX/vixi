// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Phone, Mail, Award, ArrowRight, Check, BarChart, Globe, Palette, Target, Users, Zap } from 'lucide-react'
import { AnimatedSection } from "@/components/animated-section"
import { Counter } from "@/components/counter"
import Link from 'next/link'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vixi Agency | Dallas Digital Marketing & Advertising Experts",
  description: "Transform your digital presence with Vixi's full-service marketing solutions. We specialize in web design, social media, and paid advertising that drive real results.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Padding for Fixed Header */}
      <section className="relative bg-gradient-to-r from-primary-blue to-secondary-blue text-white pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Transform Your Digital Presence with Expert Solutions
            </h1>
            <p className="text-xl mb-8 animate-fade-in stagger-1">
              Dallas's Premier Full-Service Digital Agency: Web Development, Social Media, Advertising & Design
            </p>
            <div className="flex gap-4 animate-fade-in stagger-2">
              <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm animate-fade-in stagger-3">
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Full-Service Agency
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                Platform-Certified
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Dallas-Based
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <AnimatedSection>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Your Partner in Digital Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-6">
                We help businesses grow through high-converting websites, ad campaigns, and automation tools. Our team specializes in Google Ads, Facebook marketing, SEO, and custom development solutions.
            </p>
          </div>
          
          {/* Image Section */}
          <div className="flex justify-center">
          <img 
            src="/images/digital-excellence.webp" 
            alt="Strategic Chess Piece" 
            width={660} 
            height={290} 
            className="max-w-full rounded-lg shadow-lg"
          />
        </div>

        </div>
      </section>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Digital Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Globe className="h-10 w-10 text-secondary-blue mb-4 transform transition-transform group-hover:scale-110" />
                <CardTitle>Website Development</CardTitle>
                <CardDescription>
                  Custom-built websites that convert visitors into customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Responsive Design
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    SEO Optimization
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Custom Development
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="h-10 w-10 text-secondary-blue mb-4 transform transition-transform group-hover:scale-110" />
                <CardTitle>Social Media</CardTitle>
                <CardDescription>
                  End-to-end social media management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Content Creation
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Community Management
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Performance Analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Target className="h-10 w-10 text-secondary-blue mb-4 transform transition-transform group-hover:scale-110"/>
                <CardTitle>Digital Advertising</CardTitle>
                <CardDescription>
                  Multi-platform campaign management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Platform Expertise
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Advanced Targeting
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Performance Tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Palette className="h-10 w-10 text-secondary-blue mb-4 transform transition-transform group-hover:scale-110" />
                <CardTitle>Graphic Design</CardTitle>
                <CardDescription>
                  Professional creative services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Brand Identity
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Marketing Materials
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Social Media Graphics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Vixi
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Zap className="h-10 w-10 text-secondary-blue mb-4 transform transition-transform group-hover:scale-110"/>
                <CardTitle>Expert Team</CardTitle>
                <CardDescription>
                  Our certified professionals bring years of experience across all digital platforms
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Target className="h-10 w-10 text-secondary-blue mb-4 transform transition-transform group-hover:scale-110" />
                <CardTitle>Data-Driven Approach</CardTitle>
                <CardDescription>
                  We make decisions based on real data and measurable results
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="h-10 w-10 text-secondary-blue mb-4 transform transition-transform group-hover:scale-110" />
                <CardTitle>Dedicated Support</CardTitle>
                <CardDescription>
                  Direct access to your team of experts whenever you need us
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Hyros Expertise Section */}
      <AnimatedSection>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div>
            <h2 className="text-3xl font-bold text-center mb-6">
              Certified Hyros Experts
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Maximize your advertising performance with precise tracking and optimization through Hyros integration
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Enhanced Tracking Integration</CardTitle>
                  <CardDescription>
                    Our experts specialize in seamless integration of Hyros with:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Facebook Ads for accurate attribution
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Google Ads performance tracking
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      TikTok Ads monitoring
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Multi-platform campaign analysis
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Performance Benefits</CardTitle>
                  <CardDescription>
                    Unlock the full potential of your advertising campaigns:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Real-time sales attribution tracking
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Accurate ROAS measurement
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Advanced customer journey insights
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Cross-platform optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border hover-scale transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">
                Why Choose Our Hyros Integration Services?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Target className="h-8 w-8 text-secondary-blue mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">
                    Precise Attribution
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Eliminate tracking discrepancies and identify your best-performing campaigns
                  </p>
                </div>
                <div className="text-center">
                  <BarChart className="h-8 w-8 text-secondary-blue mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">
                    Data-Driven Decisions
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Make informed decisions based on accurate performance metrics
                  </p>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-secondary-blue mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">
                    Optimization Expertise
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Leverage our experience to maximize your advertising ROI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Automation Solutions Section */}
      <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div>
            <h2 className="text-3xl font-bold text-center mb-6">
              Custom Automation Solutions
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Streamline your workflows and save time with powerful automated processes using Zapier and Make
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Zapier Integration</CardTitle>
                  <CardDescription>
                    Connect and automate workflows across 5,000+ apps
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Connect your favorite tools and apps
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Automate repetitive tasks
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Create multi-step automated workflows
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Real-time data synchronization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Make (Integromat)</CardTitle>
                  <CardDescription>
                    Build complex automation scenarios with advanced features
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Visual workflow builder
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Advanced data mapping
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Complex scenario handling
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      Error handling and notifications
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border hover-scale transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-center">
                Common Automation Use Cases
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-3">
                    Lead Management
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>Form submissions to CRM</li>
                    <li>Lead notification system</li>
                    <li>Follow-up automation</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-3">
                    Data Synchronization
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>Multi-platform sync</li>
                    <li>Database updates</li>
                    <li>Real-time backups</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-3">
                    Workflow Automation
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>Document generation</li>
                    <li>Task management</li>
                    <li>Team notifications</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Whether you need simple task automation or complex multi-step workflows, we can build the perfect solution for your business needs.
              </p>
              <Button className="bg-primary-blue hover:bg-primary-blue/90 transform transition-all duration-300 hover:scale-105 hover:shadow-lg " asChild>
              <Link href="/contact">
                Discuss Your Automation Needs
                <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>
      {/* Statistics Section */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <Counter end={500} suffix="+" />
                <p className="text-gray-600 mt-2">Projects Completed</p>
              </div>
              <div>
                <Counter end={98} suffix="%" />
                <p className="text-gray-600 mt-2">Client Satisfaction</p>
              </div>
              <div>
                <Counter end={150} suffix="M+" />
                <p className="text-gray-600 mt-2">Ad Impressions</p>
              </div>
              <div>
                <Counter end={200} suffix="%" />
                <p className="text-gray-600 mt-2">Average ROI</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-primary-blue text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help achieve your business goals. Our team of experts is ready to create a customized solution for your needs.
            </p>
            <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </AnimatedSection>

      {/* Platforms Section */}
      <AnimatedSection>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Platform Expertise
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We're certified experts across all major digital advertising platforms
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['Google Ads', 'Facebook Ads', 'TikTok', 'LinkedIn', 'Pinterest', 'X (Twitter)', 'Snapchat', 'Bing Ads'].map((platform) => (
              <div 
                key={platform} 
                className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-secondary-blue hover:-translate-y-1"
              >
                <p className="font-semibold text-gray-800">
                  {platform}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>
    </main>
  )
}