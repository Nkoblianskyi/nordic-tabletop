"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"

const navigation = [
  { name: "Hjem", href: "/" },
  { name: "Om Oss", href: "/om-oss" },
  { name: "Spill", href: "/spill" },
  { name: "Blogg", href: "/blogg" },
  { name: "FAQ", href: "/faq" },
  { name: "Kontakt", href: "/kontakt" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="nordic-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="NordicTabletop Logo" width={40} height={40} className="h-10 w-10" />
            <span className="hidden font-light tracking-wider text-xl sm:inline-block">NordicTabletop</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-light tracking-wide transition-colors hover:text-primary ${
                pathname === item.href ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden md:flex border-primary text-primary hover:bg-primary/10"
          >
            <Link href="/kontakt">Kontakt Oss</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Åpne meny</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 py-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Image src="/logo.png" alt="NordicTabletop Logo" width={32} height={32} />
                  <span className="font-light tracking-wider">NordicTabletop</span>
                </Link>
                <div className="grid gap-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-sm font-light tracking-wide transition-colors hover:text-primary ${
                        pathname === item.href ? "text-foreground" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
