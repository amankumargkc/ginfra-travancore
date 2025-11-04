import Hero from '@/components/sections/Hero'
import Overview from '@/components/sections/Overview'
import CoreCapabilities from '@/components/sections/CoreCapabilities'
import ProductionRoadmap from '@/components/sections/ProductionRoadmap'
import TechnicalSpecs from '@/components/sections/TechnicalSpecs'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Overview />
      <CoreCapabilities />
      <ProductionRoadmap />
      <TechnicalSpecs />
      <Contact />
      <Footer />
    </main>
  )
}
