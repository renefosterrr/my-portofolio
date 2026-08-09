'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { CardSpotlight } from '@/components/ui/card-spotlight'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const isCard = className.includes('aceternity-card')

  return (
    <motion.div
      className={isCard ? "h-full" : className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {isCard ? <CardSpotlight className={className}>{children}</CardSpotlight> : children}
    </motion.div>
  )
}
