// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Phone, Mail, Award, ArrowRight, Check, BarChart, Globe, Palette, Target, Users, Zap } from 'lucide-react'
import { AnimatedSection } from "@/components/animated-section"
import { Counter } from "@/components/counter"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Padding for Fixed Header */}
      <section className="relative bg-gradient-to-r from-primary-blue to-secondary-blue text-white pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              <span>Transform Your Digital Presence with Expert Solutions</span>
            </h1>
            <p className="text-xl mb-8 animate-fade-in stagger-1">
              <span>Dallas's Premier Full-Service Digital Agency: Web Development, Social Media, Advertising & Design</span>
            </p>
            <div className="flex gap-4 animate-fade-in stagger-2">
              <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild >
              <Link href="/contact">
                <span>Contact Us</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm animate-fade-in stagger-3">
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>Full-Service Agency</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Platform-Certified</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>Dallas-Based</span>
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
              <span>Your Partner in Digital Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              <span>At Vixi, we combine creativity with data-driven strategies to deliver exceptional digital solutions that help businesses thrive in today's competitive landscape.</span>
            </p>
          </div>
          
          {/* Image Section */}
          <div className="flex justify-center">
            <img 
              src="/images/chess-figure-on-chessboard-strategy-management-2023-11-27-05-37-19-utc.jpg" 
              alt="Strategic Chess Piece" 
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
            <span>Comprehensive Digital Solutions</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Globe className="h-10 w-10 text-secondary-blue mb-4 transform transition-transform group-hover:scale-110" />
                <CardTitle><span>Website Development</span></CardTitle>
                <CardDescription>
                  <span>Custom-built websites that convert visitors into customers</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>SEO Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Custom Development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="h-10 w-10 text-secondary-blue mb-4 transform transition-transform group-hover:scale-110" />
                <CardTitle><span>Social Media</span></CardTitle>
                <CardDescription>
                  <span>End-to-end social media management</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Content Creation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Community Management</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Performance Analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Target className="h-10 w-10 text-secondary-blue mb-4 transform transition-transform group-hover:scale-110"/>
                <CardTitle><span>Digital Advertising</span></CardTitle>
                <CardDescription>
                  <span>Multi-platform campaign management</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Platform Expertise</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Advanced Targeting</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Performance Tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Palette className="h-10 w-10 text-secondary-blue mb-4 transform transition-transform group-hover:scale-110" />
                <CardTitle><span>Graphic Design</span></CardTitle>
                <CardDescription>
                  <span>Professional creative services</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Brand Identity</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Marketing Materials</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Social Media Graphics</span>
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
            <span>Why Choose Vixi</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Zap className="h-10 w-10 text-secondary-blue mb-4 transform transition-transform group-hover:scale-110"/>
                <CardTitle><span>Expert Team</span></CardTitle>
                <CardDescription>
                  <span>Our certified professionals bring years of experience across all digital platforms</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Target className="h-10 w-10 text-secondary-blue mb-4 transform transition-transform group-hover:scale-110" />
                <CardTitle><span>Data-Driven Approach</span></CardTitle>
                <CardDescription>
                  <span>We make decisions based on real data and measurable results</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="h-10 w-10 text-secondary-blue mb-4 transform transition-transform group-hover:scale-110" />
                <CardTitle><span>Dedicated Support</span></CardTitle>
                <CardDescription>
                  <span>Direct access to your team of experts whenever you need us</span>
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
              <span>Certified Hyros Experts</span>
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              <span>Maximize your advertising performance with precise tracking and optimization through Hyros integration</span>
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle><span>Enhanced Tracking Integration</span></CardTitle>
                  <CardDescription>
                    <span>Our experts specialize in seamless integration of Hyros with:</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Facebook Ads for accurate attribution</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Google Ads performance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>TikTok Ads monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Multi-platform campaign analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle><span>Performance Benefits</span></CardTitle>
                  <CardDescription>
                    <span>Unlock the full potential of your advertising campaigns:</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Real-time sales attribution tracking</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Accurate ROAS measurement</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Advanced customer journey insights</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Cross-platform optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border hover-scale transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">
                <span>Why Choose Our Hyros Integration Services?</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Target className="h-8 w-8 text-secondary-blue mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">
                    <span>Precise Attribution</span>
                  </h4>
                  <p className="text-gray-600 text-sm">
                    <span>Eliminate tracking discrepancies and identify your best-performing campaigns</span>
                  </p>
                </div>
                <div className="text-center">
                  <BarChart className="h-8 w-8 text-secondary-blue mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">
                    <span>Data-Driven Decisions</span>
                  </h4>
                  <p className="text-gray-600 text-sm">
                    <span>Make informed decisions based on accurate performance metrics</span>
                  </p>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-secondary-blue mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">
                    <span>Optimization Expertise</span>
                  </h4>
                  <p className="text-gray-600 text-sm">
                    <span>Leverage our experience to maximize your advertising ROI</span>
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
              <span>Custom Automation Solutions</span>
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              <span>Streamline your workflows and save time with powerful automated processes using Zapier and Make</span>
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle><span>Zapier Integration</span></CardTitle>
                  <CardDescription>
                    <span>Connect and automate workflows across 5,000+ apps</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Connect your favorite tools and apps</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Automate repetitive tasks</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Create multi-step automated workflows</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Real-time data synchronization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle><span>Make (Integromat)</span></CardTitle>
                  <CardDescription>
                    <span>Build complex automation scenarios with advanced features</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Visual workflow builder</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Advanced data mapping</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Complex scenario handling</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Error handling and notifications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border hover-scale transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-center">
                <span>Common Automation Use Cases</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-3">
                    <span>Lead Management</span>
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li><span>Form submissions to CRM</span></li>
                    <li><span>Lead notification system</span></li>
                    <li><span>Follow-up automation</span></li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-3">
                    <span>Data Synchronization</span>
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li><span>Multi-platform sync</span></li>
                    <li><span>Database updates</span></li>
                    <li><span>Real-time backups</span></li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-3">
                    <span>Workflow Automation</span>
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li><span>Document generation</span></li>
                    <li><span>Task management</span></li>
                    <li><span>Team notifications</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6">
                <span>Whether you need simple task automation or complex multi-step workflows, we can build the perfect solution for your business needs.</span>
              </p>
              <Button className="bg-primary-blue hover:bg-primary-blue/90 transform transition-all duration-300 hover:scale-105 hover:shadow-lg " asChild>
              <Link href="/contact">
                <span>Discuss Your Automation Needs</span>
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
              <span>Ready to Transform Your Digital Presence?</span>
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              <span>Contact us today to discuss how we can help achieve your business goals. Our team of experts is ready to create a customized solution for your needs.</span>
            </p>
            <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild >
              <Link href="/contact">
                <span>Contact Us</span>
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
            <span>Platform Expertise</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            <span>We're certified experts across all major digital advertising platforms</span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['Google Ads', 'Facebook Ads', 'TikTok', 'LinkedIn', 'Pinterest', 'X (Twitter)', 'Snapchat', 'Bing Ads'].map((platform) => (
              <div 
                key={platform} 
                className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-secondary-blue hover:-translate-y-1"
              >
                <p className="font-semibold text-gray-800">
                  <span>{platform}</span>
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