import { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/blog'
import { BlogCard } from '@/components/blog-card'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: {
    category: string
  }
}

const categoryNames = {
  'web-development': 'Web Development',
  'social-media': 'Social Media',
  'digital-advertising': 'Digital Advertising',
  'graphic-design': 'Design & Branding',
  'seo': 'SEO',
  'automation': 'Automation'
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categoryNames[params.category as keyof typeof categoryNames]
  
  if (!category) {
    return {
      title: 'Category Not Found'
    }
  }

  return {
    title: `${category} Articles | Vixi Agency Blog`,
    description: `Expert insights and guides about ${category.toLowerCase()} from Vixi Agency.`
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const posts = await getAllBlogPosts()
  const categoryPosts = posts.filter(post => post.category === params.category)

  if (!categoryNames[params.category as keyof typeof categoryNames]) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {categoryNames[params.category as keyof typeof categoryNames]}
          </h1>
          <p className="text-xl text-gray-600">
            Latest articles and insights about {params.category.replace('-', ' ')}
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryPosts.map((post) => (
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