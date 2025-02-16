// app/about/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Phone, Mail, Users, ArrowRight, Target, Award, Coffee, Clock, Heart } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              <span>Built on Excellence, Driven by Results</span>
            </h1>
            <p className="text-xl mb-8">
              <span>Founded with a vision to transform how businesses approach digital marketing, Vixi has grown into Dallas's most trusted digital agency.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span>Our Story</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p><span>At Vixi, we understand that the digital landscape is constantly evolving. That's why we've built our agency on the foundation of continuous learning and adaptation. Our journey began with a simple mission: to provide businesses with exceptional digital marketing solutions that deliver real, measurable results.</span></p>
              <p><span>Based in the heart of Dallas, we've assembled a team of digital experts who share our passion for excellence and innovation. Each team member brings specialized expertise in their field, from web development to social media management and digital advertising.</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span>Our Core Values</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-secondary-blue mb-4" />
                <CardTitle><span>Excellence</span></CardTitle>
                <CardDescription>
                  <span>We pursue excellence in everything we do, from the smallest detail to comprehensive strategies.</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-secondary-blue mb-4" />
                <CardTitle><span>Innovation</span></CardTitle>
                <CardDescription>
                  <span>We constantly explore new technologies and strategies to keep our clients ahead.</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-secondary-blue mb-4" />
                <CardTitle><span>Dedication</span></CardTitle>
                <CardDescription>
                  <span>We're committed to our clients' success, treating their goals as our own.</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-secondary-blue mb-4" />
                <CardTitle><span>Transparency</span></CardTitle>
                <CardDescription>
                  <span>We believe in clear communication and honest relationships with our clients.</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span>Our Approach</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-secondary-blue mb-6">
                <Coffee className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                <span>1. Discovery</span>
              </h3>
              <p className="text-gray-600">
                <span>We start by understanding your business, goals, and target audience to create tailored solutions.</span>
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-secondary-blue mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                <span>2. Strategy</span>
              </h3>
              <p className="text-gray-600">
                <span>Our team develops comprehensive strategies aligned with your objectives and industry best practices.</span>
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-secondary-blue mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                <span>3. Execution</span>
              </h3>
              <p className="text-gray-600">
                <span>We implement solutions with precision, constantly monitoring and optimizing for best results.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span>Ready to Work Together?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            <span>Let's discuss how we can help achieve your digital marketing goals.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild >
              <Link href="/contact">
                <span>Contact Us</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}