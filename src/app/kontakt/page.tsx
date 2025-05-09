import type { Metadata } from "next"
import ContactForm from "../../components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt Oss | NordicTabletop",
  description: "Ta kontakt med NordicTabletop for spørsmål om våre brettspill eller andre henvendelser.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Kontakt Oss</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Har du spørsmål om våre brettspill? Ta kontakt med oss!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send oss en melding</CardTitle>
              <CardDescription>Fyll ut skjemaet under, så svarer vi deg så snart som mulig.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Kontaktinformasjon</CardTitle>
              <CardDescription>Du kan også nå oss via følgende kanaler:</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Åpningstider</CardTitle>
              <CardDescription>Besøk vår butikk i Oslo sentrum:</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>Mandag - Fredag</span>
                <span>10:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Lørdag</span>
                <span>10:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Søndag</span>
                <span>Stengt</span>
              </div>
            </CardContent>
          </Card>

          <div className="relative aspect-video overflow-hidden rounded-xl">
            <iframe
              src="about:blank"
              title="NordicTabletop lokasjon"
              className="w-full h-full border-0"
              aria-label="Kart som viser NordicTabletop sin lokasjon i Oslo sentrum"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
