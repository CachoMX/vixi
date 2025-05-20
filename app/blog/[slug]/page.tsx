import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost } from '@/lib/blog'
import { CalendarDays, Tag } from 'lucide-react'
import { BlogPostHeader } from '@/components/blog-post-header'
import Image from 'next/image'

// Define the expected shape of your blog post data
interface Post {
  title: string
  date: string
  formattedDate: string
  category: string
  image: string
  description: string
  content: string
}

// Updated type definition to match Next.js expectations
type PageProps = {
  params: {
    slug: string
  }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function BlogPost({ params }: PageProps) {
  const post: Post | undefined = await getBlogPost(params.slug) // Add type for post

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

// Props for generateMetadata are often the same as page props
interface GenerateMetadataProps {
  params: {
    slug: string
  }
  searchParams?: { [key: string]: string | string[] | undefined }
}

// Add generateMetadata for dynamic metadata
export async function generateMetadata(
  { params }: GenerateMetadataProps // Use the specific props type here
): Promise<Metadata> {
  const post: Post | undefined = await getBlogPost(params.slug) // Add type for post

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.title,
    description: post.description,
    // You can also add Open Graph metadata, etc.
    // openGraph: {
    //   title: post.title,
    //   description: post.description,
    //   images: [{ url: post.image }],
    // },
  }
}