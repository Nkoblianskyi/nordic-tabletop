import type { Metadata } from "next"

import HeroSection from "../components/hero-section"
import AboutSection from "../components/about-section"
import FeaturedGames from "../components/featured-games"
import BlogSection from "../components/blog-section"
import BenefitsSection from "../components/benefits-section"
import TestimonialsSection from "../components/testimonials-section"
import ContactSection from "../components/contact-section"
import { getPopularGames } from "@/lib/data"
import { getRecentPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "NordicTabletop - Tradisjonelle Brettspill i Norge",
  description:
    "Opplev de beste tradisjonelle brettspillene på treplanker. Utforsk vår samling av nordiske brettspill med rik kulturarv.",
  openGraph: {
    title: "NordicTabletop - Tradisjonelle Brettspill i Norge",
    description:
      "Opplev de beste tradisjonelle brettspillene på treplanker. Utforsk vår samling av nordiske brettspill med rik kulturarv.",
    url: "https://nordictabletop.com",
    siteName: "NordicTabletop",
    locale: "no_NO",
    type: "website",
  },
}

export default async function Home() {
  const games = await getPopularGames()
  const posts = await getRecentPosts(3)

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedGames games={games} />
      <BenefitsSection />
      <BlogSection posts={posts} />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
