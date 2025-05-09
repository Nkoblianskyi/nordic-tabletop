"use client"

import { Users, Brain, Clock, Smartphone, Heart, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import MotionDiv from "./animations/motion-div"
import AnimatedHeading from "./animations/animated-heading"

const benefits = [
  {
    icon: Users,
    title: "Sosial Interaksjon",
    description:
      "Brettspill bringer mennesker sammen og skaper meningsfull ansikt-til-ansikt interaksjon i en digital tidsalder.",
  },
  {
    icon: Brain,
    title: "Kognitiv Utvikling",
    description:
      "Strategispill forbedrer problemløsning, kritisk tenkning og beslutningstaking for alle aldersgrupper.",
  },
  {
    icon: Clock,
    title: "Mindfulness",
    description: "Brettspill hjelper deg å være til stede i øyeblikket og ta en pause fra skjermer og teknologi.",
  },
  {
    icon: Smartphone,
    title: "Digital Detox",
    description: "En velkommen pause fra skjermer som reduserer stress og forbedrer mental velvære.",
  },
  {
    icon: Heart,
    title: "Familietradisjon",
    description: "Skaper varige minner og tradisjoner som kan overføres fra generasjon til generasjon.",
  },
  {
    icon: Lightbulb,
    title: "Kulturell Læring",
    description: "Tradisjonelle spill gir innsikt i historiske tradisjoner og kulturarv fra nordiske land.",
  },
]

export default function BenefitsSection() {
  return (
    <section className="nordic-section bg-accent/30">
      <div className="nordic-container">
        <div className="text-center mb-16">
          <MotionDiv animation="fadeInUp">
            <AnimatedHeading className="nordic-heading">Fordeler med Brettspill</AnimatedHeading>
            <p className="nordic-subheading">Hvorfor tradisjonelle brettspill er verdifulle i vår digitale tidsalder</p>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-background p-8 rounded-xl border border-border"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
              >
                <benefit.icon className="h-10 w-10 text-primary mb-4" />
              </motion.div>
              <h3 className="text-xl font-light tracking-wide mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground font-light">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
