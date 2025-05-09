"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import type { Game } from "../types"

interface AnimatedGameCardProps {
  game: Game
  index: number
}

export default function AnimatedGameCard({ game, index }: AnimatedGameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg h-full">
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
            <Button asChild className="w-full rounded-md font-light tracking-wide">
              <Link href={`/spill/${game.slug}`}>Se Detaljer</Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
