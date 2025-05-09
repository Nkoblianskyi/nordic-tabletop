import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-bold mt-6 mb-4">Side ikke funnet</h2>
      <p className="text-xl text-muted-foreground text-center max-w-md mb-8">
        Beklager, men siden du leter etter eksisterer ikke eller har blitt flyttet.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/">Gå til forsiden</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/spill">Se våre spill</Link>
        </Button>
      </div>
    </div>
  )
}
