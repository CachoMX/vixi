import { Metadata } from "next"
import { Button } from "@/components/ui/button" // Assuming this is your Button component path
import { Check, ArrowRight, Zap, Settings, BarChartHorizontal } from "lucide-react" // Added relevant icons
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hyros Setup & Marketing Automation Services | Dallas | Vixi Agency",
  description: "Expert Hyros setup ($500 fee) and custom marketing automation consulting in Dallas. Unlock data insights and streamline workflows with Vixi Agency.",
}

export default function HyrosAutomationPage() {
  const hyrosSetupInclusions = [
    "Initial consultation to understand your tracking needs & business goals",
    "Hyros account configuration & basic setup",
    "Guidance on tracking script/pixel installation across your website & funnel pages",
    "Integration check with major ad platforms (e.g., Facebook Ads, Google Ads)",
    "Verification of data flow & initial tracking accuracy",
    "Basic overview of Hyros dashboard and key features",
  ];

  const automationConsultingBenefits = [
    "Custom Marketing Automation Strategy: Tailored to your specific sales & marketing processes.",
    "Workflow Design & Implementation: Building efficient automations for lead nurturing, customer onboarding, email sequences, and more.",
    "Platform Integration Support: Connecting Hyros with your CRM, email marketing tools, and other platforms for seamless data flow.",
    "Ongoing Optimization & Support: Continuously refining automations and providing support to ensure they're delivering results.",
    "Data-Driven Insights: Leveraging Hyros data to inform and improve your automation efforts.",
    "Team Training & Empowerment: Helping your Dallas team understand and utilize automation effectively.",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-secondary-blue text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="max-w-4xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hyros Setup & Marketing Automation Services in Dallas
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90">
              Unlock Powerful Ad Tracking & Streamline Your Business with Smart Automation
            </p>
            <p className="text-lg max-w-2xl mx-auto md:mx-0 opacity-80 mb-10">
              Maximize your marketing ROI with precise ad tracking through Hyros, and supercharge your efficiency with custom marketing automation solutions. Vixi Marketing Agency helps Dallas businesses leverage these powerful tools for transformative growth.
            </p>
            <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100" asChild>
              <Link href="/contact?service=hyros-automation">
                Optimize Your Marketing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is Hyros & Why Marketing Automation? Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Unlock True Ad Performance with Hyros</h2>
              <p className="text-lg text-gray-600 mb-4">
                Hyros is an advanced ad tracking and attribution platform designed to give you crystal-clear insights into your advertising campaigns. Unlike platform-native tracking, Hyros provides a more accurate picture of your customer journey across multiple touchpoints, helping you understand which ads *really* drive sales and how to optimize your ad spend effectively.
              </p>
              <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Benefits of Hyros Tracking:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /> Accurate cross-platform attribution.</li>
                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /> Improved understanding of customer LTV.</li>
                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /> Reduced wasted ad spend & better ROI.</li>
                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /> Data-driven decisions for scaling campaigns.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8 md:mt-0">Supercharge Efficiency with Marketing Automation</h2>
              <p className="text-lg text-gray-600 mb-4">
                Marketing automation involves using software to automate repetitive marketing tasks, nurture leads, personalize customer experiences, and streamline your sales processes. It allows your Dallas team to focus on strategy and high-value activities while ensuring consistent engagement and follow-up.
              </p>
              <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Benefits of Marketing Automation:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /> Save time and reduce manual errors.</li>
                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /> Nurture leads effectively at scale.</li>
                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /> Improve lead quality and sales alignment.</li>
                <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" /> Deliver personalized customer experiences.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Hyros & Automation Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Hyros & Marketing Automation Services</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              We provide expert setup for Hyros and ongoing consulting to build powerful marketing automations tailored to your Dallas business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Hyros Setup Service */}
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center mb-3">
                    <Settings className="h-8 w-8 text-primary-blue mr-3" />
                    <h3 className="text-2xl font-semibold text-primary-blue">Hyros Setup Service</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">Get Hyros implemented correctly from the start to ensure accurate ad tracking and reliable data for your business.</p>
                <p className="text-4xl font-bold text-gray-800">$500<span className="text-xl font-normal text-gray-500"> One-Time Fee</span></p>
              </div>
              <p className="text-gray-700 font-semibold mb-2 text-sm">What's Included:</p>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                {hyrosSetupInclusions.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-px" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full mt-auto bg-primary-blue hover:bg-secondary-blue text-white" asChild>
                <Link href="/contact?service=hyros-setup">
                  Get Hyros Setup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Ongoing Marketing Automation Consulting */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-primary-blue flex flex-col">
                 <div className="mb-6">
                    <div className="flex items-center mb-3">
                        <Zap className="h-8 w-8 text-primary-blue mr-3" />
                        <h3 className="text-2xl font-semibold text-primary-blue">Ongoing Marketing Automation Consulting</h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">Beyond setup, we help you design and implement powerful automations to streamline workflows, nurture leads, and scale your Dallas operations.</p>
                    <p className="text-3xl font-bold text-gray-800">Custom Monthly Retainer</p>
                    <p className="text-sm text-gray-500 mt-1">Pricing Determined After Consultation</p>
                </div>
                <p className="text-gray-700 font-semibold mb-2 text-sm">Potential Benefits & Support:</p>
                <ul className="space-y-3 mb-8 text-sm flex-grow">
                    {automationConsultingBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-px" />
                        <span className="text-gray-700">{benefit}</span>
                    </li>
                    ))}
                </ul>
                <Button size="lg" className="w-full mt-auto bg-primary-blue hover:bg-secondary-blue text-white" asChild>
                    <Link href="/contact?service=automation-consulting">
                    Discuss Automation Needs
                    <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* How We Help Automate Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Imagine Automating...</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Our marketing automation consulting can help your Dallas business streamline a wide range of processes:
            </p>
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    "Lead Nurturing Sequences", "Customer Onboarding Workflows", "Abandoned Cart Reminders",
                    "Email Marketing Campaigns", "Sales Process Automation", "Automated Reporting",
                    "Client Communication Follow-ups", "Internal Task Management", "Cross-Channel Campaign Coordination"
                ].map(item => (
                    <div key={item} className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center space-x-3">
                        <BarChartHorizontal className="h-6 w-6 text-primary-blue flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Why Choose Vixi for Hyros & Automation Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-blue to-secondary-blue text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Vixi for Your Hyros & Automation Needs in Dallas?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Certified Expertise", description: "Knowledgeable in Hyros setup and best practices for accurate tracking from day one." },
              { title: "Strategic Automation Thinking", description: "We don't just build automations; we design systems that align with your Dallas business objectives and drive efficiency." },
              { title: "Focus on Actionable Data", description: "Helping you not only collect data with Hyros but also understand how to use it to make smarter marketing decisions." },
              { title: "Customized Solutions", description: "No one-size-fits-all. We tailor automation strategies to your unique workflows and technology stack." },
              { title: "Save Time, Scale Faster", description: "Let us handle the technical complexities so you can focus on growth and high-level strategy." },
              { title: "Local Dallas Support", description: "Accessible, expert support for your advanced tracking and automation initiatives." }
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Unlock Data-Driven Growth & Efficiency?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Stop guessing your ad performance and drowning in manual tasks. Vixi Marketing Agency provides the Hyros setup and marketing automation expertise your Dallas business needs to thrive.
          </p>
          <div className="space-x-0 space-y-4 sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="bg-primary-blue hover:bg-secondary-blue text-white w-full sm:w-auto" asChild>
              <Link href="/contact?service=hyros-automation-consultation">
                Schedule Your Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white w-full sm:w-auto" asChild>
              <Link href="/contact?service=hyros-setup">
                Get Hyros Setup Service
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}