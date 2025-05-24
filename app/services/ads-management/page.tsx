import { Metadata } from "next"
import { Button } from "@/components/ui/button" // Assuming this is your Button component path
import { Check, ArrowRight, Target, BarChart3, DollarSign } from "lucide-react" // Added relevant icons
import Link from "next/link"

export const metadata: Metadata = {
  title: "Facebook & Google Ads Management Dallas | Drive Growth | Vixi Agency",
  description: "Expert Facebook & Google Ads management in Dallas. Vixi Agency delivers targeted campaigns, measurable ROI, and business growth. Management fees from $450/mo.",
}

export default function AdsManagementPage() {
  const launchpadFeatures = [
    "Management for 1 Ad Platform (Google Ads OR Facebook/Instagram Ads)",
    "Suitable for Ad Spends up to $1,000 - $2,500/month",
    "Initial Campaign Strategy & Setup/Audit",
    "Keyword Research (Google) / Audience Targeting (Social)",
    "Ad Copywriting & Guidance on Visuals",
    "Campaign Build & Launch",
    "Ongoing Monitoring & Bid Management",
    "Basic A/B Testing",
    "Conversion Tracking Setup & Monitoring",
    "Monthly Performance Report & Key Insights",
  ];

  const acceleratorFeatures = [
    "Everything in Ads Launchpad, PLUS:",
    "Management for 1-2 Ad Platforms (e.g., Google Ads + Facebook/Instagram)",
    "Suitable for Ad Spends from $2,500 - $7,500/month",
    "More In-depth Audience Segmentation & Targeting",
    "Regular Ad Creative A/B Testing & Refinement",
    "Landing Page Optimization Recommendations",
    "Detailed Bi-Weekly or Monthly Reporting with Deeper Analysis & Recommendations",
  ];

  const dominatorFeatures = [
    "Everything in Ads Accelerator, PLUS:",
    "Management for 2-3+ Ad Platforms (Comprehensive Multi-Channel Strategy)",
    "Suitable for Ad Spends $7,500+/month (or custom quote for very large spends)",
    "Advanced Campaign Strategies & Funnel Optimization",
    "Proactive Campaign Scaling & Budget Allocation Strategies",
    "Customized, In-depth Reporting & Analytics Dashboards",
    "Dedicated Monthly Strategy & Performance Review Calls",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-secondary-blue text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="max-w-4xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Targeted Facebook & Google Ads Management in Dallas
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90">
              Drive Qualified Leads & Maximize Your ROI with Expert Ad Campaigns
            </p>
            <p className="text-lg max-w-2xl mx-auto md:mx-0 opacity-80 mb-10">
              Stop wasting money on ineffective ads. Vixi Marketing Agency provides strategic Facebook and Google Ads management for Dallas businesses, focusing on data-driven campaigns that deliver measurable results and real growth.
            </p>
            <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100" asChild>
              <Link href="/contact?service=ads-management">
                Get Your Free Ads Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Paid Advertising? Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Why Invest in Paid Advertising for Your Dallas Business?</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Paid advertising on platforms like Google and Facebook offers a powerful way to instantly reach your target audience, generate high-quality leads, and achieve specific marketing objectives.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <Target className="h-12 w-12 text-primary-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Precision Targeting</h3>
              <p className="text-gray-600 text-sm">Reach specific demographics, interests, behaviors, and even past website visitors in the Dallas area and beyond.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <DollarSign className="h-12 w-12 text-primary-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Measurable ROI</h3>
              <p className="text-gray-600 text-sm">Track every dollar spent and see direct returns on your investment with detailed analytics and conversion tracking.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <BarChart3 className="h-12 w-12 text-primary-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Fast & Scalable Results</h3>
              <p className="text-gray-600 text-sm">Generate traffic and leads quickly, and easily scale your campaigns up or down based on performance and budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach to Ads Management Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Approach: Data-Driven Ads Management That Converts</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              At Vixi Marketing Agency, we manage your ad spend as if it were our own. Our process is built on strategic planning, continuous optimization, and transparent reporting to maximize your return.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
                <img src="/images/data-driven-ad-campaign-strategy-vixi.webp" alt="Data-driven ad campaign management" className="rounded-lg shadow-md" />
            </div>
            <div className="space-y-6">
              {[
                { title: "Strategic Campaign Blueprint", description: "We start with a deep dive into your Dallas business, target audience, and goals to create a custom advertising strategy." },
                { title: "Compelling Ad Creatives", description: "Our team develops persuasive ad copy and provides expert guidance on visuals that grab attention and drive clicks." },
                { title: "Continuous Optimization", description: "We constantly monitor campaign performance, A/B test ad variations, refine targeting, and adjust bids to improve results and lower costs." },
                { title: "Transparent Reporting", description: "You'll receive clear, easy-to-understand reports detailing key metrics, ad spend, conversions, and actionable insights." }
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

      {/* Ads Management Packages Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Ads Management Packages</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Choose a package that aligns with your advertising goals and budget. All packages include our expert management; client provides the ad spend budget directly to the ad platforms.
            </p>
            <p className="text-sm text-gray-500 mt-2">Note: A one-time campaign setup fee of $300-$750 may apply for new accounts, based on complexity.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Ads Launchpad Package */}
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-primary-blue mb-2">Ads Launchpad</h3>
                <p className="text-gray-600 mb-4 text-sm h-16">Ideal for businesses starting with paid ads or focusing on one primary platform with a smaller budget.</p>
                <p className="text-4xl font-bold text-gray-800">$450<span className="text-xl font-normal text-gray-500">/mo Mgmt Fee</span></p>
                <p className="text-sm text-gray-500 mt-1">+ Your Ad Spend Budget</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                {launchpadFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-px" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full mt-auto bg-primary-blue hover:bg-secondary-blue text-white" asChild>
                <Link href="/contact?package=ads-launchpad">
                  Choose Launchpad
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Ads Accelerator Package */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-primary-blue flex flex-col relative">
              <div className="absolute top-0 -translate-y-1/2 bg-primary-blue text-white px-4 py-1 text-sm font-semibold rounded-full left-1/2 -translate-x-1/2">Most Popular</div>
              <div className="mb-6 pt-4">
                <h3 className="text-2xl font-semibold text-primary-blue mb-2">Ads Accelerator</h3>
                <p className="text-gray-600 mb-4 text-sm h-16">For businesses ready to scale, manage multiple platforms, and achieve more aggressive growth targets.</p>
                <p className="text-4xl font-bold text-gray-800">$1175<span className="text-xl font-normal text-gray-500">/mo Mgmt Fee</span></p>
                <p className="text-sm text-gray-500 mt-1">+ Your Ad Spend Budget</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                {acceleratorFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-px" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full mt-auto bg-primary-blue hover:bg-secondary-blue text-white" asChild>
                <Link href="/contact?package=ads-accelerator">
                  Choose Accelerator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Ads Dominator Package */}
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-primary-blue mb-2">Ads Dominator</h3>
                <p className="text-gray-600 mb-4 text-sm h-16">Comprehensive multi-platform management for businesses aiming for market leadership and maximum ROI from significant ad spends.</p>
                <p className="text-3xl font-bold text-gray-800">Starting at $2250<span className="text-xl font-normal text-gray-500">/mo Mgmt Fee</span></p>
                <p className="text-sm text-gray-600">(Or 10-15% of Ad Spend for larger budgets)</p>
                <p className="text-sm text-gray-500 mt-1">+ Your Ad Spend Budget</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                {dominatorFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-px" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full mt-auto bg-primary-blue hover:bg-secondary-blue text-white" asChild>
                <Link href="/contact?package=ads-dominator">
                  Choose Dominator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Components Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Key Components of Our Ad Management Service</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h4 className="font-semibold text-primary-blue mb-2">Strategic Planning</h4>
                    <p className="text-sm text-gray-600">Custom strategy based on your Dallas business goals, audience, and competitive landscape.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h4 className="font-semibold text-primary-blue mb-2">Creative Excellence</h4>
                    <p className="text-sm text-gray-600">Compelling ad copy and visual guidance to ensure your ads stand out and convert.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h4 className="font-semibold text-primary-blue mb-2">Rigorous Optimization</h4>
                    <p className="text-sm text-gray-600">Continuous A/B testing, bid adjustments, and targeting refinements for peak performance.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h4 className="font-semibold text-primary-blue mb-2">Transparent Reporting</h4>
                    <p className="text-sm text-gray-600">Clear, insightful reports showing exactly how your ad spend is performing and driving results.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Custom Ads Management Solutions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Tailored Ad Strategies for Larger Budgets & Complex Needs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Does your Dallas business have a significant advertising budget, operate in highly competitive niches, or require management across an extensive array of platforms and funnels? We provide fully customized ad management solutions.
          </p>
          <Button size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white" asChild>
            <Link href="/contact?service=custom-ads">
              Discuss Your Custom Ad Strategy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Vixi for Ads Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-blue to-secondary-blue text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Vixi for Your Dallas Facebook & Google Ads?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "ROI-Focused Approach", description: "Our primary goal is to maximize your return on ad spend through meticulous planning and optimization." },
              { title: "Certified Platform Experts", description: "Proficient in Google Ads and Facebook/Instagram Ads platforms, staying updated with the latest features and best practices." },
              { title: "Data-Driven Decisions", description: "We leverage analytics and performance data to make informed decisions and continuously improve your campaigns." },
              { title: "Transparent Communication", description: "You'll always know how your campaigns are performing and how your budget is being utilized for your Dallas business." },
              { title: "Local Market Knowledge", description: "We understand the Dallas consumer landscape, helping tailor ad messaging for local relevance and impact." },
              { title: "Integrated Strategies", description: "We can align your paid ad campaigns with your broader SEO and content marketing efforts for synergistic results." }
            ].map((item) => (
              <div key={item.title} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to See Real Results from Your Ad Spend?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Stop guessing with your ads and start growing. Vixi Marketing Agency offers the expertise your Dallas business needs to turn clicks into customers through strategic Facebook and Google Ads management.
          </p>
          <div className="space-x-0 space-y-4 sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="bg-primary-blue hover:bg-secondary-blue text-white w-full sm:w-auto" asChild>
              <Link href="/contact?service=ads-consultation">
                Book Your Free Ads Strategy Session
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white w-full sm:w-auto" asChild>
              <Link href="#ads-packages"> {/* Link to the pricing section on the page */}
                Review Ad Management Packages
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}