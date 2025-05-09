"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function CookieConsent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setOpen(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all")
    setOpen(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Informasjonskapsler (Cookies)</DialogTitle>
          <DialogDescription>
            Vi bruker informasjonskapsler for å forbedre din opplevelse på nettstedet vårt. Dette hjelper oss å forstå
            hvordan du bruker nettstedet og tilby deg en bedre tjeneste.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground mb-2">
            Nødvendige informasjonskapsler er alltid aktivert, da disse er essensielle for at nettstedet skal fungere
            riktig.
          </p>
          <p className="text-sm text-muted-foreground">
            Ved å klikke "Godta alle", samtykker du til vår bruk av informasjonskapsler i henhold til vår{" "}
            <Link href="/cookies" className="underline underline-offset-4 hover:text-primary">
              cookie-policy
            </Link>{" "}
            og{" "}
            <Link href="/personvern" className="underline underline-offset-4 hover:text-primary">
              personvernpolicy
            </Link>
            .
          </p>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={acceptNecessary} className="sm:w-full">
            Kun nødvendige
          </Button>
          <Button onClick={acceptAll} className="sm:w-full">
            Godta alle
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
