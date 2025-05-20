import { NextResponse } from 'next/server'
import { getAllBlogPosts } from '@/lib/blog'

// Add interface for blog post structure
interface BlogPost {
  title: string
  description: string
  date: string
  formattedDate: string
  slug: string
  content: string
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.toLowerCase() || ''

  const posts = await getAllBlogPosts() as BlogPost[]

  const searchResults = posts.filter(post => 
    post.title.toLowerCase().includes(query) ||
    post.description.toLowerCase().includes(query) ||
    post.content.toLowerCase().includes(query)
  )

  return NextResponse.json(searchResults)
}