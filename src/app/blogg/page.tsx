import type { Metadata } from "next"

import BlogPreview from "../../components/blog-preview"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blogg | NordicTabletop",
  description: "Les våre siste artikler om brettspill, strategier, turneringer og spillkvelder.",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blogg</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Les våre siste artikler om brettspill, strategier, turneringer og spillkvelder
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPreview key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
