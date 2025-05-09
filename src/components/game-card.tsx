import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import type { Game } from "../types"

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[4/3] relative">
        <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="font-light tracking-wide">{game.title}</CardTitle>
          <Badge variant="outline">{game.players} spillere</Badge>
        </div>
        <CardDescription className="font-light">{game.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <div className="flex items-center space-x-1">
            <span className="font-light">{game.difficulty}/5</span>
            <span className="text-muted-foreground font-light">vanskelighetsgrad</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full rounded-md font-light tracking-wide">
          <Link href={`/spill/${game.slug}`}>Se Detaljer</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
