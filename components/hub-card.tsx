'use client'

import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface HubCardProps {
  title: string
  category: string
  description?: string
  meta?: string
  icon?: React.ReactNode
  href?: string
  className?: string
  featured?: boolean
}

export function HubCard({
  title,
  category,
  description,
  meta,
  icon,
  href = '#',
  className,
  featured = false,
}: HubCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <a
      ref={cardRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group relative block overflow-hidden rounded-lg transition-all duration-500 ease-out',
        'bg-card border border-border/50',
        'hover:border-accent/30 hover:bg-secondary/50',
        featured && 'md:col-span-2 md:row-span-2',
        className
      )}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${mousePosition.y * -3}deg) rotateY(${mousePosition.x * 3}deg) translateZ(10px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
      }}
    >
      {/* Subtle glow effect on hover */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500',
          'bg-gradient-to-br from-accent/5 via-transparent to-transparent',
          isHovered && 'opacity-100'
        )}
        style={{
          background: isHovered
            ? `radial-gradient(600px circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, oklch(0.58 0.09 70 / 0.08), transparent 40%)`
            : undefined,
        }}
      />

      {/* Content */}
      <div className={cn('relative z-10 flex h-full flex-col justify-between', featured ? 'p-8 md:p-10' : 'p-6 md:p-8')}>
        {/* Top section */}
        <div className="space-y-4">
          {/* Category label */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {category}
            </span>
            {icon && (
              <span className="text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                {icon}
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className={cn(
              'font-serif leading-tight tracking-tight text-foreground transition-colors duration-300',
              'group-hover:text-accent',
              featured ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'
            )}
          >
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p
              className={cn(
                'font-sans text-muted-foreground leading-relaxed transition-colors duration-300',
                featured ? 'text-sm md:text-base' : 'text-xs md:text-sm'
              )}
            >
              {description}
            </p>
          )}
        </div>

        {/* Bottom section - metadata */}
        {meta && (
          <div className="mt-6 pt-4 border-t border-border/30">
            <span className="text-[10px] font-sans uppercase tracking-wider text-muted-foreground/70">
              {meta}
            </span>
          </div>
        )}

        {/* Hover indicator */}
        <div
          className={cn(
            'absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full',
            'bg-secondary/50 transition-all duration-300',
            'group-hover:bg-accent group-hover:scale-110',
            featured && 'bottom-8 right-8 md:bottom-10 md:right-10 h-10 w-10'
          )}
        >
          <svg
            className={cn(
              'h-3 w-3 text-muted-foreground transition-all duration-300',
              'group-hover:text-primary-foreground group-hover:translate-x-0.5',
              featured && 'h-4 w-4'
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      </div>
    </a>
  )
}
