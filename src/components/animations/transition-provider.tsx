"use client"

import { type ReactNode, createContext, useContext, useState } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

type TransitionEffect = "fade" | "slide" | "scale" | "flip" | "none"

interface TransitionContextType {
  effect: TransitionEffect
  setEffect: (effect: TransitionEffect) => void
}

const TransitionContext = createContext<TransitionContextType>({
  effect: "fade",
  setEffect: () => {},
})

export const useTransitionEffect = () => useContext(TransitionContext)

interface TransitionProviderProps {
  children: ReactNode
}

export function TransitionProvider({ children }: TransitionProviderProps) {
  const [effect, setEffect] = useState<TransitionEffect>("fade")

  return <TransitionContext.Provider value={{ effect, setEffect }}>{children}</TransitionContext.Provider>
}

interface PageTransitionProps {
  children: ReactNode
}

export default function TransitionLayout({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const { effect } = useTransitionEffect()

  // Різні варіанти анімацій
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      enter: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      hidden: { opacity: 0, x: 100 },
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      enter: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.1 },
    },
    flip: {
      hidden: { opacity: 0, rotateY: 90 },
      enter: { opacity: 1, rotateY: 0 },
      exit: { opacity: 0, rotateY: -90 },
    },
    none: {
      hidden: {},
      enter: {},
      exit: {},
    },
  }

  // Якщо ефект "none", не застосовуємо анімацію
  if (effect === "none") {
    return <>{children}</>
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants[effect]}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ perspective: "1000px" }} // Для 3D-ефектів
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
