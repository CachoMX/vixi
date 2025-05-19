import { Feed } from 'feed'
import { getAllBlogPosts } from './blog'

export async function generateRssFeed() {
  const posts = await getAllBlogPosts()
  const site_url = 'https://vixi.agency'

  const feed = new Feed({
    title: 'Vixi Agency Blog',
    description: 'Expert insights on digital marketing, web development, and business growth',
    id: site_url,
    link: site_url,
    language: 'en',
    favicon: `${site_url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Vixi Agency`,
    author: {
      name: 'Vixi Agency Team',
      email: 'info@vixi.agency',
      link: site_url
    }
  })

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${site_url}/blog/${post.slug}`,
      link: `${site_url}/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
      category: [{ name: post.category }],
      author: [{ name: post.author }]
    })
  })

  return feed
}