"use client"

import { motion } from "framer-motion"
import ContactForm from "./contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import MotionDiv from "./animations/motion-div"
import AnimatedHeading from "./animations/animated-heading"

export default function ContactSection() {
  return (
    <section className="nordic-section bg-accent/30">
      <div className="nordic-container">
        <div className="text-center mb-16">
          <MotionDiv animation="fadeInUp">
            <AnimatedHeading className="nordic-heading">Kontakt Oss</AnimatedHeading>
            <p className="nordic-subheading">Har du spørsmål om våre brettspill? Vi er her for å hjelpe!</p>
          </MotionDiv>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="font-light tracking-wide text-2xl">Send oss en melding</CardTitle>
                <CardDescription>Fyll ut skjemaet under, så svarer vi deg så snart som mulig.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
