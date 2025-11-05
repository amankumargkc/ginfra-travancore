import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import CoreValues from '@/components/sections/CoreValues'
import Services from '@/components/sections/Services'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Statistics from '@/components/sections/Statistics'
import Technologies from '@/components/sections/Technologies'
import Certifications from '@/components/sections/Certifications'
import AboutCTA from '@/components/sections/AboutCTA'
import CallToAction from '@/components/sections/CallToAction'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Precision Defense & Aerospace Manufacturing | GInfra Travancore Pvt. Ltd.",
  description: "GInfra Travancore delivers high-precision defense components and electronic fuze systems with advanced CNC machining, forging, and full QA traceability — supporting artillery, aerospace, and robotics sectors across India.",
  keywords: "precision manufacturing, defence components, aerospace manufacturing, advanced robotics, CNC machining, artillery fuzes, electronics integration, ISO 9001, AS9100, Telangana, India",
  openGraph: {
    title: "Precision Defense & Aerospace Manufacturing | GInfra Travancore Pvt. Ltd.",
    description: "GInfra Travancore delivers high-precision defense components and electronic fuze systems with advanced CNC machining, forging, and full QA traceability — supporting artillery, aerospace, and robotics sectors across India.",
    url: "https://ginfratravancore.com",
    type: "website",
  },
  alternates: {
    canonical: "https://ginfratravancore.com",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <CoreValues />
      {/* <Statistics /> */}
      {/* <Technologies /> */}
      {/* <Certifications /> */}
      {/* <AboutCTA /> */}
      <CallToAction />
    </main>
  )
}
