// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card" // Added CardFooter
import { 
  Phone, Mail, Award, ArrowRight, Check, BarChart2 as BarChart, Globe, Palette, Target, Users, Zap, 
  Lightbulb, Briefcase, MapPin, TrendingUp, MessageCircle, ShieldCheck, Brain, SlidersHorizontal // Added more icons
} from 'lucide-react'
import { AnimatedSection } from "@/components/animated-section" // Assuming this component handles animations
import { Counter } from "@/components/counter" // Assuming this component handles number animations
import Link from 'next/link'
import Image from 'next/image' // For optimized images
import type { Metadata } from "next"

// SEO Optimized Metadata
export const metadata: Metadata = {
  title: "Vixi Agency | Dallas Digital Marketing Experts | Drive Real Growth",
  description: "Vixi Agency: Your results-driven digital marketing partner in Dallas, TX. We deliver high-value Website Design, SEO, Social Media, Paid Ads (Google/Facebook), Hyros & Automation. Get your free proposal!",
  keywords: "digital marketing dallas, seo dallas, website design dallas, social media marketing dallas, paid advertising dallas, google ads dallas, facebook ads dallas, hyros agency, marketing automation dallas, Vixi Agency",
};

// Define services for easy mapping
const services = [
  {
    icon: Globe,
    title: "Website Design & Maintenance",
    description: "Stunning, high-converting WordPress sites built for performance and maintained for peace of mind.",
    link: "/services/website-design",
    features: ["Responsive Design", "SEO-Optimized", "Monthly Maintenance", "Blog Integration"],
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Engage your audience and build a loyal community with strategic, creative social media campaigns.",
    link: "/services/social-media-management",
    features: ["Content Strategy", "Custom Graphics", "Platform Growth", "Performance Analytics"],
  },
  {
    icon: Target,
    title: "Facebook & Google Ads",
    description: "Maximize your ROI with targeted, data-driven paid advertising campaigns managed by certified experts.",
    link: "/services/ads-management", // Ensure this matches your actual URL
    features: ["Google Ads Certified", "Facebook Blueprint", "Advanced Targeting", "ROAS Focused"],
  },
  {
    icon: Palette,
    title: "Graphic Design Services",
    description: "Elevate your brand with consistent, professional visuals for all your digital marketing needs.",
    link: "/services/monthly-graphic-design", // Ensure this matches your actual URL
    features: ["Brand Identity", "Social Media Graphics", "Marketing Materials", "Source Files"],
  },
  {
    icon: Zap,
    title: "Hyros & Automation",
    description: "Unlock precise ad tracking with Hyros and streamline operations with powerful marketing automation.",
    link: "/services/hyros-marketing-automation", // Ensure this matches your actual URL
    features: ["Expert Hyros Setup", "Custom Automations", "Workflow Optimization", "Data Integration"],
  },
];

// Define 'Why Choose Us' points
const whyChooseUsPoints = [
    { icon: Briefcase, title: "High-Value, Fair Pricing", description: "Premium, results-oriented digital marketing without excessive agency fees, making top-tier expertise accessible for your Dallas business." },
    { icon: Users, title: "Your Dedicated Growth Partner", description: "We integrate seamlessly, often via tools like Slack, acting as dedicated team members committed to your long-term success." },
    { icon: MapPin, title: "Dallas Born, Globally Minded", description: "Proudly based in Dallas, TX, our expertise and strategies are informed by global best practices, serving clients effectively, wherever they are." },
    { icon: Lightbulb, title: "Comprehensive In-House Expertise", description: "Our diverse Dallas team brings together specialists in web design, SEO, paid advertising, social media, content creation, and advanced analytics." },
    { icon: BarChart, title: "Data-Driven & Adaptable Strategies", description: "We meticulously track performance, providing clear reports. Our agile mindset allows us to adapt strategies for optimal outcomes." },
    { icon: ShieldCheck, title: "Transparent & Reliable", description: "Honest communication, clear reporting, and a dependable partnership you can count on for all your digital marketing needs." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-blue via-blue-700 to-secondary-blue text-white pt-36 pb-24 md:pt-48 md:pb-32 text-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="opacity-0 animate-fade-in stagger-1">
            <Award className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Elevate Your Dallas Business with <span className="block sm:inline">Results-Driven Digital Marketing</span>
            </h1>
          </div>
          <div className="opacity-0 animate-fade-in stagger-2">
            <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto opacity-90">
              Vixi Agency is your trusted Dallas-based partner for high-value digital marketing solutions. We craft custom strategies in <strong className="font-semibold">Website Design, SEO, Social Media, Paid Ads (Google & Facebook), Hyros Tracking, and Marketing Automation</strong> to deliver measurable growth.
            </p>
          </div>
          <div className="opacity-0 animate-fade-in stagger-3">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg px-10 py-3 text-lg font-semibold" asChild >
                
                <Link href="/contact?interest=free-proposal">
                  Get Your Free Proposal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white border-2 text-white hover:bg-white hover:text-primary-blue transform transition-all duration-300 hover:scale-105 px-10 py-3 text-lg font-semibold" asChild>
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
          <div className="opacity-0 animate-fade-in stagger-4">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-12 text-sm opacity-80">
              <div className="flex items-center"><Check className="h-5 w-5 mr-2 text-green-400" /> Dallas-Based Experts</div>
              <div className="flex items-center"><Check className="h-5 w-5 mr-2 text-green-400" /> Results-Focused Strategies</div>
              <div className="flex items-center"><Check className="h-5 w-5 mr-2 text-green-400" /> High-Value Service</div>
              <div className="flex items-center"><Check className="h-5 w-5 mr-2 text-green-400" /> Globally Serving Clients</div>
            </div>
          </div>
        </div>
        {/* Optional: Add a subtle background pattern or overlay if desired */}
      </section>

      {/* Who We Are & What We Do Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <span className="text-sm font-semibold text-primary-blue uppercase tracking-wider">About Vixi Agency</span>
                <h2 className="text-3xl sm:text-4xl font-bold my-4 text-gray-800">
                  Your Partner in Digital Excellence & Growth in Dallas
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At Vixi Agency, we're more than just a digital marketing company; we are your strategic growth partners. Based in the heart of Dallas, TX, we specialize in transforming your online presence into a powerful asset that drives tangible results. We understand the unique challenges and opportunities Dallas businesses face and tailor our comprehensive suite of services – from cutting-edge website design and robust SEO to engaging social media and high-ROI paid advertising – to meet your specific goals.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our philosophy is simple: combine <strong className="font-semibold">data-driven strategies with creative innovation and transparent communication</strong> to deliver high-value digital marketing solutions that don't break the bank. We're passionate about helping businesses like yours thrive in the digital age.
                </p>
                <Button variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white" asChild>
                  <Link href="/about">
                    Learn More About Our Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <Image 
                  src="/images/vixi-agency-dallas-team-collaborating.webp" 
                  alt="Vixi Agency - Dallas Digital Marketing Experts Collaborating" 
                  width={600} 
                  height={500} 
                  className="rounded-xl shadow-2xl mx-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Core Services Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary-blue uppercase tracking-wider">What We Do</span>
              <h2 className="text-3xl sm:text-4xl font-bold my-4 text-gray-800">Comprehensive Digital Marketing Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer a full suite of digital marketing services designed to elevate your brand, engage your audience, and drive conversions for your Dallas business.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                  <CardHeader className="items-center text-center">
                    <div className="p-4 bg-blue-100 rounded-full mb-4 inline-block group-hover:bg-primary-blue transition-colors duration-300">
                      <service.icon className="h-10 w-10 text-primary-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-700 group-hover:text-primary-blue transition-colors duration-300">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-center">
                    <CardDescription className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</CardDescription>
                    <ul className="space-y-1 text-xs text-gray-500">
                        {service.features.map(feature => (
                            <li key={feature} className="flex items-center justify-center">
                                <Check className="h-3 w-3 text-green-500 mr-1.5 flex-shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto p-6">
                    <Button variant="link" className="w-full text-primary-blue hover:text-secondary-blue font-semibold" asChild>
                      <Link href={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-16">
                <Button size="lg" className="bg-primary-blue hover:bg-secondary-blue text-white px-10 py-3 text-lg font-semibold" asChild>
                    <Link href="/packages">
                        View All Our Packages
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Partner With Vixi Agency Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary-blue uppercase tracking-wider">The Vixi Advantage</span>
              <h2 className="text-3xl sm:text-4xl font-bold my-4 text-gray-800">Why Dallas Businesses Choose Vixi Agency</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're committed to being more than just a vendor. We're your strategic partner in achieving digital marketing success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUsPoints.map((point) => (
                <div key={point.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-5">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <point.icon className="h-8 w-8 text-primary-blue" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3 text-center">{point.title}</h3>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Hyros & Automation Highlight Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-primary-blue text-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SlidersHorizontal className="h-12 w-12 text-yellow-400 mb-4" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Unlock Precision Tracking & Efficiency</h2>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  Gain unparalleled clarity on your ad spend with our expert <strong className="font-semibold">Hyros setup and management</strong>. Understand your true ROI and customer journey. Plus, supercharge your operations with <strong className="font-semibold">custom marketing automation solutions</strong> (Zapier, Make) designed to save you time and scale your Dallas business effectively.
                </p>
                <Button variant="outline" className="bg-transparent border-white border-2 text-white hover:bg-white hover:text-primary-blue font-semibold" asChild>
                  <Link href="/services/hyros-marketing-automation">
                    Explore Hyros & Automation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div>
                {/* Placeholder for an image representing Hyros dashboard or automation workflow */}
                <Image 
                  src="/images/hyros-dashboard-automation-workflow.webp" 
                  alt="Hyros Tracking Dashboard and Marketing Automation Workflow" 
                  width={600} 
                  height={400} 
                  className="rounded-xl shadow-2xl mx-auto object-cover"
                />                
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Statistics Section - Social Proof */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Our Track Record of Success</h2>
                <p className="text-lg text-gray-600 mt-3 max-w-xl mx-auto">Numbers that speak for our commitment to Dallas clients.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Counter end={500} suffix="+" className="text-4xl md:text-5xl font-bold text-primary-blue" />
                <p className="text-gray-600 mt-2 font-medium">Successful Projects Delivered</p>
              </div>
              <div>
                <Counter end={98} suffix="%" className="text-4xl md:text-5xl font-bold text-primary-blue" />
                <p className="text-gray-600 mt-2 font-medium">Client Satisfaction Rate</p>
              </div>
              <div>
                <Counter end={150} suffix="M+" className="text-4xl md:text-5xl font-bold text-primary-blue" />
                <p className="text-gray-600 mt-2 font-medium">Ad Impressions Managed</p>
              </div>
              <div>
                <Counter end={200} suffix="%+" className="text-4xl md:text-5xl font-bold text-primary-blue" /> 
                <p className="text-gray-600 mt-2 font-medium">Average Client ROI Increase</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Placeholder Section 
      <AnimatedSection animationType="fadeIn" threshold={0.3}>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <MessageCircle className="h-12 w-12 text-primary-blue mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">What Our Dallas Clients Say</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                We're proud of the partnerships we build and the results we achieve together.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {[1, 2, 3].map(i => (
                <Card key={i} className="shadow-lg bg-gray-50">
                  <CardContent className="pt-6">
                    <p className="text-gray-600 italic mb-4">"Vixi Agency transformed our online presence! Their expertise in [Specific Service, e.g., Google Ads] significantly boosted our leads. Highly recommend their Dallas team."</p>
                    <p className="font-semibold text-gray-700">- [Client Name], <span className="font-normal text-sm text-gray-500">[Client Company/Title], Dallas TX</span></p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Optional: Link to a dedicated testimonials page */}
            {/* <div className="text-center mt-12">
              <Button variant="link" className="text-primary-blue hover:text-secondary-blue font-semibold" asChild>
                <Link href="/testimonials">
                  Read More Client Success Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div> 
          </div>
        </section>
      </AnimatedSection>
*/}
      {/* Final Call to Action Section */}
      <AnimatedSection>
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-800 via-primary-blue to-secondary-blue text-white">
          <div className="container mx-auto px-6 text-center">
            <Brain className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Ignite Your Digital Growth in Dallas?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              Don't let your competitors get ahead. Partner with Vixi Agency, your dedicated Dallas digital marketing experts. Let's discuss your unique business goals and craft a custom strategy to achieve them. High-value results are within reach.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary-blue hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-xl px-12 py-4 font-bold" 
              asChild 
            >
              <Link href="/contact?interest=homepage-cta">
                Get Your Free Growth Strategy Session
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}