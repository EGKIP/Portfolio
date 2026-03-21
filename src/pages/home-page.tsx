import { HeroSection } from '../sections/hero-preview'
import { PortfolioContent } from '../sections/portfolio-content'

export function HomePage() {
  return (
    <main id="top">
      <HeroSection />
      <PortfolioContent />
    </main>
  )
}