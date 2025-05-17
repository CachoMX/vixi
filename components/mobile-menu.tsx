// components/mobile-menu.tsx
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, X } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600 hover:text-blue-900"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <nav className="space-y-4">
              <a
                href="/services"
                className="block text-gray-600 hover:text-blue-900 py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="/portfolio"
                className="block text-gray-600 hover:text-blue-900 py-2"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="/about"
                className="block text-gray-600 hover:text-blue-900 py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="block text-gray-600 hover:text-blue-900 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>

              <div className="space-y-2 pt-4 border-t">
                <Button className="w-full justify-start" variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  sales@vixi.agency
                </Button>
                <Button className="w-full justify-start bg-blue-900">
                  <Phone className="mr-2 h-4 w-4" />
                  (945) 954-2923
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}