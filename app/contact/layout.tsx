import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Vixi Agency | Let's Talk Growth 🚀",
  description: "Ready to grow your business? Contact Vixi for a free consultation on digital marketing, web development, and advertising. Let's build something great together.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}