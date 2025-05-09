"use client"

import Link from "next/link"
import MotionDiv from "./animations/motion-div"
import AnimatedHeading from "./animations/animated-heading"
import AnimatedButton from "./animations/animated-button"
import AnimatedGameCard from "./animated-game-card"
import type { Game } from "../types"

interface FeaturedGamesProps {
  games: Game[]
}

export default function FeaturedGames({ games }: FeaturedGamesProps) {
  return (
    <section className="nordic-section bg-accent/30">
      <div className="nordic-container">
        <div className="text-center mb-16">
          <MotionDiv animation="fadeInUp">
            <AnimatedHeading className="nordic-heading">Våre Brettspill</AnimatedHeading>
            <p className="nordic-subheading">
              Utforsk våre mest populære tradisjonelle brettspill laget av høykvalitets trematerialer
            </p>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.slice(0, 3).map((game, index) => (
            <AnimatedGameCard key={game.id} game={game} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <MotionDiv animation="fadeInUp" delay={0.6}>
            <AnimatedButton asChild size="lg" className="rounded-md font-light tracking-wide">
              <Link href="/spill">Se alle spill</Link>
            </AnimatedButton>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
