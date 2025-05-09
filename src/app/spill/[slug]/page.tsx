import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllGames, getGameBySlug } from "../../../lib/data"
import { Button } from "../../../components/ui/button"
import { Badge } from "../../../components/ui/badge"
import { Clock, Users, BarChart3 } from "lucide-react"
import SafeText from "../../../components/safe-text"
import { Separator } from "@/components/ui/separator"

interface GamePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = await getGameBySlug(params.slug)

  if (!game) {
    return {
      title: "Spill ikke funnet | NordicTabletop",
    }
  }

  return {
    title: `${game.title} | NordicTabletop`,
    description: game.shortDescription,
    openGraph: {
      title: game.title,
      description: game.shortDescription,
      type: "article",
    },
  }
}

export async function generateStaticParams() {
  const games = await getAllGames()

  return games.map((game) => ({
    slug: game.slug,
  }))
}

export default async function GamePage({ params }: GamePageProps) {
  const game = await getGameBySlug(params.slug)

  if (!game) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" priority />
        </div>

        <div>
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-4xl font-bold">{game.title}</h1>
            <Badge variant="outline" className="text-lg px-3 py-1">
              {game.players} spillere
            </Badge>
          </div>

          <p className="text-lg text-muted-foreground mb-6">{game.shortDescription}</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
              <Users className="h-6 w-6 mb-2" />
              <span className="text-sm text-muted-foreground">Spillere</span>
              <span className="font-medium">{game.players}</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
              <Clock className="h-6 w-6 mb-2" />
              <span className="text-sm text-muted-foreground">Spilletid</span>
              <span className="font-medium">{game.playTime} min</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
              <BarChart3 className="h-6 w-6 mb-2" />
              <span className="text-sm text-muted-foreground">Vanskelighet</span>
              <span className="font-medium">{game.difficulty}/5</span>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Om Spillet</h2>
            <SafeText content={game.description} />
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Materialer</h2>
            <SafeText content={game.materials} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" size="lg" className="w-full" asChild>
              <Link href="/kontakt">Still Spørsmål</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


