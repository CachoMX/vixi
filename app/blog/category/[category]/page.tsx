import { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/blog'
import { BlogCard } from '@/components/blog-card'

// Import the exact type from Next.js
import type { PageProps as NextPageProps } from '@/.next/types/app/blog/category/[category]/page'

const categoryNames = {
  'web-development': 'Web Development',
  'social-media': 'Social Media',
  'digital-advertising': 'Digital Advertising',
  'graphic-design': 'Design & Branding',
  'seo': 'SEO',
  'automation': 'Automation'
}

export async function generateMetadata(
  props: NextPageProps
): Promise<Metadata> {
  const { category } = await props.params

  return {
    title: `${category.replace('-', ' ')} Blog Posts | Vixi Agency`,
    description: `Read our blog posts about ${category.replace('-', ' ')}`
  }
}

export default async function CategoryPage(props: NextPageProps) {
  const { category } = await props.params
  const posts = await getAllBlogPosts(category)

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {categoryNames[category as keyof typeof categoryNames]}
          </h1>
          <p className="text-xl text-gray-600">
            Latest articles and insights about {category.replace('-', ' ')}
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              category={post.category}
              slug={post.slug}
              date={post.formattedDate}
              imageUrl={post.image}
            />
          ))}
        </div>
      </div>
    </main>
  )
}