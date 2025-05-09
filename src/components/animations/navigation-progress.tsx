"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function NavigationProgress() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isNavigating, setIsNavigating] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Запускаємо анімацію при зміні шляху або параметрів пошуку
    setIsNavigating(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsNavigating(false)
          }, 200)
          return 100
        }
        return prev + 5
      })
    }, 10)

    return () => {
      clearInterval(interval)
    }
  }, [pathname, searchParams])

  if (!isNavigating) {
    return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
      style={{ width: `${progress}%` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    />
  )
}
