import { FlowFieldBackground } from '../components/ui/flow-field-background'
import { HeroSection } from '../sections/hero-preview'
import { PortfolioContent } from '../sections/portfolio-content'

export function HomePage() {
  return (
    <main id="top" className="relative isolate min-h-screen overflow-hidden text-white">
      <FlowFieldBackground />
      <HeroSection />
      <PortfolioContent />
    </main>
  )
}