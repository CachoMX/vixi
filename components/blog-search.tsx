'use client'

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { BlogCard } from './blog-card'
import { useDebounce } from '@/hooks/use-debounce'
import type { BlogPost } from '@/types/blog'

export function BlogSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    const searchPosts = async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([])
        return
      }

      setIsLoading(true)
      try {
        const res = await fetch(`/api/blog/search?q=${encodeURIComponent(searchQuery)}`)
        if (!res.ok) throw new Error('Search failed')
        
        const data = await res.json()
        setResults(data.posts || [])
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }

    searchPosts(debouncedQuery)
  }, [debouncedQuery])

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
        />
      </div>

      {isLoading && (
        <div className="mt-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue mx-auto"></div>
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-8 grid gap-6">
          {results.map((post) => (
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
      )}
      
      {query && !isLoading && results.length === 0 && (
        <div className="mt-8 text-center text-gray-600">
          No posts found matching your search criteria.
        </div>
      )}
    </div>
  )
}