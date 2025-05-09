import Link from "next/link"
import Image from "next/image"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import type { Post } from "../types"

interface BlogPreviewProps {
  post: Post
}

export default function BlogPreview({ post }: BlogPreviewProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[16/9] relative">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2 font-light tracking-wide">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3 font-light">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="outline" className="w-full rounded-md font-light tracking-wide">
          <Link href={`/blogg/${post.slug}`}>Les Mer</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
