'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  LuMail as Mail, 
  LuPhone as Phone, 
  LuMapPin as MapPin, 
  LuSend as Send, 
  LuGithub as Github, 
  LuLinkedin as Linkedin, 
  LuTwitter as Twitter,
  LuMessageCircle as MessageCircle,
  LuCheckCircle as CheckCircle,
  LuAlertCircle as AlertCircle,
  LuUser as User,
  LuMessageSquare as MessageSquare,
  LuAtSign as AtSign
} from 'react-icons/lu'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the form data to your backend or email service
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'petluzenas@gmail.com',
      href: 'mailto:petluzenas@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      title: 'LinkedIn',
      value: 'linkedin.com/in/linuzenas',
      href: 'https://linkedin.com/in/linuzenas',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/linuzenas',
      href: 'https://github.com/linuzenas',
      color: 'from-gray-600 to-gray-800'
    }
  ]

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
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="contact" className="section-padding bg-white/50 dark:bg-navy-900/50 backdrop-blur-sm">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-navy-600 dark:text-slate-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-navy-800 dark:text-slate-200 mb-6">
                  Let's Connect
                </h3>
                <p className="text-navy-600 dark:text-slate-400 leading-relaxed mb-8">
                  I'm always interested in new opportunities, collaborations, and interesting projects. 
                  Whether you have a question, want to work together, or just want to say hi, 
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group block p-6 rounded-xl bg-white dark:bg-navy-800 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0`}>
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-navy-800 dark:text-slate-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-navy-600 dark:text-slate-400">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-navy-800 dark:text-slate-200 mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-full bg-white dark:bg-navy-800 shadow-lg text-navy-600 dark:text-slate-400 ${social.color} transition-all duration-300`}
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-navy-800 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-navy-800 dark:text-slate-200 mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-700 dark:text-slate-300 mb-2">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy-400" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-navy-200 dark:border-navy-600 rounded-lg bg-white dark:bg-navy-700 text-navy-800 dark:text-slate-200 placeholder-navy-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-700 dark:text-slate-300 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy-400" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-navy-200 dark:border-navy-600 rounded-lg bg-white dark:bg-navy-700 text-navy-800 dark:text-slate-200 placeholder-navy-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-navy-700 dark:text-slate-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-navy-200 dark:border-navy-600 rounded-lg bg-white dark:bg-navy-700 text-navy-800 dark:text-slate-200 placeholder-navy-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-700 dark:text-slate-300 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-navy-400" size={20} />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-navy-200 dark:border-navy-600 rounded-lg bg-white dark:bg-navy-700 text-navy-800 dark:text-slate-200 placeholder-navy-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
                    >
                      <CheckCircle size={20} />
                      <span className="font-medium">Message sent successfully!</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"
                    >
                      <AlertCircle size={20} />
                      <span className="font-medium">Failed to send message. Please try again.</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
