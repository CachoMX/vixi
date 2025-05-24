// app/about/page.tsx
import { Button } from "@/components/ui/button" // Assuming this is your Button component path
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card" // Assuming CardContent might be used
import { Phone, Mail, Users, ArrowRight, Target, Award, Coffee, Clock, Heart, Lightbulb, BarChart2, Briefcase, MapPin } from 'lucide-react' // Added more icons
import Link from 'next/link'
import Image from 'next/image' // For placeholder images

export const metadata = {
  title: "About Vixi Agency | Leading Digital Marketing Agency in Dallas, TX",
  description: "Discover Vixi Agency, Dallas's trusted digital marketing partner. Learn our story, values, and our commitment to delivering high-value, results-driven solutions for businesses of all sizes.",
}

export default function AboutPage() {
  const coreValues = [
    { icon: Award, title: "Excellence", description: "We strive for the highest quality in every detail, delivering outstanding work that exceeds expectations." },
    { icon: Lightbulb, title: "Innovation", description: "Constantly exploring new technologies and creative strategies to keep your Dallas business ahead of the curve." },
    { icon: Heart, title: "Client-Centric", description: "Your success is our success. We treat your goals as our own, fostering dedicated partnerships." },
    { icon: BarChart2, title: "Results-Driven", description: "Our strategies are focused on delivering real, measurable results that contribute to your bottom line." },
    { icon: Users, title: "Transparency", description: "We believe in clear, honest communication and building relationships with our clients based on trust and integrity." },
  ];

  const ourProcessSteps = [
    { icon: Coffee, title: "1. Discovery & Understanding", description: "We start by deeply understanding your Dallas business, unique challenges, goals, and target audience to lay a strong foundation." },
    { icon: Target, title: "2. Strategic Planning", description: "Our experts craft tailored, data-informed digital marketing strategies designed to achieve your specific objectives effectively." },
    { icon: Clock, title: "3. Precision Execution & Optimization", description: "We implement your campaigns with meticulous attention to detail, continuously monitoring, analyzing, and optimizing for peak performance and ROI." },
  ];

  return (
    <main className="min-h-screen bg-white"> {/* Assuming a white base background */}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-secondary-blue text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Meet Vixi Agency: Your Dallas Digital Marketing Partner
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            We're not just another agency. We're a passionate team of Dallas-based digital marketing experts dedicated to elevating your brand and delivering high-value, measurable results.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100" asChild>
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>              
              <Image src="/images/about-vixi-team-dallas.webp" alt="About us at Vixi Agency – digital strategists, designers, and growth specialists" width={600} height={400} className="rounded-lg shadow-xl mx-auto" />
            </div>
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                Our Journey: From Vision to Dallas's Trusted Agency
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>Vixi Marketing Agency was born from a simple yet powerful idea: to empower businesses of all sizes with digital marketing that truly makes a difference. Frustrated by seeing companies struggle with generic strategies and lackluster results, our founders envisioned an agency built on <strong className="text-primary-blue">transparency, genuine partnership, and an unwavering commitment to client success.</strong></p>
                <p>Based in the vibrant heart of Dallas, Texas, we've grown by consistently helping our clients navigate the complexities of the ever-evolving digital landscape. We believe in continuous learning and adaptation, ensuring we leverage the latest tools and techniques to keep you ahead.</p>
                <p>Our experience spans diverse industries, working with ambitious startups, established local businesses, and even companies with a national reach. What unites them is their drive to grow, and our passion is to help them achieve it through smart, high-value digital marketing solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-gray-800">
            The Principles That Guide Vixi Agency
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {coreValues.map((value) => (
              <Card key={value.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center">
                  <div className="p-3 bg-blue-100 rounded-full mb-4 inline-block">
                    <value.icon className="h-10 w-10 text-primary-blue" />
                  </div>
                  <CardTitle className="text-xl text-gray-700">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* The Vixi Difference Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">The Vixi Agency Difference</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                    Choosing a digital marketing partner is a big decision. Here’s why Dallas businesses and clients worldwide trust Vixi:
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <Briefcase className="h-10 w-10 text-primary-blue mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">High-Value, Mid-Range Pricing</h3>
                    <p className="text-gray-600 text-sm">We deliver premium, results-oriented digital marketing services without the excessive agency fees, making top-tier expertise accessible.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <Users className="h-10 w-10 text-primary-blue mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Your Dedicated Growth Partner</h3>
                    <p className="text-gray-600 text-sm">We integrate seamlessly with your team, often via tools like Slack, acting as dedicated members committed to your long-term success, not just a vendor.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <MapPin className="h-10 w-10 text-primary-blue mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Dallas Born, Globally Minded</h3>
                    <p className="text-gray-600 text-sm">While proudly based in Dallas, TX, our expertise and strategies are informed by global best practices, serving clients wherever they are.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <Lightbulb className="h-10 w-10 text-primary-blue mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Comprehensive Expertise</h3>
                    <p className="text-gray-600 text-sm">Our diverse team brings together specialists in web design, SEO, paid ads, social media, content creation, and advanced analytics under one roof.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <Target className="h-10 w-10 text-primary-blue mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Data-Driven & Adaptable</h3>
                    <p className="text-gray-600 text-sm">We meticulously track performance, providing clear reports and an agile mindset to adapt strategies for optimal outcomes in a dynamic digital world.</p>
                </div>
                 <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <Heart className="h-10 w-10 text-primary-blue mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Passion for Your Success</h3>
                    <p className="text-gray-600 text-sm">We genuinely care about seeing your business thrive. Your challenges become our challenges, and your victories are our motivation.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-gray-800">
            Our Collaborative Approach to Success
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connecting lines (decorative) - Requires careful styling or an SVG background */}
            {/* This is a conceptual representation. Actual lines would need CSS/SVG. */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 hidden md:block" style={{transform: 'translateY(-50%)', zIndex: 0}}></div>
            
            {ourProcessSteps.map((step, index) => (
              <div key={step.title} className="text-center relative bg-gray-50 px-2 z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-blue text-white mb-6 shadow-lg ring-4 ring-gray-50">
                  <step.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-700">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team (Optional Placeholder) Section - uncomment and populate if you add this */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
            Our Team of Dallas Digital Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
            While we work as one cohesive unit, our strength lies in the diverse talents of our passionate marketing professionals. We're a blend of strategists, creatives, analysts, and tech wizards committed to your success.
          </p>
          {/* Add team member cards or a group photo here if desired */}
          {/* <div className="text-center">
            <Image src="/placeholder-team.jpg" alt="Vixi Marketing Agency Team Dallas" width={800} height={450} className="rounded-lg shadow-xl mx-auto" />
          </div> * /}
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-800 via-primary-blue to-secondary-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Partner with Dallas's Growth-Focused Digital Agency?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let's discuss your vision and how Vixi Agency can tailor a digital marketing strategy to help you achieve your business goals. Your success story starts here.
          </p>
          <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg px-8 py-3" asChild >
            <Link href="/contact">
              Schedule Your Free Consultation
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}