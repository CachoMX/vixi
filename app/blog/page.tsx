import { Metadata } from "next"
import { BlogCard } from "@/components/blog-card"
import { getAllBlogPosts } from "@/lib/blog"
import { BLOG_CATEGORIES } from "@/config/blog"
import Link from "next/link"
import { BlogSearch } from '@/components/blog-search'
import type { BlogPost } from "@/types/blog"

export const metadata: Metadata = {
  title: "Digital Marketing Blog | Vixi Agency",
  description: "Expert insights on web development, social media marketing, SEO, and digital advertising strategies for business growth.",
}

// Define blog categories based on services
const categories = [
  { slug: 'web-development', name: 'Web Development', icon: 'Code' },
  { slug: 'social-media', name: 'Social Media', icon: 'Share2' },
  { slug: 'digital-advertising', name: 'Digital Advertising', icon: 'Target' },
  { slug: 'graphic-design', name: 'Design & Branding', icon: 'Palette' },
  { slug: 'seo', name: 'SEO', icon: 'Search' },
  { slug: 'automation', name: 'Automation', icon: 'Zap' }
]

export default async function BlogPage() {
  const posts = await getAllBlogPosts()
  const featuredPosts = posts.slice(0, 3)
  const latestPosts = posts.slice(3, 9)

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-secondary-blue text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Digital Marketing Insights & Resources
            </h1>
            <p className="text-xl">
              Expert guides, industry insights, and actionable tips to grow your business online.
            </p>
          </div>
        </div>
      </section>

      {/* Add Search Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <BlogSearch />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <span className="text-lg font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post: BlogPost) => (
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
      </section>

      {/* Latest Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Latest Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post: BlogPost) => (
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
      </section>
    </main>
  )
}