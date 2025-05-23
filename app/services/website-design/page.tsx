// app/services/website-design-maintenance/page.tsx (or your actual path)
import { Metadata } from "next"
import { Button } from "@/components/ui/button" // Assuming this is your Button component path
import { Check, ArrowRight, PackagePlus, DollarSign } from "lucide-react" // Added new icons
import Link from "next/link"
import Image from "next/image" // For optimized images

export const metadata: Metadata = {
  title: "Professional Website Design & Maintenance | Dallas | Vixi Agency",
  description: "Expert WordPress design in Dallas. Choose monthly maintenance plans (from $199/mo + setup) or a one-time website build. Get a high-performing, SEO-ready site.",
}

export default function WebsiteDesignPage() {
  const essentialsFeatures = [
    "Professionally Designed WordPress Website (Up to 10 pages)", // Kept as per your provided code
    "Mobile-Responsive & SEO-Friendly Design",
    "1 SEO-Optimized Blog Post/Month (approx. 500-750 words, topic research, copywriting, licensed stock image, on-page SEO)",
    "Up to 5 'Minimum Changes'/Month (e.g., text edits, image swaps - approx. 2.5 total hours)",
    "WordPress Core, Theme & Plugin Updates",
    "Regular Security Scans & Monitoring",
    "Daily or Weekly Website Backups",
    "Basic Server & Hosting Optimization",
    "Uptime Monitoring",
    "Basic Monthly Performance Report",
  ];

  const growthFeatures = [
    "Everything in Essentials Monthly, PLUS:",
    "Professionally Designed WordPress Website (Up to 20 pages)", // Clarified page count for Growth
    "1 In-Depth SEO Blog Post/Month (750-1000 words) OR 2 Standard SEO Blog Posts (500 words each)",
    "Up to 8-10 'Minimum Changes'/Month (approx. 4-5 total hours)",
    "Advanced Security Measures",
    "More Frequent Backups (e.g., daily)",
    "Basic E-commerce Support (if applicable for up to 20 pages)",
    "Detailed Monthly Performance Report (keyword insights, traffic sources)",
  ];

  const oneTimeBuildFeatures = [
    "Comprehensive Discovery & Strategy Session",
    "Custom-Feel WordPress Design (Up to 15 pages as a baseline)",
    "Mobile-Responsive & SEO-Friendly Development",
    "Client-Provided Content Integration for Initial Pages",
    "Essential On-Page SEO Setup (Titles, Metas, Image Alts)",
    "Core Security Fundamentals Implemented",
    "1-on-1 WordPress CMS Training Session",
    "Professional Website Launch & Handover",
    "Guidance on Hosting Options",
    "Option to Add Ongoing Website Care Plans (Maintenance, SEO, Content)",
  ];


  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-secondary-blue text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="max-w-4xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Professional Website Design & Ongoing Maintenance in Dallas
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90">
              Your Digital Foundation, Built to Last & Designed to Convert
            </p>
            <p className="text-lg max-w-2xl mx-auto md:mx-0 opacity-80 mb-10">
              In today's digital-first world, your website is your 24/7 salesperson. Vixi Marketing Agency creates stunning, functional WordPress websites and offers flexible solutions including continuous maintenance packages or one-time builds to ensure your Dallas business thrives online.
            </p>
            <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100" asChild>
              <Link href="/contact?service=website-consultation">
                Schedule a Free Website Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction - Why it matters */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Is Your Dallas Website Working For You?</h2>
            <p className="text-lg text-gray-600 mb-6">
              A professionally designed, secure, and up-to-date website is no longer a luxury; it's a fundamental requirement for businesses in Dallas and beyond. It’s your primary tool for generating leads, engaging customers, and building credibility.
            </p>
            <p className="text-lg text-gray-600">
              Is your current website outdated, slow, or failing to convert visitors? Or are you a new business needing a powerful online launchpad? Vixi offers comprehensive website solutions to fit your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Approach: Building & Maintaining Your Website Excellence</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Whether you choose an ongoing partnership or a one-time build, we combine expert WordPress design with proactive strategies, all designed to deliver exceptional value and peace of mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Image 
                src="/images/website-design-process-dallas.jpg" // REPLACE with your actual image
                alt="Modern website design and development process at Vixi Agency Dallas" 
                width={600} 
                height={450} 
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="space-y-6">
              {[
                { title: "WordPress Experts", description: "We specialize in WordPress, the world's leading CMS, known for its flexibility, scalability, and user-friendliness, perfect for Dallas businesses of all sizes." },
                { title: "Design That Converts", description: "Our designs prioritize a seamless user experience (UX), mobile-responsiveness across all devices, and a clear path for visitors to become customers." },
                { title: "SEO-Ready Foundation", description: "We build websites with Search Engine Optimization (SEO) best practices in mind from the start, helping you get found by your ideal Dallas audience." },
                { title: "Flexible Partnership Models", description: "Choose from comprehensive monthly care plans or a one-time website design and launch project to suit your business needs." }
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Check className="h-7 w-7 text-primary-blue bg-blue-100 p-1 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Pricing Packages Section */}
      <section id="monthly-website-packages" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Launch & Grow: Our Monthly Website Packages</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Get a professional WordPress website combined with ongoing content, maintenance, and support. We start with a <strong className="text-primary-blue">one-time Initiation & Setup Fee of $500</strong>, then choose your monthly package (1-year minimum partnership).
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Essentials Package */}
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-primary-blue mb-2">Website Essentials Monthly</h3>
                <p className="text-gray-600 mb-4 text-sm">Perfect for startups and small businesses in Dallas needing a robust, professional online presence with ongoing care.</p>
                <p className="text-4xl font-bold text-gray-800">$199<span className="text-xl font-normal text-gray-500">/month</span></p>
                <p className="text-sm text-gray-500 mt-1">+ $500 Initiation & Setup Fee</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                {essentialsFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-px" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full mt-auto bg-primary-blue hover:bg-secondary-blue text-white" asChild>
                <Link href="/contact?package=website-essentials">
                  Get Started with Essentials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Growth Package */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-primary-blue flex flex-col relative">
              <div className="absolute top-0 -translate-y-1/2 bg-primary-blue text-white px-4 py-1 text-sm font-semibold rounded-full left-1/2 -translate-x-1/2">Most Popular</div>
              <div className="mb-6 pt-4">
                <h3 className="text-2xl font-semibold text-primary-blue mb-2">Website Growth Monthly</h3>
                <p className="text-gray-600 mb-4 text-sm">Ideal for growing Dallas businesses aiming to enhance content strategy, require more updates, and seek more in-depth support.</p>
                <p className="text-4xl font-bold text-gray-800">$425<span className="text-xl font-normal text-gray-500">/month</span></p>
                <p className="text-sm text-gray-500 mt-1">+ $500 Initiation & Setup Fee</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                {growthFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-px" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full mt-auto bg-primary-blue hover:bg-secondary-blue text-white" asChild>
                <Link href="/contact?package=website-growth">
                  Elevate with Growth Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
           <div className="text-center mt-10">
              <p className="text-sm text-gray-600">
                Want to pay for the year upfront and save? Ask about our <strong className="font-semibold">discounted annual pre-payment options</strong> for monthly packages!
              </p>
            </div>
        </div>
      </section>

      {/* One-Time Payment Option Section - NEW */}
      <section id="one-time-website-build" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-white rounded-full shadow-md mb-4">
                <DollarSign className="h-10 w-10 text-primary-blue" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Prefer a One-Time Investment?</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              For businesses looking for a comprehensive website build without a recurring monthly commitment for bundled services, Vixi Agency offers our **Website Design & Launch Package.**
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-gray-200">
            <h3 className="text-2xl font-semibold text-primary-blue mb-3 text-center">Website Design & Launch</h3>
            <p className="text-center text-gray-600 mb-4 text-sm">Full ownership of a professionally built WordPress website, perfect for launching your Dallas business online with a strong foundation.</p>
            <p className="text-4xl font-bold text-gray-800 text-center mb-6">Starting from $2,500 <span className="text-xl font-normal text-gray-500">(One-Time Payment)</span></p>
            
            <p className="text-gray-700 font-semibold mb-2">This project-based package includes:</p>
            <ul className="space-y-3 mb-8 text-sm text-gray-700">
              {oneTimeBuildFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-px" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mb-6">
                Note: This package focuses on the design, build, and launch. Ongoing monthly hosting, comprehensive maintenance, regular blog content, and extensive updates post-launch are not included but can be added via our flexible <Link href="/services/website-care-plans" className="text-primary-blue hover:underline">Website Care Plans</Link> or <Link href="/services/content-marketing" className="text-primary-blue hover:underline">Content Packages</Link>.
            </p>
            <Button size="lg" className="w-full bg-primary-blue hover:bg-secondary-blue text-white text-lg" asChild>
              <Link href="/contact?service=one-time-website-build">
                Request a Quote for Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Understanding "Minimum Changes" Section (Relevant for Monthly Packages) */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Understanding "Minimum Changes" (For Monthly Plans)</h3>
            <p className="text-lg text-gray-600 mb-6 text-center">
              To ensure clarity for our monthly package clients, "Minimum Changes" cover small updates that typically take up to 30 minutes per task. We allocate a set number of these tasks monthly for your convenience.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md border">
                <p className="text-gray-700 font-semibold mb-2">This can include tasks like:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                    <li>Updating text content on existing pages.</li>
                    <li>Swapping out images (client-provided or licensed stock images we source).</li>
                    <li>Adding new testimonials or staff profiles.</li>
                    <li>Updating contact information or business hours.</li>
                    <li>Minor layout adjustments or tweaks on existing pages.</li>
                </ul>
                <p className="text-gray-600 mt-4 text-sm">
                    For more substantial changes like adding entirely new sections, designing new pages beyond your package's initial page count, custom feature development, or extensive graphic design work, we’ll provide a separate, transparent quote.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block p-3 bg-blue-100 rounded-full shadow-md mb-4">
            <PackagePlus className="h-10 w-10 text-primary-blue" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Need a More Custom Website Solution?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            While our packages cover many common business needs, we understand some Dallas projects require a uniquely tailored approach. If you're looking for advanced e-commerce, custom integrations, membership portals, specific API work, or a website significantly larger than detailed in our packages, Vixi Marketing Agency has the expertise to deliver.
          </p>
          <Button size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white text-lg px-8 py-3" asChild>
            <Link href="/contact?service=custom-website-project">
              Discuss Your Custom Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Vixi Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-blue to-secondary-blue text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Vixi for Your Dallas Website Needs?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "High-Value, Fair Pricing", description: "Get premium agency service and results without the shocking price tag. We deliver exceptional value for your Dallas business." },
              { title: "Local Insight, Global Standards", description: "Our Dallas roots give us local market understanding, combined with international best practices in web design and SEO." },
              { title: "Your Dedicated Web Partner", description: "We're committed to your website's ongoing success, acting as an extension of your team. (Ask about Slack integration!)" },
              { title: "Focus on Your Growth", description: "A great website is a tool for business growth. We build and maintain your site with your bottom line in mind." },
              { title: "Transparency & Reliability", description: "From clear package inclusions to proactive maintenance, you can count on us for dependable service." },
              { title: "WordPress Prowess", description: "We harness the full power of WordPress to create flexible, scalable, and easy-to-manage websites for you." }
            ].map((item) => (
              <div key={item.title} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="opacity-90 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Launch or Revitalize Your Online Presence?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Your website is too important to leave to chance. Partner with Vixi Marketing Agency and let our Dallas-based team of WordPress experts design a high-performing website and keep it running flawlessly with our comprehensive monthly maintenance plans, or build it for you as a powerful one-time project.
          </p>
          <div className="space-x-0 space-y-4 sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="bg-primary-blue hover:bg-secondary-blue text-white w-full sm:w-auto text-lg px-8 py-3" asChild>
              <Link href="/contact?service=website-consultation">
                Schedule Your Free Website Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white w-full sm:w-auto text-lg px-8 py-3" asChild>
              <Link href="#monthly-website-packages"> 
                Explore All Options
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
