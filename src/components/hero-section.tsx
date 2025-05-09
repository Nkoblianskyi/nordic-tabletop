"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import MotionDiv from "./animations/motion-div"
import AnimatedHeading from "./animations/animated-heading"
import AnimatedButton from "./animations/animated-button"

export default function HeroSection() {
  return (
    <section className="relative bg-accent overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/hero-pattern.png" alt="Nordic pattern" fill className="object-cover opacity-10" priority />
      </div>
      <div className="nordic-container relative z-10 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-6">
            <MotionDiv animation="fadeInLeft" duration={0.7}>
              <AnimatedHeading className="text-4xl font-light tracking-wide sm:text-5xl xl:text-6xl">
                Tradisjonelle Brettspill med Nordisk Arv
              </AnimatedHeading>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-xl text-muted-foreground font-light max-w-[600px] mt-4"
              >
                Utforsk vår samling av håndlagde brettspill som bringer sammen familie og venner for uforglemmelige
                spillkvelder og bevarer vår rike nordiske kulturarv.
              </motion.p>
            </MotionDiv>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col gap-4 min-[400px]:flex-row"
            >
              <AnimatedButton asChild size="lg" className="rounded-md font-light tracking-wide">
                <Link href="/spill">Utforsk Spill</Link>
              </AnimatedButton>
              <AnimatedButton asChild variant="outline" size="lg" className="rounded-md font-light tracking-wide">
                <Link href="/om-oss">Lær Mer Om Oss</Link>
              </AnimatedButton>
            </motion.div>
          </div>
          <MotionDiv animation="fadeInRight" duration={0.7} delay={0.3}>
            <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-auto">
              <Image
                src="/family-board-games.png"
                alt="Familie som spiller brettspill"
                width={800}
                height={800}
                className="object-cover w-full h-full rounded-xl"
                priority
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
