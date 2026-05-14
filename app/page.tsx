import { Hero } from '@/components/hero'
import { ContentGrid } from '@/components/content-grid'
import { FloatingNav } from '@/components/floating-nav'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero section - extremely minimal, spacious */}
      <Hero />
      
      {/* Content grid - modular premium grid system */}
      <ContentGrid />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating navigation - appears on scroll */}
      <FloatingNav />
    </main>
  )
}
