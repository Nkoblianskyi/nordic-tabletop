import type { Metadata } from "next"
import { getAllGames } from "../../lib/data"
import GameCard from "../../components/game-card"

export const metadata: Metadata = {
  title: "Brettspill | NordicTabletop",
  description:
    "Utforsk vårt utvalg av tradisjonelle brettspill på treplanker. Finn det perfekte spillet for din neste spillkveld.",
}

export default async function GamesPage() {
  const games = await getAllGames()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Våre Brettspill</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Utforsk vårt utvalg av tradisjonelle brettspill på treplanker, håndlaget med fokus på kvalitet og
          spillopplevelse
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}
