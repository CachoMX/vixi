export interface BlogPost {
  title: string
  description: string
  date: string
  formattedDate: string
  category: string
  author: string
  image: string
  slug: string
  content: string
}

export interface BlogCategory {
  slug: string
  name: string
  description: string
}