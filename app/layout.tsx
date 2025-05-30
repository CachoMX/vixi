// app/layout.tsx
import { Inter } from "next/font/google"
import "./globals.css"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Analytics } from "@vercel/analytics/next"
import { MobileMenu } from '@/components/mobile-menu'
import Script from 'next/script'
import { SocialIcons } from '@/components/social-icons'
import { NewsletterForm } from '@/components/newsletter-form'
import { ChevronDown } from 'lucide-react'
import type { Metadata, Viewport } from "next"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {  
  metadataBase: new URL('https://vixi.agency'),
  title: {
    default: "Vixi Agency | Dallas Digital Marketing & Advertising Experts",
    template: "%s"
  },
  description: "Transform your digital presence with Vixi's comprehensive marketing solutions. Expert web development, social media, and advertising services for businesses in Dallas and worldwide.",
  manifest: '/images/manifest.json',
  icons: {
    icon: [
      { url: '/images/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/images/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/images/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/images/android-icon-192x192.png', type: 'image/png', sizes: '192x192' }
    ],
    apple: [
      { url: '/images/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/images/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/images/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/images/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/images/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/images/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/images/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/images/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/images/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' }
    ]
  },  
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/images/ms-icon-144x144.png"
  }
}


const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService", 
  "additionalType": "https://schema.org/MarketingAgency", 
  "name": "Vixi Agency",
  "alternateName": "Vixi",
  "description": "Dallas's Premier Full-Service Digital Agency offering web development, social media, advertising & design services. We combine creativity with data-driven strategies to deliver exceptional digital solutions.",
  "url": "https://vixi.agency/",
  "logo": "https://vixi.agency/images/logo.webp",
  "image": "https://vixi.agency/images/digital-excellence.webp",
  "telephone": "(945) 954-2923",
  "email": "info@vixi.agency",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1603 Caldwell St",
    "addressLocality": "Dallas",
    "addressRegion": "TX",
    "postalCode": "75223",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.7767",
    "longitude": "-96.7970"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "15:00"
    }
  ],
  "paymentAccepted": "Zelle, Venmo, Wire Transfer",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "32.7767",
      "longitude": "-96.7970"
    },
    "geoRadius": "50000"
  },
  "sameAs": [
    "https://www.facebook.com/61572986380910",
    "https://www.linkedin.com/company/vixi-agency/"
  ],
  "services": [
    {
      "@type": "Service",
      "name": "Web Development",
      "description": "Custom-built websites that convert visitors into customers with responsive design, SEO optimization, and custom development."
    },
    {
      "@type": "Service",
      "name": "Digital Advertising",
      "description": "Multi-platform campaign management with platform expertise, advanced targeting, and performance tracking."
    },
    {
      "@type": "Service",
      "name": "Hyros Integration",
      "description": "Maximize advertising performance with precise tracking and optimization through Hyros integration."
    },
    {
      "@type": "Service",
      "name": "Automation Solutions",
      "description": "Streamline workflows and save time with powerful automated processes using Zapier and Make."
    },
    {
      "@type": "Service",
      "name": "Graphic Design",
      "description": "Professional creative services including brand identity, marketing materials, and social media graphics."
    }
  ],
"mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Vixi Agency offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vixi Agency offers a comprehensive range of digital marketing services including custom website development, social media management, digital advertising across multiple platforms, Hyros integration for enhanced tracking, automation solutions with Zapier and Make, and professional graphic design services."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does Vixi Agency serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vixi Agency primarily serves the Dallas-Fort Worth Metroplex area, but we can work with clients nationwide on digital marketing projects. Our office is located in Dallas, TX."
      }
    },
    {
      "@type": "Question",
      "name": "How can Vixi Agency help improve my business's online presence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We help improve your online presence through data-driven strategies including SEO-optimized website development, strategic social media management, targeted digital advertising campaigns, and cohesive brand design. Our approach combines creativity with analytics to deliver measurable results."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Vixi Agency different from other digital marketing agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vixi Agency stands out through our data-driven approach, certified expertise across all major digital platforms, specialized Hyros integration capabilities, and custom automation solutions. We provide dedicated support with direct access to your team of experts and focus on measurable results rather than vanity metrics."
      }
    },
    {
      "@type": "Question",
      "name": "What is Hyros integration and how can it benefit my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hyros is an advanced tracking and attribution platform that helps businesses accurately measure advertising performance. Our Hyros integration services enable precise tracking of sales attribution, accurate ROAS measurement, and advanced customer journey insights across multiple platforms including Facebook, Google, and TikTok ads."
      }
    },
    {
      "@type": "Question",
      "name": "How much do Vixi Agency's services cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our service costs vary based on project scope, business needs, and ongoing support requirements. We offer customized packages to suit different budgets and objectives. Contact us for a personalized quote based on your specific requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see results from digital marketing efforts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timeline for seeing results varies depending on the service and your starting point. Some advertising campaigns can show results within days, while SEO and organic social media typically take 3-6 months to demonstrate significant impact. We provide regular reporting to track progress from the beginning."
      }
    },
    {
      "@type": "Question",
      "name": "What digital advertising platforms does Vixi Agency work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have certified expertise across all major digital advertising platforms including Google Ads, Facebook Ads, TikTok, X (Twitter), Snapchat, and Bing Ads. Our team stays current with platform changes to maximize your advertising ROI."
      }
    },
    {
      "@type": "Question",
      "name": "Can Vixi Agency help with marketing automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in marketing automation solutions using platforms like Zapier and Make (formerly Integromat). We can automate various aspects of your business including lead management, data synchronization, workflow automation, and more to save time and improve efficiency."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started working with Vixi Agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Getting started is easy. Simply contact us at (945) 954-2923 or email info@vixi.agency to schedule a consultation. We'll discuss your business goals, current digital presence, and develop a customized strategy tailored to your needs and budget."
      }
    }
  ],
  "areaServed": "Dallas-Fort Worth Metroplex",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Advertising"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Automation Solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Graphic Design"
        }
      }
    ]
  }
}

const services = [
  {
    title: "Website Design & Maintenance",
    href: "/services/website-design",
    description: "Custom WordPress websites with ongoing support",
    label: "Starting at $199/mo",
    isNew: false,
  },
  {
    title: "Social Media Management",
    href: "/services/social-media-management",
    description: "Strategic content creation and community management",
    label: "Starting at $1,500/mo",
    isNew: false,
  },
  {
    title: "Ads Management",
    href: "/services/ads-management",
    description: "Expert Facebook & Google Ads management",
    label: "Starting at $450/mo",
    isNew: false,
  },
  {
    title: "Monthly Graphic Design",
    href: "/services/monthly-graphic-design",
    description: "Professional design services on a monthly retainer",
    label: "Starting at $199/mo",
    isNew: false,
  },
  {
    title: "Hyros & Marketing Automation",
    href: "/services/hyros-marketing-automation",
    description: "Expert Hyros setup and workflow automation",
    label: "Starting at $500",
    isNew: false,
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </head>
      <body className={inter.className}>

        
        {/* Header */}
        <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
          <div className="container mx-auto px-6">
            <nav className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/logo.png" 
                  alt="Vixi LLC" 
                  width={130} 
                  height={45} 
                  priority 
                  className="object-contain" 
                />
              </Link>

              {/* Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <Link href="/" className="text-gray-600 hover:text-primary-blue">
                    <span>Home</span>
                  </Link>
                  
                  {/* Services Dropdown */}
                  <div className="relative group inline-block">
                    <div className="flex items-center text-gray-600 hover:text-primary-blue py-2 cursor-pointer">
                      <span>Services</span>
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </div>

                    <div className="absolute top-full left-0 mt-1 w-[300px] bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium">{service.title}</div>
                          <div className="text-sm text-gray-600 mt-1">{service.description}</div>
                          {service.label && (
                            <div className="text-sm text-primary-blue mt-1">{service.label}</div>
                          )}
                          {service.isNew && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-blue text-white mt-2">
                              New
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>


                  <Link href="/about" className="text-gray-600 hover:text-primary-blue">
                    <span>About</span>
                  </Link>
                  <Link href="/packages" className="text-gray-600 hover:text-primary-blue">
                    <span>Packages</span>
                  </Link>
                  <Link href="/contact" className="text-gray-600 hover:text-primary-blue">
                    <span>Contact</span>
                  </Link>
                </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                <Button size="sm" variant="outline" className="text-primary-blue" asChild>
                  <a href="mailto:info@vixi.agency">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>info@vixi.agency</span>
                  </a>
                </Button>
                <Button size="sm" className="bg-primary-blue" asChild>
                  <a href="tel:9459542923">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>(945) 954-2923</span>
                  </a>
                </Button>
              </div>

              {/* Mobile menu button */}
              <MobileMenu />
            </nav>
          </div>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div>
                <div className="mb-6">
                  <Image src="/images/logo.png" alt="Vixi Logo" width={120} height={40} className="object-contain brightness-0 invert" />
                </div>
                <p className="text-gray-400 mb-4">
                  Dallas's Premier Digital Marketing Agency
                </p>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    <a href="tel:+19459542923" className="hover:text-blue-400">
                      <span>(945) 954-2923</span>
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    <a href="mailto:info@vixi.agency" className="hover:text-blue-400">
                      <span>info@vixi.agency</span>
                    </a>
                  </p>
                </div>

                <div className="mt-4">
                  <SocialIcons />
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="grid grid-cols-2 gap-4 text-gray-400">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      <span>Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/packages" className="hover:text-white transition-colors">
                      <span>Packages</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="hover:text-white transition-colors">
                      <span>Portfolio</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      <span>Contact</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="hover:text-white transition-colors">
                      <span>Careers</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
                <p className="text-gray-400 mb-4">
                  Subscribe to our newsletter for digital marketing tips and industry insights.
                </p>
                <NewsletterForm />
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Vixi LLC. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
        <Analytics />
      </body>
    </html>
  )
}