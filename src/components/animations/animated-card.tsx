"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, type CardProps } from "../ui/card"

interface AnimatedCardProps extends CardProps {
  children: React.ReactNode
  delay?: number
}

export default function AnimatedCard({ children, delay = 0, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card {...props}>{children}</Card>
    </motion.div>
  )
}
