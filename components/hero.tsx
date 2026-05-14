'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { LiveIndicator } from './live-indicator'

export function Hero() {
  const [isEntering, setIsEntering] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
      
      {/* Subtle radial gradient accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"
        style={{
          background: 'radial-gradient(circle, oklch(0.58 0.09 70 / 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Name / Brand */}
        <h1 
          className="font-serif text-lg md:text-xl tracking-[0.3em] text-muted-foreground uppercase mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Andres Ramirez
        </h1>

        {/* Main headline */}
        <h2 
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-foreground mb-8 opacity-0 animate-fade-in text-balance"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          Clarity Systems for <br className="hidden md:block" />
          <span className="text-accent">High-Agency</span> People
        </h2>

        {/* Subtitle */}
        <p 
          className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          Protocols, essays, and systems for cultivating clarity in a noisy world.
        </p>

        {/* Enter button */}
        <button
          onClick={() => {
            setIsEntering(true)
            setTimeout(() => {
              document.getElementById('hub')?.scrollIntoView({ behavior: 'smooth' })
            }, 300)
          }}
          className={cn(
            'group relative px-8 py-4 rounded-full overflow-hidden',
            'border border-border/50 bg-card/50 backdrop-blur-sm',
            'text-sm font-medium tracking-[0.15em] uppercase',
            'transition-all duration-500 ease-out',
            'hover:border-accent/50 hover:bg-secondary/50',
            'opacity-0 animate-fade-in',
            isEntering && 'scale-95 opacity-50'
          )}
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          {/* Hover glow */}
          <span className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <span className="relative z-10 flex items-center gap-3">
            <span className="text-foreground group-hover:text-accent transition-colors duration-300">
              Enter the Hub
            </span>
            <svg 
              className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-y-0.5 transition-all duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </span>
        </button>
      </div>

      {/* Live indicators at bottom */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col md:flex-row items-center gap-2 md:gap-6 opacity-0 animate-fade-in"
        style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
      >
        <LiveIndicator 
          label="Latest Essay" 
          value="Emotional Arbitrage" 
          href="#essays"
          isNew 
        />
        <LiveIndicator 
          label="New Podcast" 
          value="Cognitive Liquidity" 
          href="#audio"
        />
        <LiveIndicator 
          label="Protocol" 
          value="Self Love Club" 
          href="#protocol"
          isNew
        />
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in hidden md:block"
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-border to-transparent animate-pulse-slow" />
      </div>
    </section>
  )
}
