// app/blog/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, User, ChevronRight, Search, ArrowRight } from 'lucide-react'
import { AnimatedSection } from "@/components/animated-section"
import { getAllPosts } from "@/lib/markdown"
import Link from 'next/link'

const categories = [
  "Digital Marketing",
  "Social Media",
  "Web Development",
  "Branding",
  "SEO",
  "Content Strategy",
  "E-commerce",
  "Analytics"
];

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-secondary-blue text-white pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Digital Marketing Insights
            </h1>
            <p className="text-xl mb-8 animate-fade-in stagger-1">
              Expert perspectives, industry trends, and actionable strategies for digital success.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl animate-fade-in stagger-2">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-secondary-blue"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Blog Posts */}
              <div className="lg:col-span-2 space-y-8">
                {posts.map((post) => (
                  <Card key={post.slug} className="hover-scale transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-sm text-secondary-blue font-medium">
                          {post.category}
                        </span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <CardTitle className="text-2xl mb-2 hover:text-secondary-blue transition-colors">
                          {post.title}
                        </CardTitle>
                      </Link>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <CalendarDays className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Categories */}
                <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <Link 
                          key={index}
                          href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                          className="flex items-center justify-between py-2 text-gray-600 hover:text-secondary-blue transition-colors"
                        >
                          <span>{category}</span>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="bg-gray-50 hover-scale transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>Subscribe to Our Newsletter</CardTitle>
                    <CardDescription>
                      Get the latest digital marketing insights delivered to your inbox.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-blue"
                      />
                      <Button className="w-full bg-primary-blue hover:bg-primary-blue/90 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}