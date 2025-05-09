"use client"

import Image from "next/image"
import MotionDiv from "./animations/motion-div"
import AnimatedHeading from "./animations/animated-heading"

export default function AboutSection() {
  return (
    <section className="nordic-section bg-background" id="om-oss">
      <div className="nordic-container">
        <div className="text-center mb-16">
          <MotionDiv animation="fadeInUp">
            <AnimatedHeading className="nordic-heading">Om NordicTabletop</AnimatedHeading>
            <p className="nordic-subheading">Vår historie, verdier og lidenskap for tradisjonelle brettspill</p>
          </MotionDiv>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <MotionDiv animation="fadeInLeft" duration={0.7}>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="/handcrafted-chess.png"
                alt="Håndlagde brettspill"
                width={600}
                height={600}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </MotionDiv>
          <MotionDiv animation="fadeInRight" duration={0.7} delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg font-light">
                NordicTabletop er en spesialbutikk dedikert til tradisjonelle brettspill på treplanker. Vi startet i
                2018 med en lidenskap for håndverk og strategispill.
              </p>
              <p className="text-lg font-light">
                Vårt mål er å bevare og fremme tradisjonelle spillopplevelser i en digital tidsalder. Hvert spill i vår
                samling er nøye utvalgt for kvalitet, spillbarhet og håndverksmessig utførelse.
              </p>
              <p className="text-lg font-light">
                Besøk vår butikk i Oslo sentrum for å se vårt utvalg, eller utforsk våre spill online. Vi tilbyr også
                spillkvelder og turneringer for å bygge et fellesskap av brettspillentusiaster.
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
