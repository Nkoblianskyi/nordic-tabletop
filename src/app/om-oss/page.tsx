import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Om Oss | NordicTabletop",
  description:
    "Lær mer om NordicTabletop, vår historie, verdier og lidenskap for tradisjonelle brettspill på treplanker.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Om NordicTabletop</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Vår historie, verdier og lidenskap for tradisjonelle brettspill
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src="/wooden-board-game-store.png"
            alt="NordicTabletop butikk"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Vår Historie</h2>
          <div className="space-y-4">
            <p>
              NordicTabletop ble grunnlagt i 2018 av en gruppe venner med en felles lidenskap for tradisjonelle
              brettspill. Vi startet som en liten butikk i Oslo sentrum, med fokus på håndlagde spill av høy kvalitet.
            </p>
            <p>
              Vår visjon var å skape et sted hvor brettspillentusiaster kunne finne unike spill som ikke bare var
              underholdende, men også vakre håndverksprodukter som kunne vare i generasjoner.
            </p>
            <p>
              I løpet av årene har vi vokst til å bli Norges ledende spesialbutikk for tradisjonelle brettspill på
              treplanker, med kunder fra hele landet som verdsetter kvalitet, tradisjon og tidløs underholdning.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Våre Verdier</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Kvalitet</CardTitle>
              <CardDescription>Vi kompromisser aldri på kvalitet</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Hvert spill i vår samling er nøye utvalgt for sin håndverksmessige kvalitet. Vi samarbeider med dyktige
                håndverkere som bruker de beste materialene og tradisjonelle teknikker for å skape spill som er både
                vakre og holdbare.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tradisjon</CardTitle>
              <CardDescription>Vi bevarer spilltradisjoner</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                I en digital tidsalder mener vi det er viktig å bevare og fremme tradisjonelle spillopplevelser. Våre
                spill har ofte røtter som strekker seg hundrevis av år tilbake, og representerer en rik kulturarv som
                fortjener å bli videreført.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fellesskap</CardTitle>
              <CardDescription>Vi bygger et fellesskap av spillere</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Brettspill handler om å bringe mennesker sammen. Vi arrangerer regelmessige spillkvelder og turneringer
                i vår butikk, og jobber aktivt for å bygge et inkluderende fellesskap av brettspillentusiaster på tvers
                av alder og bakgrunn.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Besøk Oss</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-muted rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Kontaktinformasjon</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Storgata 23, 0184 Oslo, Norge</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+47 21 84 26 18</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@nordictabletop.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p>Mandag - Fredag: 10:00 - 18:00</p>
                  <p>Lørdag: 10:00 - 16:00</p>
                  <p>Søndag: Stengt</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/kontakt">Kontakt Oss</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src="/oslo-city-center-map.png"
              alt="Kart til NordicTabletop"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
