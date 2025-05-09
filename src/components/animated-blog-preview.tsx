"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import type { Post } from "../types"

interface AnimatedBlogPreviewProps {
  post: Post
  index: number
}

export default function AnimatedBlogPreview({ post, index }: AnimatedBlogPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg h-full">
        <div className="aspect-[16/9] relative">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
        <CardHeader>
          <div className="text-sm text-muted-foreground font-light">{post.date}</div>
          <CardTitle className="line-clamp-2 font-light tracking-wide">{post.title}</CardTitle>
          <CardDescription className="line-clamp-3 font-light">{post.excerpt}</CardDescription>
        </CardHeader>
        <CardFooter>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
            <Button asChild variant="outline" className="w-full rounded-md font-light tracking-wide">
              <Link href={`/blogg/${post.slug}`}>Les Mer</Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
