'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import ParticlesBackground from '@/components/ParticlesBackground'

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
    </>
  )
}
