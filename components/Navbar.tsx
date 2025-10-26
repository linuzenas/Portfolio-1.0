'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { 
  LuSun as Sun, 
  LuMoon as Moon, 
  LuMenu as Menu, 
  LuX as X, 
  LuHome as Home, 
  LuUser as User, 
  LuCode as Code, 
  LuBriefcase as Briefcase, 
  LuBookOpen as BookOpen, 
  LuMail as Mail 
} from 'react-icons/lu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: Code },
    { name: 'Experience', href: '/experience', icon: Briefcase },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  const navigateToPage = (href: string) => {
    window.location.href = href
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-navy-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LZ</span>
            </div>
            <span className="text-xl font-bold gradient-text">Linu Zenas</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateToPage(item.href)}
                className="flex items-center space-x-1 text-navy-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <item.icon size={16} />
                <span className="font-medium">{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-slate-100 dark:bg-navy-800 text-navy-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-200"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full bg-slate-100 dark:bg-navy-800 text-navy-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-200"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border-t border-slate-200 dark:border-navy-700"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigateToPage(item.href)}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg text-navy-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
                  >
                    <item.icon size={18} />
                    <span className="font-medium">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
