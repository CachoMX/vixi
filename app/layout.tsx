// app/layout.tsx
import type { Metadata } from "next"
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

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://vixi.agency'),
  title: {
    default: "Vixi Agency | Dallas Digital Marketing & Advertising Experts",
    template: "%s | Vixi Agency"
  },
  description: "Transform your digital presence with Vixi's comprehensive marketing solutions. Expert web development, social media, and advertising services."
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "DigitalMarketingAgency",
  "name": "Vixi Agency",
  "alternateName": "Vixi",
  "description": "Dallas's Premier Full-Service Digital Agency offering web development, social media, advertising & design services. We combine creativity with data-driven strategies to deliver exceptional digital solutions.",
  "url": "https://www.vixi.agency/",
  "logo": "https://www.vixi.agency/images/logo.webp",
  "image": "https://www.vixi.agency/images/digital-excellence.webp",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
        
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
                  <Link href="/about" className="text-gray-600 hover:text-primary-blue">
                    <span>About</span>
                  </Link>
                  <Link href="/services" className="text-gray-600 hover:text-primary-blue">
                    <span>Services</span>
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