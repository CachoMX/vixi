import { NextResponse } from 'next/server'
import { getAllBlogPosts } from '@/lib/blog'
import type { BlogPost } from '@/types/blog'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.toLowerCase() || ''

  // If the query is empty, return an empty array
  if (!query) {
    return NextResponse.json({ posts: [] })
  }

  try {
    const posts = await getAllBlogPosts()

    // Filter posts based on the search query
    const searchResults = posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query)
    )

    return NextResponse.json({ posts: searchResults })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({ error: 'Failed to search posts' }, { status: 500 })
  }
}