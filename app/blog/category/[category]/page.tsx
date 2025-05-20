import { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/blog'
import { BlogCard } from '@/components/blog-card'
import { BlogPost } from '@/types/blog'

type CategoryParams = {
  params: {
    category: string
  }
}

const categoryNames: Record<string, string> = {
  'web-development': 'Web Development',
  'social-media': 'Social Media',
  'digital-advertising': 'Digital Advertising',
  'graphic-design': 'Design & Branding',
  'seo': 'SEO',
  'automation': 'Automation'
}

export async function generateMetadata(
  { params }: CategoryParams
): Promise<Metadata> {
  const { category } = params
  const categoryName = categoryNames[category] || category.replace(/-/g, ' ')

  return {
    title: `${categoryName} Blog Posts | Vixi Agency`,
    description: `Read our expert blog posts about ${categoryName} from Vixi Agency, Dallas's premier digital marketing agency.`
  }
}

export default async function CategoryPage({ params }: CategoryParams) {
  const { category } = params
  const allPosts = await getAllBlogPosts()
  const posts = allPosts.filter(post => post.category === category)
  const categoryName = categoryNames[category] || category.replace(/-/g, ' ')

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {categoryName}
          </h1>
          <p className="text-xl text-gray-600">
            Latest articles and insights about {categoryName.toLowerCase()}
          </p>
        </header>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: BlogPost) => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No posts found in this category.</p>
          </div>
        )}
      </div>
    </main>
  )
}