'use client'

import { cn } from '@/lib/utils'

const socialLinks = [
  { label: 'YouTube', href: '#' },
  { label: 'Spotify', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Newsletter', href: '#' },
]

const quickLinks = [
  { label: 'Protocol', href: '#protocol' },
  { label: 'Essays', href: '#essays' },
  { label: 'Audio', href: '#audio' },
  { label: 'Library', href: '#library' },
]

export function Footer() {
  return (
    <footer className="relative px-6 py-24 md:py-32 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          {/* Brand column */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
              Clarity Hub
            </h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-sm">
              A curated ecosystem for high-agency people seeking clarity in thought, 
              emotion, and action.
            </p>
            
            {/* Newsletter signup */}
            <div className="pt-4">
              <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground block mb-3">
                Join the Clarity Letter
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={cn(
                    'flex-1 px-4 py-3 rounded-lg text-sm',
                    'bg-secondary/50 border border-border/50',
                    'text-foreground placeholder:text-muted-foreground/50',
                    'focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20',
                    'transition-all duration-300'
                  )}
                />
                <button
                  className={cn(
                    'px-5 py-3 rounded-lg text-sm font-medium',
                    'bg-accent text-primary-foreground',
                    'hover:bg-accent/90 transition-colors duration-300'
                  )}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 md:col-start-8">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground block mb-6">
              Explore
            </span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="md:col-span-2">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground block mb-6">
              Connect
            </span>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-foreground/70 hover:text-accent transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/20">
          <p className="text-[11px] text-muted-foreground/60 tracking-wide">
            © {new Date().getFullYear()} Andres Ramirez. All rights reserved.
          </p>
          <p className="text-[11px] text-muted-foreground/40 font-serif italic">
            Clarity through reduction.
          </p>
        </div>
      </div>
    </footer>
  )
}
