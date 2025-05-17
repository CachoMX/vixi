// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedSection } from "@/components/animated-section"
import Script from 'next/script';
import { SocialIcons } from '@/components/social-icons'
import { NewsletterForm } from '@/components/newsletter-form'
import { Analytics } from "@vercel/analytics/next"
import { MobileMenu } from '@/components/mobile-menu'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vixi Agency | Dallas Digital Marketing & Advertising Experts",
  description: "Transform your digital presence with Vixi's comprehensive marketing solutions. Expert web development, social media, and advertising services. Call (945) 954-2923.",
  icons: {
    icon: [
      {
        url: "/images/favicon.svg",
        type: "image/svg+xml",
      }
    ],
  },
  openGraph: {
    title: 'Vixi Agency | Dallas Digital Marketing & Advertising Experts',
    description: 'Transform your digital presence with Vixi\'s comprehensive marketing solutions. Expert web development, social media, and advertising services.',
    url: 'https://vixi.agency',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Vixi_Agency',
    creator: '@Vixi_Agency',
  },
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
    <head>
        {/* Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-Z6LEGPCJV7" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z6LEGPCJV7');
            `,
          }}
        />
        <Script
        id="partygo-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var head = document.head;
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = "https://t.partygo.mx/v1/lst/universal-script?ph=664ad84e5a8d71d02e5f8fe74e28bfe1eca5b5a982655b75fac5513b98d326d3&tag=!vixi&ref_url=" + encodeURI(document.URL);
            head.appendChild(script);
          `,
        }}
      />

      {/* LocalBusiness Schema Markup for SEO */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Vixi Agency",
              "address": {
                "streetAddress": "1603 Caldwell St",
                "addressLocality": "Dallas",
                "addressRegion": "TX",
                "postalCode": "75223",
                "addressCountry": "US"
              },
              "telephone": "+1-945-954-2923",
              "url": "https://vixi.agency",
              "sameAs": [
                "https://www.facebook.com/vixiagency",
                "https://www.linkedin.com/company/106735596/",
                "https://www.instagram.com/vixi.llc/",
                "https://x.com/Vixi_Agency"
              ]
            }),
          }}
        />

      </head>
      <body className={inter.className}>
        {/* Header */}
        <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
          <div className="container mx-auto px-6">
            <nav className="flex items-center justify-between h-16">
              {/* Logo */}
              <a href="/" className="text-xl font-bold text-primary-blue">
                <Image src="/images/logo.png" alt="Vixi Logo" width={120} height={40} priority className="object-contain"  />
              </a>

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