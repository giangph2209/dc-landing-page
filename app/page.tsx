'use client'
import Navbar from '@/components/sections/navbar'
import Hero from '@/components/sections/hero'
import Services from '@/components/sections/services'
import Workflow from '@/components/sections/workflow'
import TechStack from '@/components/sections/tech-stack'
import Projects from '@/components/sections/projects'
import Certificates from '@/components/sections/certificates'
import Contact from '@/components/sections/contact'
import CTABanner from '@/components/sections/cta-banner'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white !overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Workflow />
      <TechStack />
      <Projects />
      <Certificates />
      <Contact />
      <CTABanner />
      <Footer />
    </main>
  )
}
