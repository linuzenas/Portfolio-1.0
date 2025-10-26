'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  LuChevronDown as ChevronDown, 
  LuGithub as Github, 
  LuLinkedin as Linkedin, 
  LuMail as Mail, 
  LuExternalLink as ExternalLink,
  LuCode2 as Code2,
  LuPalette as Palette,
  LuCpu as Cpu
} from 'react-icons/lu'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const texts = [
    'Building ideas into reality through code and design.',
    'Crafting intuitive digital experiences.',
    'Creating beautiful and functional web applications.',
    'Transforming concepts into interactive solutions.'
  ]

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < texts[textIndex].length) {
        setCurrentText(texts[textIndex].substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(texts[textIndex].substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((textIndex + 1) % texts.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts])

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-accent-400 to-primary-400 rounded-lg opacity-20"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [0, -90, -180],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-30"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg opacity-15"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-2xl sm:text-3xl font-medium text-navy-600 dark:text-slate-400">
              Hi, I'm
            </span>
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold gradient-text mt-2"
              whileHover={{ scale: 1.02 }}
            >
              P Linu Zenas Paul 👋
            </motion.h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-navy-700 dark:text-slate-300 mb-4">
              Developer & IT Student
            </h2>
            <p className="text-lg sm:text-xl text-navy-600 dark:text-slate-400 mb-2">
              Passionate about crafting intuitive digital experiences
            </p>
          </motion.div>

          {/* Typing Animation */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="text-lg sm:text-xl lg:text-2xl font-medium text-navy-700 dark:text-slate-300 min-h-[2.5rem] flex items-center justify-center">
              <span className="typing-animation">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/projects'}
              className="btn-primary flex items-center space-x-2 group"
            >
              <Code2 size={20} />
              <span>View Projects</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              className="btn-secondary flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download="P_Linu_Zenas_Paul_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
            >
              <ExternalLink size={20} />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              { icon: Github, href: 'https://github.com/linuzenas', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/linuzenas', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:petluzenas@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/20 dark:bg-navy-800/20 backdrop-blur-md border border-white/30 dark:border-navy-700/30 text-navy-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Skills Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center space-x-8 text-navy-600 dark:text-slate-400"
          >
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="flex items-center space-x-2"
            >
              <Code2 size={20} />
              <span className="text-sm font-medium">React</span>
            </motion.div>
            <motion.div
              variants={floatingVariants}
              animate="float"
              style={{ animationDelay: '1s' }}
              className="flex items-center space-x-2"
            >
              <Palette size={20} />
              <span className="text-sm font-medium">UI/UX</span>
            </motion.div>
            <motion.div
              variants={floatingVariants}
              animate="float"
              style={{ animationDelay: '2s' }}
              className="flex items-center space-x-2"
            >
              <Cpu size={20} />
              <span className="text-sm font-medium">AI/ML</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-white/20 dark:bg-navy-800/20 backdrop-blur-md border border-white/30 dark:border-navy-700/30 text-navy-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
            aria-label="Scroll to next section"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
