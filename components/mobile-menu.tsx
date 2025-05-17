// components/mobile-menu.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
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
        <div className="fixed inset-0 z-50 w-full h-full">
          <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-white">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image 
                  src="/images/logo.png" 
                  alt="Vixi Logo" 
                  width={100} 
                  height={35} 
                  className="object-contain" 
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}