import { cn } from "@/lib/utils"

interface BlogPostHeaderProps {
  title: string
  className?: string
}

export function BlogPostHeader({ title, className }: BlogPostHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">     
        <div className="container mx-auto px-6">
            <div className="max-w-3xl">
                <h1 className="text-5xl font-bold mb-6">{title}</h1>            
            </div>
        </div>
    </section>
  )
}



