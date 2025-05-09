"use client"

import type React from "react"

import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

interface MotionDivProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  animation?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "none"
}

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  none: {
    hidden: {},
    visible: {},
  },
}

export default function MotionDiv({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  animation = "fadeIn",
}: MotionDivProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  const selectedAnimation = animations[animation]
  const transition = { duration, delay, ease: "easeOut" }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedAnimation}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}
