'use client'

import { cn } from '@/lib/utils'

interface LiveIndicatorProps {
  label: string
  value: string
  href?: string
  isNew?: boolean
}

export function LiveIndicator({ label, value, href = '#', isNew = false }: LiveIndicatorProps) {
  return (
    <a
      href={href}
      className={cn(
        'group flex items-center gap-3 py-2 px-3 rounded-md',
        'transition-all duration-300 ease-out',
        'hover:bg-secondary/50'
      )}
    >
      {/* Pulsing dot for new items */}
      {isNew && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
      )}
      
      {/* Label */}
      <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
      
      {/* Separator */}
      <span className="text-border">—</span>
      
      {/* Value */}
      <span className="font-serif text-sm text-foreground/80 group-hover:text-accent transition-colors duration-300">
        {value}
      </span>
    </a>
  )
}
