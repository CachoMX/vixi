import { Metadata } from "next"
import { Button } from "@/components/ui/button" // Assuming this is your Button component path
import { Check, ArrowRight, MessageCircle, Users, TrendingUp } from "lucide-react" // Added some relevant icons
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dallas Social Media Management Services | Grow Your Brand | Vixi Agency",
  description: "Boost your Dallas business with Vixi Agency's expert social media management. Strategic content, engaging posts, real results. Packages from $525/month.",
}

export default function SocialMediaPage() {
  const starterFeatures = [
    "Strategic content planning session",
    "1-2 Social Media Platforms (e.g., Facebook & Instagram)",
    "2-3 Custom-Crafted Posts per week per platform",
    "Original copywriting & engaging captions",
    "Custom static graphics or simple video edits for posts",
    "Strategic hashtag research & implementation",
    "Content scheduling & posting",
    "Source files for created graphics",
    "Basic monthly performance overview (reach, engagement rate)",
  ];

  const growthFeatures = [
    "Everything in Social Starter, PLUS:",
    "2-3 Social Media Platforms",
    "3-4 Custom-Crafted Posts per week per platform",
    "Instagram/Facebook Story creation (e.g., 2-3 stories/week per relevant platform)",
    "Enhanced graphic/video complexity",
    "More detailed monthly report with content performance & audience insights",
  ];

  const proFeatures = [
    "Everything in Social Growth, PLUS:",
    "3-4 Social Media Platforms (or more intensive focus on 2-3)",
    "4-5+ Custom-Crafted Posts per week per platform",
    "Advanced Story creation & simple video content (e.g., animated text, short clips)",
    "Comprehensive monthly report with analytics, insights, and strategic recommendations",
    "Quarterly strategy review & planning call",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-secondary-blue text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="max-w-4xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Expert Social Media Management in Dallas
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90">
              Connect, Engage, and Grow Your Brand Online
            </p>
            <p className="text-lg max-w-2xl mx-auto md:mx-0 opacity-80 mb-10">
              In a world driven by connection, a strong social media presence is vital for your Dallas business. Vixi Marketing Agency crafts compelling social media strategies and content that build brand awareness, foster engagement, and drive measurable results.
            </p>
            <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100" asChild>
              <Link href="/contact?service=social-media">
                Boost Your Social Presence
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Social Media Matters Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Why Your Dallas Business Needs Strategic Social Media</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Social media is more than just posting updates; it's about building a community, telling your brand's story, and connecting with your customers where they spend their time. Effective social media management can:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-primary-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Increase Brand Awareness</h3>
              <p className="text-gray-600 text-sm">Reach a wider audience in Dallas and beyond, making your brand more recognizable and memorable.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <MessageCircle className="h-12 w-12 text-primary-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Drive Meaningful Engagement</h3>
              <p className="text-gray-600 text-sm">Foster conversations, build relationships, and create loyal advocates for your brand through interactive content.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <TrendingUp className="h-12 w-12 text-primary-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Generate Leads & Sales</h3>
              <p className="text-gray-600 text-sm">Guide potential customers through your sales funnel with targeted content and clear calls to action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach to Social Media Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Approach: Strategic Social Media That Delivers</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              At Vixi Marketing Agency, we go beyond random posting. Our social media management is rooted in strategy, creativity, and data-driven insights to achieve your specific business objectives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              {/* Add an illustrative image here - e.g., social media icons, engagement examples */}
              <img src="/placeholder-social-approach.jpg" alt="Strategic social media planning" className="rounded-lg shadow-md" />
            </div>
            <div className="space-y-6">
              {[
                { title: "Tailored Content Strategy", description: "We develop a content plan aligned with your brand voice, target audience, and business goals, focusing on what resonates with your Dallas clientele." },
                { title: "High-Quality Content Creation", description: "Our team creates compelling copy and eye-catching custom graphics or simple videos, ensuring your brand looks professional and engaging." },
                { title: "Platform-Specific Optimization", description: "We understand the nuances of each social platform and tailor content for maximum impact on channels like Facebook, Instagram, LinkedIn, and more." },
                { title: "Consistent Scheduling & Execution", description: "We ensure a consistent posting schedule to keep your audience engaged and your brand top-of-mind." }
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

      {/* Social Media Packages Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Social Media Management Packages</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Choose the perfect package to elevate your Dallas business's social media presence. We focus on creating and distributing high-quality content so you can focus on your customers.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Social Starter Package */}
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-primary-blue mb-2">Social Starter</h3>
                <p className="text-gray-600 mb-4 text-sm h-16">Great for businesses new to social media or needing a consistent foundational presence.</p>
                <p className="text-4xl font-bold text-gray-800">$525<span className="text-xl font-normal text-gray-500">/month</span></p>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                {starterFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-px" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full mt-auto bg-primary-blue hover:bg-secondary-blue text-white" asChild>
                <Link href="/contact?package=social-starter">
                  Choose Starter Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Social Growth Package */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-primary-blue flex flex-col relative"> {/* Highlighted package */}
              <div className="absolute top-0 -translate-y-1/2 bg-primary-blue text-white px-4 py-1 text-sm font-semibold rounded-full left-1/2 -translate-x-1/2">Most Popular</div>
              <div className="mb-6 pt-4">
                <h3 className="text-2xl font-semibold text-primary-blue mb-2">Social Growth</h3>
                <p className="text-gray-600 mb-4 text-sm h-16">Designed for businesses looking to actively grow their engagement and reach across multiple platforms.</p>
                <p className="text-4xl font-bold text-gray-800">$950<span className="text-xl font-normal text-gray-500">/month</span></p>
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
                <Link href="/contact?package=social-growth">
                  Choose Growth Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Social Pro Package */}
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-primary-blue mb-2">Social Pro</h3>
                <p className="text-gray-600 mb-4 text-sm h-16">Our most comprehensive package for businesses serious about maximizing their social media impact and ROI.</p>
                <p className="text-4xl font-bold text-gray-800">$1625<span className="text-xl font-normal text-gray-500">/month</span></p>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                {proFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-px" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full mt-auto bg-primary-blue hover:bg-secondary-blue text-white" asChild>
                <Link href="/contact?package=social-pro">
                  Choose Pro Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Important Note Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Important Note on Our Social Media Services</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our packages focus on expert content creation, strategic planning, and consistent posting to build your brand's voice and visibility. <strong className="text-primary-blue">These packages do not include direct responding to comments or direct messages (DMs) (i.e., community management).</strong> We empower you with great content, while day-to-day interaction management remains with your team or can be quoted as a separate service.
          </p>
        </div>
      </section>

      {/* Custom SMM Solutions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Need a Custom Social Media Strategy?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            If your Dallas business requires a more extensive social media presence, management of more platforms, a higher volume of posts, full community management, or integrated social advertising campaigns, we can create a custom solution tailored to your exact needs.
          </p>
          <Button size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white" asChild>
            <Link href="/contact?service=custom-social">
              Discuss Your Custom SMM Needs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Vixi for SMM Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-blue to-secondary-blue text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Vixi for Your Dallas Social Media Marketing?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Strategic Content Experts", description: "We create content that not only looks good but also aligns with your business goals and resonates with your Dallas audience." },
              { title: "Transparent & Value-Driven", description: "Clear packages and fair pricing mean you get high-quality social media management that delivers real value." },
              { title: "Data-Informed Approach", description: "While not all packages include extensive reporting, our strategies are informed by best practices and an understanding of what works." },
              { title: "Focus on Your Brand Voice", description: "We take the time to understand your brand to ensure all content is authentic and consistent." },
              { title: "Save Time & Resources", description: "Let us handle the complexities of social media content creation so you can focus on your core business." },
              { title: "Local Dallas Understanding", description: "We know the Dallas market and can help you connect with your local community effectively." }
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Amplify Your Social Media Impact?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Don't let your social media fall flat. Vixi Marketing Agency provides the strategic content and consistent posting your Dallas business needs to shine online.
          </p>
          <div className="space-x-0 space-y-4 sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="bg-primary-blue hover:bg-secondary-blue text-white w-full sm:w-auto" asChild>
              <Link href="/contact?service=social-media-consultation">
                Get Your Free Social Media Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white w-full sm:w-auto" asChild>
              <Link href="#social-media-packages"> {/* Link to the pricing section on the page */}
                Explore Our SMM Packages
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}