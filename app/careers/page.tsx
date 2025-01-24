// app/careers/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Mail, Users, Brain, Zap, Star, Target, HeartHandshake, Send } from 'lucide-react'

export default function Careers() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              <span>Join Our Team of Digital Experts</span>
            </h1>
            <p className="text-xl mb-8">
              <span>Help shape the future of digital marketing while growing your career with Dallas's leading digital agency.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span>Why Work at Vixi</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Growth & Learning",
                description: "Continuous learning opportunities and professional development"
              },
              {
                icon: Users,
                title: "Amazing Team",
                description: "Work with talented professionals in a collaborative environment"
              },
              {
                icon: HeartHandshake,
                title: "Great Benefits",
                description: "Competitive salary, health insurance, and flexible PTO"
              },
              {
                icon: Star,
                title: "Innovation",
                description: "Work with cutting-edge technologies and strategies"
              }
            ].map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <benefit.icon className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle><span>{benefit.title}</span></CardTitle>
                  <CardDescription>
                    <span>{benefit.description}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span>Open Positions</span>
          </h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Senior Digital Marketing Strategist",
                type: "Full-time",
                location: "Dallas, TX (Hybrid)",
                description: "Lead the development and execution of comprehensive digital marketing strategies for our clients."
              },
              {
                title: "Web Developer",
                type: "Full-time",
                location: "Dallas, TX (Remote Optional)",
                description: "Create responsive, high-performance websites and web applications using modern technologies."
              },
              {
                title: "Social Media Manager",
                type: "Full-time",
                location: "Dallas, TX (Hybrid)",
                description: "Manage social media presence and create engaging content for multiple client accounts."
              },
              {
                title: "Paid Media Specialist",
                type: "Full-time",
                location: "Dallas, TX (Hybrid)",
                description: "Manage and optimize paid advertising campaigns across multiple platforms."
              }
            ].map((position, index) => (
              <Card key={index} className="hover:border-blue-900 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="mb-2">
                        <span>{position.title}</span>
                      </CardTitle>
                      <CardDescription>
                        <span className="flex gap-4">
                          <span>{position.type}</span>
                          <span>•</span>
                          <span>{position.location}</span>
                        </span>
                      </CardDescription>
                    </div>
                    <Button className="bg-blue-900">
                      <span>Apply Now</span>
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    <span>{position.description}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span>Our Culture</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              <span>At Vixi, we believe in fostering a culture of innovation, collaboration, and continuous growth. Our team members are passionate about digital marketing and dedicated to delivering exceptional results for our clients.</span>
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation First",
                  description: "We embrace new technologies and approaches"
                },
                {
                  title: "Work-Life Balance",
                  description: "Flexible schedules and remote work options"
                },
                {
                  title: "Team Success",
                  description: "Collaborative environment focused on growth"
                }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-bold text-xl mb-2">
                    <span>{value.title}</span>
                  </h3>
                  <p className="text-gray-600">
                    <span>{value.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span>Application Process</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Apply",
                  description: "Submit your application and resume"
                },
                {
                  step: "2",
                  title: "Review",
                  description: "Initial application review"
                },
                {
                  step: "3",
                  title: "Interview",
                  description: "Meet with our team"
                },
                {
                  step: "4",
                  title: "Welcome",
                  description: "Join the Vixi team"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    <span>{step.step}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">
                    <span>{step.title}</span>
                  </h3>
                  <p className="text-gray-600">
                    <span>{step.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span>Ready to Join Our Team?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            <span>Take the first step towards an exciting career in digital marketing.</span>
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <Mail className="mr-2 h-5 w-5" />
            <a href="mailto:info@vixi.agency">
              <span>Send Your Application</span>
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}