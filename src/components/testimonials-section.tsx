"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import MotionDiv from "./animations/motion-div"
import AnimatedHeading from "./animations/animated-heading"

const testimonials = [
  {
    quote:
      "Disse brettspillene har blitt en sentral del av våre familiesammenkomster. Kvaliteten på håndverket er eksepsjonell, og spillene har en tidløs appell som både barn og voksne setter pris på.",
    author: "Morten Hansen",
    role: "Familiefar",
    avatar: "/diverse-group-avatars.png",
  },
  {
    quote:
      "Som historielærer verdsetter jeg den kulturelle betydningen av disse tradisjonelle spillene. De er ikke bare underholdende, men også utdannende, og gir elevene mine et vindu inn i nordisk historie.",
    author: "Ingrid Solberg",
    role: "Historielærer",
    avatar: "/diverse-group-avatars.png",
  },
  {
    quote:
      "Jeg har samlet på brettspill i over 20 år, og kvaliteten på NordicTabletop sine håndlagde spill er blant de beste jeg har sett. Hver detalj er nøye utformet, og spillopplevelsen er uovertruffen.",
    author: "Anders Johansen",
    role: "Brettspillentusiast",
    avatar: "/diverse-group-avatars.png",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="nordic-section bg-background">
      <div className="nordic-container">
        <div className="text-center mb-16">
          <MotionDiv animation="fadeInUp">
            <AnimatedHeading className="nordic-heading">Hva Folk Sier</AnimatedHeading>
            <p className="nordic-subheading">Tilbakemeldinger fra våre kunder og spillentusiaster</p>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="bg-accent/20 border-none h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: "spring" }}
                      className="relative w-16 h-16 rounded-full overflow-hidden mb-4"
                    >
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="italic text-muted-foreground mb-6 font-light"
                    >
                      "{testimonial.quote}"
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
