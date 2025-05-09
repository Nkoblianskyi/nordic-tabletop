import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-accent py-16">
      <div className="nordic-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image src="/logo.png" alt="NordicTabletop Logo" width={40} height={40} />
              <span className="font-light tracking-wider text-xl">NordicTabletop</span>
            </Link>
            <p className="text-muted-foreground mb-6 font-light">
              Din destinasjon for kvalitets brettspill på treplanker i Norge.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm">Storgata 23, 0184 Oslo, Norge</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm">+47 21 84 26 18</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">info@nordictabletop.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-light text-lg mb-6 tracking-wide">Navigasjon</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Hjem
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-muted-foreground hover:text-primary transition-colors">
                  Om Oss
                </Link>
              </li>
              <li>
                <Link href="/spill" className="text-muted-foreground hover:text-primary transition-colors">
                  Spill
                </Link>
              </li>
              <li>
                <Link href="/blogg" className="text-muted-foreground hover:text-primary transition-colors">
                  Blogg
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-light text-lg mb-6 tracking-wide">Juridisk</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/personvern" className="text-muted-foreground hover:text-primary transition-colors">
                  Personvernpolicy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-light text-lg mb-6 tracking-wide">Åpningstider</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Mandag - Fredag</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Lørdag</span>
                <span>10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Søndag</span>
                <span>Stengt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NordicTabletop. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  )
}
