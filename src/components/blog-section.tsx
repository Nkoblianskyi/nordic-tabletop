"use client"

import Link from "next/link"
import MotionDiv from "./animations/motion-div"
import AnimatedHeading from "./animations/animated-heading"
import AnimatedButton from "./animations/animated-button"
import AnimatedBlogPreview from "./animated-blog-preview"
import type { Post } from "../types"

interface BlogSectionProps {
  posts: Post[]
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className="nordic-section bg-background">
      <div className="nordic-container">
        <div className="text-center mb-16">
          <MotionDiv animation="fadeInUp">
            <AnimatedHeading className="nordic-heading">Siste fra Bloggen</AnimatedHeading>
            <p className="nordic-subheading">Les våre siste artikler om brettspill, strategier og spillkvelder</p>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <AnimatedBlogPreview key={post.id} post={post} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <MotionDiv animation="fadeInUp" delay={0.6}>
            <AnimatedButton asChild variant="outline" size="lg" className="rounded-md font-light tracking-wide">
              <Link href="/blogg">Les flere artikler</Link>
            </AnimatedButton>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
