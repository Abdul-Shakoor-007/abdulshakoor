'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Portfolio from '@/components/portfolio'
import Experience from '@/components/experience'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation scrollToSection={scrollToSection} activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
