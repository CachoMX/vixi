import Link from 'next/link'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface BlogCardProps {
  title: string
  description: string
  category: string
  slug: string
  date: string
  imageUrl: string
}

export function BlogCard({ title, description, category, slug, date, imageUrl }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="text-sm text-primary-blue mb-2">{category}</div>
        <CardTitle className="mb-2">
          <Link href={`/blog/${slug}`} className="hover:text-primary-blue">
            {title}
          </Link>
        </CardTitle>
        <CardDescription>
          {description}
          <span className="block mt-4 text-sm text-gray-500">{date}</span>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}