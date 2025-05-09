import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import Header from "../components/header"
import Footer from "../components/footer"
import CookieConsent from "../components/cookie-consent"
import { TransitionProvider } from "../components/animations/transition-provider"
import TransitionLayout from "../components/animations/transition-provider"
import NavigationProgressWrapper from "@/components/animations/NavigationProgressWrapper"


const inter = Quicksand({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NordicTabletop - Tradisjonelle Brettspill i Norge",
  description:
    "Opplev de beste tradisjonelle brettspillene på treplanker. Besøk vår butikk i Oslo eller utforsk vår samling online.",
  keywords: [
    "brettspill",
    "trebrettspill",
    "norske brettspill",
    "tradisjonelle spill",
    "familiespill",
    "strategispill",
  ],
  authors: [{ name: "NordicTabletop" }],
  creator: "NordicTabletop",
  publisher: "NordicTabletop",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={inter.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TransitionProvider>
            <NavigationProgressWrapper />
            <Header />
            <TransitionLayout>
              <main>{children}</main>
            </TransitionLayout>
            <Footer />
            <CookieConsent />
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
