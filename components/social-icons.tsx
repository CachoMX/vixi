import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export const socialLinks = {
  instagram: "https://www.instagram.com/vixi.llc/",
  facebook: "https://www.facebook.com/vixiagency",
  twitter: "https://x.com/Vixi_Agency",
  linkedin: "https://www.linkedin.com/company/106735596/"
}

export function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <Link
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-colors"
      >
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Link>
      
      <Link
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-colors"
      >
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Facebook</span>
      </Link>
      
      <Link
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-colors"
      >
        <Twitter className="h-5 w-5" />
        <span className="sr-only">Twitter</span>
      </Link>

      <Link
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-colors"
      >
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
    </div>
  )
}