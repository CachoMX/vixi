// app/packages/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Check, ArrowRight, Package, DollarSign, Users, Lightbulb, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: "Digital Marketing Packages Dallas | Vixi Agency | Transparent Pricing",
  description: "Explore Vixi Agency's digital marketing packages in Dallas. Affordable, high-value solutions for website design, SEO, social media, ads, and graphic design. View our plans and get started today!",
}

// Define TypeScript interfaces for better type safety (optional but recommended)
interface PackageInfo {
  name: string;
  price: string;
  setupFee?: string; // Optional: not all packages have a setup fee
  priceSuffix?: string; // Optional: not all packages have a price suffix
  description: string;
  features: string[];
  ctaLink: string;
  ctaText: string;
  popular?: boolean; // Optional
}

interface ServiceCategoryInfo {
  categoryTitle: string;
  categoryDescription: string;
  servicePageLink: string;
  setupFeeNote?: string; // Optional: for categories like Ads
  packages: PackageInfo[];
}


// Define package data centrally for easier management
const serviceCategories: ServiceCategoryInfo[] = [ // Added type annotation
  {
    categoryTitle: "Website Design & Maintenance",
    categoryDescription: "Professional WordPress websites built for performance and maintained for peace of mind. Perfect for Dallas businesses looking for a strong online foundation.",
    servicePageLink: "/services/website-design",
    packages: [
      {
        name: "Website Essentials",
        price: "$325/month",
        setupFee: "+ $500 Initiation & Setup", // Has setupFee
        description: "Robust online presence with ongoing care & 1 monthly blog post.",
        features: ["Up to 10 Pages", "1 SEO Blog Post/Mo", "Content Updates (2.5hrs)", "Full Maintenance"],
        ctaLink: "/contact?service=website-essentials",
        ctaText: "Choose Essentials",
      },
      {
        name: "Website Growth",
        price: "$575/month",
        setupFee: "+ $500 Initiation & Setup", // Has setupFee
        description: "Enhanced content strategy, more updates, and in-depth support.",
        features: ["Up to 20 Pages", "1-2 SEO Blog Posts/Mo", "Content Updates (4-5hrs)", "Advanced Maintenance"],
        ctaLink: "/contact?service=website-growth",
        ctaText: "Choose Growth",
        popular: true,
      },
    ],
  },
  {
    categoryTitle: "Social Media Management",
    categoryDescription: "Engage your audience and build your brand with strategic social media content crafted for your Dallas business.",
    servicePageLink: "/services/social-media-management",
    packages: [
      {
        name: "Social Starter",
        price: "$525/month",
        // No setupFee, No priceSuffix
        description: "Consistent foundational presence on 1-2 platforms.",
        features: ["1-2 Platforms", "2-3 Posts/Week/Platform", "Custom Graphics", "Basic Reporting"],
        ctaLink: "/contact?package=social-starter",
        ctaText: "Start Socially",
      },
      {
        name: "Social Growth",
        price: "$950/month",
        // No setupFee, No priceSuffix
        description: "Actively grow engagement across 2-3 platforms with more content.",
        features: ["2-3 Platforms", "3-4 Posts/Week/Platform", "Story Creation", "Detailed Reporting"],
        ctaLink: "/contact?package=social-growth",
        ctaText: "Grow Socially",
        popular: true,
      },
      {
        name: "Social Pro",
        price: "$1625/month",
        // No setupFee, No priceSuffix
        description: "Comprehensive management for maximum social media impact & ROI.",
        features: ["3-4 Platforms", "4-5+ Posts/Week/Platform", "Advanced Content", "Strategy Calls"],
        ctaLink: "/contact?package=social-pro",
        ctaText: "Go Pro Socially",
      },
    ],
  },
  {
    categoryTitle: "Facebook & Google Ads Management",
    categoryDescription: "Drive qualified leads and maximize your ROI with expertly managed paid advertising campaigns tailored for the Dallas market.",
    servicePageLink: "/services/ads-management",
    setupFeeNote: "Note: A one-time campaign setup fee of $300-$750 may apply for new accounts.",
    packages: [
      {
        name: "Ads Launchpad",
        price: "$650/mo",
        priceSuffix: "Mgmt Fee + Ad Spend", // Has priceSuffix
        // No setupFee directly on package, it's a category note
        description: "Ideal for starting with paid ads on one primary platform.",
        features: ["1 Ad Platform", "For Ad Spends ~$1k-$2.5k/mo", "Full Campaign Setup & Mgmt", "Monthly Reporting"],
        ctaLink: "/contact?package=ads-launchpad",
        ctaText: "Launch Your Ads",
      },
      {
        name: "Ads Accelerator",
        price: "$1175/mo",
        priceSuffix: "Mgmt Fee + Ad Spend", // Has priceSuffix
        description: "Scale across 1-2 platforms with more aggressive growth targets.",
        features: ["1-2 Ad Platforms", "For Ad Spends ~$2.5k-$7.5k/mo", "A/B Testing", "Detailed Reporting"],
        ctaLink: "/contact?package=ads-accelerator",
        ctaText: "Accelerate Ads",
        popular: true,
      },
      {
        name: "Ads Dominator",
        price: "Starting at $2250/mo",
        priceSuffix: "Mgmt Fee + Ad Spend", // Has priceSuffix
        description: "Comprehensive multi-platform management for market leadership.",
        features: ["2-3+ Ad Platforms", "For Ad Spends $7.5k+/mo", "Advanced Strategies", "Strategy Calls"],
        ctaLink: "/contact?package=ads-dominator",
        ctaText: "Dominate Ads",
      },
    ],
  },
  {
    categoryTitle: "Monthly Graphic Design Services",
    categoryDescription: "Keep your Dallas brand looking sharp with a consistent stream of professional social media graphics and digital assets.",
    servicePageLink: "/services/graphic-design",
    packages: [
      {
        name: "Visual Spark",
        price: "$325/month",
        // No setupFee, No priceSuffix
        description: "Maintain a consistent visual presence on key social channels.",
        features: ["Up to 4 Quick Social Graphics", "2 Revisions/Graphic", "Source Files Included", "Brand Aligned"],
        ctaLink: "/contact?package=visual-spark",
        ctaText: "Spark Your Visuals",
      },
      {
        name: "Visual Boost",
        price: "$600/month",
        // No setupFee, No priceSuffix
        description: "For more active channels or diverse digital marketing visual needs.",
        features: ["Up to 10 Quick Social Graphics", "2 Revisions/Graphic", "Source Files Included", "Versatile Use"],
        ctaLink: "/contact?package=visual-boost",
        ctaText: "Boost Your Visuals",
        popular: true,
      },
    ],
  },
  {
    categoryTitle: "Hyros Setup & Marketing Automation",
    categoryDescription: "Unlock precise ad tracking with Hyros and streamline your Dallas business operations with powerful marketing automation.",
    servicePageLink: "/services/hyros-marketing-automation",
    packages: [
      {
        name: "Hyros Setup Service",
        price: "$500",
        priceSuffix: "One-Time Fee", // Has priceSuffix
        // No setupFee
        description: "Expert implementation of Hyros for accurate ad tracking and reliable data.",
        features: ["Initial Consultation", "Account Configuration", "Tracking Script Guidance", "Integration Check"],
        ctaLink: "/contact?service=hyros-setup",
        ctaText: "Get Hyros Setup",
      },
      {
        name: "Marketing Automation Consulting",
        price: "Custom",
        priceSuffix: "Monthly Retainer", // Has priceSuffix
        // No setupFee
        description: "Tailored automation strategies to streamline workflows and scale operations.",
        features: ["Custom Strategy", "Workflow Design", "Platform Integration", "Ongoing Support"],
        ctaLink: "/contact?service=automation-consulting",
        ctaText: "Discuss Automation",
        popular: true,
      },
    ],
  },
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-secondary-blue text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <Package className="h-16 w-16 mx-auto mb-6 text-white opacity-80" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Vixi Agency Digital Marketing Packages
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            High-value, transparently priced digital marketing solutions designed to grow your Dallas business. Find the perfect plan to achieve your goals.
          </p>
        </div>
      </section>

      {/* Introduction to Packages */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Tailored Solutions for Every Dallas Business</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Vixi Agency, we believe in providing clear, effective, and affordable digital marketing packages. Our plans are designed to offer comprehensive solutions, whether you're just starting out or looking to scale your efforts in the competitive Dallas market. Explore our offerings below and find the right fit for your brand.
          </p>
        </div>
      </section>

      {/* Service Categories & Packages Loop */}
      {serviceCategories.map((category, catIndex) => (
        <section key={catIndex} className={`py-12 md:py-16 ${catIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{category.categoryTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.categoryDescription}</p>
              {category.setupFeeNote && <p className="text-sm text-gray-500 mt-3">{category.setupFeeNote}</p>}
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${category.packages.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8 max-w-7xl mx-auto`}>
              {category.packages.map((pkg) => (
                <Card key={pkg.name} className={`flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300 ${pkg.popular ? 'border-2 border-primary-blue' : 'border border-gray-200'}`}>
                  {pkg.popular && (
                    <div className="absolute top-0 -translate-y-1/2 bg-primary-blue text-white px-4 py-1 text-xs font-semibold rounded-full left-1/2 -translate-x-1/2 shadow-md">
                      MOST POPULAR
                    </div>
                  )}
                  <CardHeader className={`pt-8 ${pkg.popular ? 'pt-12' : 'pt-8'}`}> {/* Adjusted padding for popular badge */}
                    <CardTitle className="text-2xl font-semibold text-primary-blue mb-2 text-center">{pkg.name}</CardTitle>
                    <div className="text-center mb-3">
                        <span className="text-4xl font-bold text-gray-800">{pkg.price}</span>
                        {/* Conditional rendering for priceSuffix */}
                        {pkg.priceSuffix && <span className="text-lg font-normal text-gray-500"> {pkg.priceSuffix}</span>}
                        {/* Conditional rendering for setupFee */}
                        {pkg.setupFee && <p className="text-xs text-gray-500 mt-1">{pkg.setupFee}</p>}
                    </div>
                    <CardDescription className="text-gray-600 text-sm text-center h-12">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3 text-sm mb-6">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-px" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto p-6">
                    <Button size="lg" className="w-full bg-primary-blue hover:bg-secondary-blue text-white" asChild>
                      <Link href={pkg.ctaLink}>
                        {pkg.ctaText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
                <Button variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white" asChild>
                    <Link href={category.servicePageLink}>
                        Learn More About {category.categoryTitle}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
          </div>
        </section>
      ))}

      {/* "Need Help Choosing?" / Custom Solutions Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <Lightbulb className="h-12 w-12 text-primary-blue mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Not Sure Which Package is Right for Your Dallas Business?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Every business is unique. If our standard packages don't perfectly fit your needs, or if you're looking for a custom combination of services, we're here to help. Vixi Agency specializes in creating tailored digital marketing strategies.
          </p>
          <Button size="lg" className="bg-primary-blue hover:bg-secondary-blue text-white text-lg px-8 py-3" asChild>
            <Link href="/contact?service=custom-consultation">
              Request a Custom Consultation
              <Phone className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Vixi Packages Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Why Choose a Vixi Agency Package?</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                    Our packages are designed to provide clarity, value, and results for your Dallas business.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                    <DollarSign className="h-10 w-10 text-primary-blue mx-auto mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600 text-sm">No hidden fees. Know exactly what you're getting and what it costs, helping you budget effectively.</p>
                </div>
                <div className="text-center p-6">
                    <Package className="h-10 w-10 text-primary-blue mx-auto mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Comprehensive Solutions</h3>
                    <p className="text-gray-600 text-sm">Our packages bundle key services to address your core digital marketing needs efficiently.</p>
                </div>
                <div className="text-center p-6">
                    <Users className="h-10 w-10 text-primary-blue mx-auto mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Dedicated Dallas Experts</h3>
                    <p className="text-gray-600 text-sm">Benefit from the collective expertise of our Dallas-based team, committed to your growth and success.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-800 via-primary-blue to-secondary-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Elevate Your Dallas Business with a Strategic Marketing Package?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Let's find the perfect Vixi Agency package to achieve your digital marketing objectives. Our Dallas team is eager to help you succeed.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary-blue hover:bg-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg px-10 py-4" 
            asChild 
          >
            <Link href="/contact">
              Get Your Free Proposal Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
