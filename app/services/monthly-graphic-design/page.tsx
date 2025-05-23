import { Metadata } from "next"
import { Button } from "@/components/ui/button" // Assuming this is your Button component path
import { Check, ArrowRight, Palette, Image as ImageIcon, Layers } from "lucide-react" // Added relevant icons
import Link from "next/link"

export const metadata: Metadata = {
  title: "Monthly Graphic Design Services Dallas | Eye-Catching Visuals | Vixi Agency",
  description: "Affordable monthly graphic design packages in Dallas by Vixi Agency. Get consistent, professional social media graphics and more from $199/month.",
}

export default function GraphicDesignPage() {
  const visualSparkFeatures = [
    "Up to 4 Quick Social Media Graphics per month",
    "Ideal for consistent social media presence",
    "Custom designs aligned with your brand",
    "Includes 2 revisions per graphic",
    "Source files provided (e.g., .ai, .psd, .fig)",
    "Perfect for posts, stories, or simple ad visuals",
  ];

  const visualBoostFeatures = [
    "Up to 10 Quick Social Media Graphics per month",
    "Great for active social channels & varied content needs",
    "Custom designs aligned with your brand",
    "Includes 2 revisions per graphic",
    "Source files provided (e.g., .ai, .psd, .fig)",
    "Can include a mix of social posts, story graphics, or simple web banners (within 'quick graphic' scope)",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-secondary-blue text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="max-w-4xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Monthly Graphic Design Services in Dallas
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90">
              Stunning Visuals, Consistently Delivered for Your Brand
            </p>
            <p className="text-lg max-w-2xl mx-auto md:mx-0 opacity-80 mb-10">
              Elevate your brand's image with professional, eye-catching graphics without the hassle of one-off projects. Vixi Marketing Agency offers affordable monthly graphic design packages for Dallas businesses needing consistent, high-quality visuals.
            </p>
            <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100" asChild>
              <Link href="/contact?service=graphic-design">
                Get Your Graphics Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Professional Graphic Design Matters Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Why Consistent, Professional Graphic Design Matters</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              In a visually driven world, strong graphic design is essential for capturing attention, communicating your message effectively, and building a memorable brand identity for your Dallas business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <Palette className="h-12 w-12 text-primary-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Enhance Brand Recognition</h3>
              <p className="text-gray-600 text-sm">Consistent, professional visuals reinforce your brand identity and make you instantly recognizable to your Dallas audience.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <ImageIcon className="h-12 w-12 text-primary-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Boost Engagement</h3>
              <p className="text-gray-600 text-sm">Eye-catching graphics for social media, ads, and your website capture attention and encourage interaction.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <Layers className="h-12 w-12 text-primary-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Save Time & Ensure Quality</h3>
              <p className="text-gray-600 text-sm">Offload design tasks to professionals and receive high-quality, ready-to-use graphics consistently every month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach to Graphic Design Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Approach: Your Vision, Creatively Executed</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Vixi Marketing Agency's monthly design service is built for efficiency and quality, providing you with the visuals you need without the overhead of a full-time designer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>              
              <img src="/images/graphic-design-process-vixi-agency.webp" alt="Creative graphic design process" className="rounded-lg shadow-md" />
            </div>
            <div className="space-y-6">
              {[
                { title: "Brand Alignment First", description: "We take the time to understand your brand guidelines, style, and objectives to ensure all graphics are a perfect fit." },
                { title: "Focus on 'Quick Graphics'", description: "Our monthly packages are designed for efficiently producing common digital assets like social media posts and simple ad creatives." },
                { title: "Quality & Revisions", description: "Receive professional-quality designs with up to two rounds of revisions included to ensure you're delighted with the outcome." },
                { title: "You Own the Files", description: "We provide the source files for the graphics we create for you, giving you full ownership and flexibility." }
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

      {/* Monthly Graphic Design Packages Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Monthly Graphic Design Packages</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Get a steady stream of professional graphics for your Dallas business with our simple and affordable monthly plans. Perfect for keeping your social media and digital marketing fresh.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Visual Spark Package */}
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-primary-blue mb-2">Visual Spark</h3>
                <p className="text-gray-600 mb-4 text-sm h-16 md:h-20">Perfect for maintaining a consistent visual presence on your key social media channels.</p>
                <p className="text-4xl font-bold text-gray-800">$199<span className="text-xl font-normal text-gray-500">/month</span></p>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                {visualSparkFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-px" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full mt-auto bg-primary-blue hover:bg-secondary-blue text-white" asChild>
                <Link href="/contact?package=visual-spark">
                  Choose Visual Spark
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Visual Boost Package */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-primary-blue flex flex-col relative">
              <div className="absolute top-0 -translate-y-1/2 bg-primary-blue text-white px-4 py-1 text-sm font-semibold rounded-full left-1/2 -translate-x-1/2">Most Popular</div>
              <div className="mb-6 pt-4">
                <h3 className="text-2xl font-semibold text-primary-blue mb-2">Visual Boost</h3>
                <p className="text-gray-600 mb-4 text-sm h-16 md:h-20">Ideal for businesses with more active social channels or diverse digital marketing visual needs.</p>
                <p className="text-4xl font-bold text-gray-800">$600<span className="text-xl font-normal text-gray-500">/month</span></p>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                {visualBoostFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-px" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full mt-auto bg-primary-blue hover:bg-secondary-blue text-white" asChild>
                <Link href="/contact?package=visual-boost">
                  Choose Visual Boost
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Kind of Graphics Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">What are "Quick Social Media Graphics"?</h3>
            <p className="text-gray-700 mb-6">
              Our monthly packages are optimized for creating high-quality graphics commonly used in digital marketing, primarily for social media. This includes:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div className="bg-white p-4 rounded-md shadow-sm">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Engaging social media post images</li>
                        <li>Eye-catching Instagram/Facebook Story graphics</li>
                        <li>Simple banner ads for social media campaigns</li>
                        <li>Quote graphics</li>
                        <li>Promotional visuals for offers/events</li>
                    </ul>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                     <p className="text-gray-700 text-sm">
                        These are typically single-layout designs that can be produced efficiently while maintaining high quality and brand consistency.
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                        <strong>Need something more complex?</strong> See below!
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Graphic Design Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Need More Than Monthly Graphics? We Do Custom Projects Too!</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Beyond our monthly packages for "quick graphics," Vixi Marketing Agency offers comprehensive graphic design services for larger, more complex projects for your Dallas business, including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8 text-sm text-gray-700">
            {[ "Logo Design & Branding", "Business Cards & Stationery", "Flyers & Brochures", "Infographics", "Presentation Decks", "Trade Show Materials", "Packaging Design", "Custom Illustrations"].map(item => (
                <div key={item} className="bg-gray-100 p-3 rounded-md shadow-sm">{item}</div>
            ))}
          </div>
          <Button size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white" asChild>
            <Link href="/contact?service=custom-graphic-design">
              Get a Quote for Your Custom Design Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Vixi for Graphic Design Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-blue to-secondary-blue text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Vixi for Your Dallas Graphic Design Needs?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Affordable & Predictable", description: "Our monthly plans provide cost-effective access to professional design with no surprise fees." },
              { title: "Quality & Consistency", description: "Receive high-quality, on-brand graphics every month to keep your marketing looking sharp." },
              { title: "Fast & Efficient", description: "We're geared for quick turnarounds on social media graphics, helping you stay agile." },
              { title: "You Own Your Designs", description: "Source files are included, giving you full control over your creative assets." },
              { title: "Dallas-Based Creativity", description: "Benefit from our understanding of local Dallas trends while receiving globally competitive design quality." },
              { title: "Integrated Service", description: "Easily combine graphic design with our social media, web, and ads management services for a cohesive brand presence." }
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Elevate Your Brand with Stunning Visuals!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Stop struggling with DIY design or inconsistent freelancers. Vixi Marketing Agency offers the professional graphic design your Dallas business deserves, delivered consistently through our affordable monthly packages.
          </p>
          <div className="space-x-0 space-y-4 sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="bg-primary-blue hover:bg-secondary-blue text-white w-full sm:w-auto" asChild>
              <Link href="/contact?service=graphic-design-consultation">
                Discuss Your Design Needs
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white w-full sm:w-auto" asChild>
              <Link href="#graphic-design-packages"> {/* Link to the pricing section on the page */}
                See Design Packages
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}