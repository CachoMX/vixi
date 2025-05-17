'use client'

import { Button } from '@/components/ui/button'
import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    Calendly: any;
  }
}

export function CalendlyButton() {
  useEffect(() => {
    // Add Calendly CSS
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/carloshelp/interview-meeting'
      })
    }
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <Button 
        onClick={openCalendly}
        className="bg-primary-blue"
      >
        Book a Call
      </Button>
    </>
  )
}