'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Protocol', href: '#protocol' },
  { label: 'Essays', href: '#essays' },
  { label: 'Audio', href: '#audio' },
  { label: 'Library', href: '#library' },
]

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed bottom-6 left-1/2 z-50 -translate-x-1/2',
        'flex items-center gap-1 px-2 py-2 rounded-full',
        'bg-card/80 backdrop-blur-xl border border-border/50',
        'shadow-2xl shadow-black/20',
        'transition-all duration-500 ease-out',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
      )}
    >
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={cn(
            'px-4 py-2 rounded-full text-xs font-medium tracking-wide',
            'transition-all duration-300 ease-out',
            'text-muted-foreground hover:text-foreground',
            'hover:bg-secondary/80',
            activeSection === item.href && 'bg-accent text-primary-foreground'
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
