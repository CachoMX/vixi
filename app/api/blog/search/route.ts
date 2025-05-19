import { getAllBlogPosts } from '@/lib/blog'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.toLowerCase()
  
  if (!query) {
    return NextResponse.json({ posts: [] })
  }

  const posts = await getAllBlogPosts()
  
  const searchResults = posts.filter(post => 
    post.title.toLowerCase().includes(query) ||
    post.description.toLowerCase().includes(query) ||
    post.content.toLowerCase().includes(query)
  )

  return NextResponse.json({ 
    posts: searchResults.map(post => ({
      title: post.title,
      description: post.description,
      slug: post.slug,
      category: post.category,
      date: post.formattedDate,
      image: post.image
    }))
  })
}