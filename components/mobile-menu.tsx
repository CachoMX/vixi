// components/mobile-menu.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 w-full h-full bg-white">
          <div className="flex flex-col h-full">
            {/* Header - Match main header height and padding */}
            <div className="flex items-center justify-between h-20 px-6 border-b bg-white">
              <Link href="/" onClick={() => setIsOpen(false)} className="py-4">
                <Image 
                  src="/images/logo.png" 
                  alt="Vixi Logo" 
                  width={130} 
                  height={45} 
                  className="object-contain" 
                  priority
                />
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-600"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-6 p-8 bg-white">
              <Link 
                href="/" 
                className="text-gray-800 hover:text-primary-blue text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-800 hover:text-primary-blue text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-gray-800 hover:text-primary-blue text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/packages" 
                className="text-gray-800 hover:text-primary-blue text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Packages
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-800 hover:text-primary-blue text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>

            {/* Contact Buttons */}
            <div className="mt-auto p-6 space-y-4 border-t bg-white">
              <Button className="w-full bg-primary-blue" asChild>
                <a href="tel:+19459542923">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>(945) 954-2923</span>
                </a>
              </Button>
              <Button variant="outline" className="w-full text-primary-blue" asChild>
                <a href="mailto:info@vixi.agency">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>info@vixi.agency</span>
                </a>
              </Button>
              <div className="mt-8 px-4 py-4 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6">
                <a 
                  href="https://instagram.com/vixiagency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-blue transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://facebook.com/vixiagency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-blue transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com/company/vixiagency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-blue transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://twitter.com/vixiagency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-blue transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            </div>            
          </div>
        </div>
      )}
    </div>
  );
}