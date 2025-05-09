"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button, type ButtonProps } from "../ui/button"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
}

export default function AnimatedButton({ children, ...props }: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button {...props}>{children}</Button>
    </motion.div>
  )
}
