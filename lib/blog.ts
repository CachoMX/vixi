import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import type { BlogPost } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      const processedContent = await remark()
        .use(html)
        .process(content)
      
      return {
        slug,
        content: processedContent.toString(),
        title: data.title,
        description: data.description,
        date: new Date(data.date).toISOString(),
        formattedDate: new Date(data.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        category: data.category,
        author: data.author,
        image: data.image || '/default-blog-image.jpg'
      } as BlogPost
    })
  )

  return allPostsData.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
    
    return {
      slug,
      content: processedContent.toString(),
      title: data.title,
      description: data.description,
      date: new Date(data.date).toISOString(),
      formattedDate: new Date(data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      category: data.category,
      author: data.author,
      image: data.image || '/default-blog-image.jpg'
    } as BlogPost
  } catch {
    return null
  }
}

// Add a new function specifically for category filtering if needed
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts()
  return posts.filter(post => post.category === category)
}