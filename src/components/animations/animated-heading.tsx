"use client"

import type React from "react"

import { motion } from "framer-motion"

interface AnimatedHeadingProps {
  children: React.ReactNode
  className?: string
  delay?: number
  staggerChildren?: number
}

export default function AnimatedHeading({
  children,
  className,
  delay = 0,
  staggerChildren = 0.03,
}: AnimatedHeadingProps) {
  const text = children?.toString() || ""

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren, delayChildren: delay },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.h2 className={className} variants={container} initial="hidden" animate="visible">
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={child} style={{ display: "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  )
}
