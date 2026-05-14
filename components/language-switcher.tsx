'use client'

import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        'group relative flex items-center gap-2 px-3 py-2 rounded-full',
        'border border-border/50 bg-card/50 backdrop-blur-sm',
        'text-xs font-medium tracking-[0.1em] uppercase',
        'transition-all duration-300 ease-out',
        'hover:border-accent/50 hover:bg-secondary/50',
        className
      )}
      aria-label={`Switch to ${t.lang.label}`}
    >
      <span className="relative z-10 text-muted-foreground group-hover:text-accent transition-colors duration-300">
        {t.lang.switch}
      </span>
      <svg 
        className="w-3 h-3 text-muted-foreground/60 group-hover:text-accent/60 transition-colors duration-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    </button>
  )
}
