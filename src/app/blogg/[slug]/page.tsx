import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "../../../components/ui/button"
import { ArrowLeft } from "lucide-react"
import SafeText from "../../../components/safe-text"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { Separator } from "@/components/ui/separator"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Artikkel ikke funnet | NordicTabletop",
    }
  }

  return {
    title: `${post.title} | NordicTabletop Blogg`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8 pl-0">
        <Link href="/blogg">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tilbake til alle artikler
        </Link>
      </Button>

      <article>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>

          <div className="prose prose-lg max-w-none">
            <SafeText content={post.content} className="text-lg" />
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Likte du denne artikkelen?</h2>
            <p className="text-center text-muted-foreground mb-6">
              Utforsk vårt utvalg av brettspill eller kontakt oss for mer informasjon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/spill">Se Våre Spill</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/kontakt">Kontakt Oss</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
