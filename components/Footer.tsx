'use client'

import { motion } from 'framer-motion'
import { 
  LuGithub as Github, 
  LuLinkedin as Linkedin, 
  LuMail as Mail, 
  LuTwitter as Twitter,
  LuHeart as Heart,
  LuCode as Code,
  LuArrowUp as ArrowUp
} from 'react-icons/lu'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/linuzenas',
      label: 'GitHub',
      color: 'hover:text-gray-600 dark:hover:text-gray-400'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/linuzenas',
      label: 'LinkedIn',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:petluzenas@gmail.com',
      label: 'Email',
      color: 'hover:text-red-600 dark:hover:text-red-400'
    },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-navy-900 dark:bg-navy-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-500 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary-400 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <Code size={24} className="text-white" />
                  </div>
                  <span className="text-2xl font-bold">Linu Zenas Paul</span>
                </div>
                <p className="text-slate-300 leading-relaxed max-w-md">
                  A passionate frontend developer and B.Tech IT student crafting 
                  intuitive digital experiences through code and design.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-slate-300 ${social.color} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <a
                  href="mailto:petluzenas@gmail.com"
                  className="text-slate-300 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Mail size={16} />
                  <span>petluzenas@gmail.com</span>
                </a>
                <div className="text-slate-300 flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-400 text-center md:text-left"
            >
              <p className="flex items-center space-x-2">
                <span>© 2025 Petlu Linu Zenas Paul. All rights reserved.</span>
              </p>
              <p className="flex items-center space-x-1 mt-1">
                <span>Designed & Developed with</span>
                <Heart className="text-red-500 animate-pulse" size={16} />
                <span>by Linu Zenas</span>
              </p>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
