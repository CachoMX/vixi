import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost } from '@/lib/blog'
import { CalendarDays, Tag } from 'lucide-react'
import { BlogPostHeader } from '@/components/blog-post-header'
import Image from 'next/image'

interface Post {
  title: string
  date: string
  formattedDate: string
  category: string
  image: string
  description: string
  content: string
}

// Import the exact type from Next.js
import type { PageProps as NextPageProps } from '@/.next/types/app/blog/[slug]/page'

// Use the imported type
export default async function BlogPost(props: NextPageProps) {
  const { slug } = await props.params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Add the header component */}
      <BlogPostHeader title={post.title} />

      <article className="max-w-4xl mx-auto px-6 py-20">
        {/* Post metadata */}
        <div className="flex items-center gap-6 text-gray-600 mb-12">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <time dateTime={post.date}>{post.formattedDate}</time>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            <span className="capitalize">{post.category.replace('-', ' ')}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[400px] mb-12 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Post Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  )
}

export async function generateMetadata(
  props: NextPageProps
): Promise<Metadata> {
  const { slug } = await props.params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.title,
    description: post.description
  }
}