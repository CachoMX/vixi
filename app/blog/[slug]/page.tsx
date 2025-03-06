// app/blog/[slug]/page.tsx
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, User, ArrowLeft } from 'lucide-react'
import { AnimatedSection } from "@/components/animated-section"
import { getPostBySlug } from "@/lib/markdown"
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ReactNode } from 'react'

interface PageParams {
  slug: string;
}

interface PageProps {
  children?: ReactNode;
  params: PageParams;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(props.params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPost(props: PageProps) {
  const post = await getPostBySlug(props.params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Rest of the component remains the same */}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-secondary-blue text-white pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <Link 
              href="/blog"
              className="inline-flex items-center text-white hover:text-gray-200 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm animate-fade-in stagger-1">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <CalendarDays className="h-5 w-5 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <article className="prose prose-lg max-w-none prose-headings:text-primary-blue prose-a:text-secondary-blue">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Author Bio */}
              <div className="mt-16 border-t pt-8">
                <h2 className="text-2xl font-bold mb-4">About the Author</h2>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200"></div>
                  <div>
                    <h3 className="font-semibold text-lg">{post.author}</h3>
                    <p className="text-gray-600">Digital Marketing Expert at Vixi</p>
                    <p className="mt-2">Sarah has over a decade of experience in digital marketing and helps businesses transform their online presence.</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Implement These Strategies?</h2>
                <p className="text-gray-600 mb-6">Let our team of experts help you develop a customized digital marketing plan.</p>
                <Button 
                  className="bg-primary-blue hover:bg-primary-blue/90 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  asChild
                >
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}