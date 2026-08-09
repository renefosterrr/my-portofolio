'use client'

import { MouseEvent, ReactNode, useState } from 'react'
import { cn } from '@/components/utils'

type CardSpotlightProps = {
  children: ReactNode
  className?: string
}

export function CardSpotlight({ children, className }: CardSpotlightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top })
  }

  const spotlight = `radial-gradient(360px circle at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.30), rgba(139, 92, 246, 0.14) 42%, transparent 76%)`
  const particles = `radial-gradient(rgba(56, 189, 248, 0.46) 0.65px, transparent 0.8px), radial-gradient(rgba(139, 92, 246, 0.30) 0.65px, transparent 0.8px)`

  return (
    <div
      className={cn('group relative isolate flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-cyan-400/25 bg-[#080D16] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-[0_22px_60px_rgba(56,189,248,0.14)]', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0.6,
          backgroundImage: particles,
          backgroundSize: '5px 5px, 7px 7px',
          backgroundPosition: '0 0, 3px 3px',
          maskImage: `radial-gradient(360px circle at ${position.x}px ${position.y}px, black 0%, rgba(0,0,0,0.72) 42%, transparent 78%)`,
          WebkitMaskImage: `radial-gradient(360px circle at ${position.x}px ${position.y}px, black 0%, rgba(0,0,0,0.72) 42%, transparent 78%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0, background: spotlight }}
      />
      <div className="relative z-10 flex h-full flex-col justify-between">{children}</div>
    </div>
  )
}
