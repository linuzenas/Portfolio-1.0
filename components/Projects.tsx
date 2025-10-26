'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  LuExternalLink as ExternalLink, 
  LuGithub as Github, 
  LuPalette as Palette, 
  LuBot as Bot, 
  LuMousePointer as MousePointer, 
  LuPlay as Youtube,
  LuCalendar as Calendar,
  LuGamepad2 as Gamepad2,
  LuEye as Eye,
  LuCode2 as Code2,
  LuDatabase as Database,
  LuBrain as Brain,
  LuBell as Bell,
  LuMessageSquare as MessageSquare
} from 'react-icons/lu'

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      id: 1,
      title: 'Multi-Channel-Placement-Notify',
      description: 'A Flask-based web application for managing placement communication at KARE with Excel uploads, Telegram notifications, and email alerts.',
      longDescription: 'A comprehensive Flask-based web application for managing placement communication at KARE. Supports Excel uploads, Telegram group notifications, and email alerts — all without requiring a database. Includes admin dashboard and automated communication features.',
      image: '/projects/event-management.jpg',
      tech: ['Python', 'Flask', 'Telegram API', 'Excel Processing', 'Email Integration'],
      icons: [Bell, MessageSquare],
      github: 'https://github.com/linuzenas/multi-channel-placement-notify',
      live: null,
      featured: true,
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      id: 2,
      title: 'ZenasBot - Telegram AI Assistant',
      description: 'An intelligent Telegram bot powered by Llama 2 for natural language processing and conversation.',
      longDescription: 'A sophisticated AI-powered Telegram bot that leverages Llama 2 for natural language understanding and generation. Features include context-aware conversations, multi-language support, and integration with various APIs.',
      image: '/projects/zenasbot.jpg',
      tech: ['Python', 'Llama 2', 'NLP', 'Telegram API', 'Flask'],
      icons: [Bot, Brain],
      github: 'https://github.com/linuzenas/ZenasBot',
      live: 'https://t.me/zenasbot',
      featured: true,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      title: 'Meeting Notes & Task Management',
      description: 'Automated tool for generating meeting transcripts, summarizing discussions, and extracting actionable tasks.',
      longDescription: 'The Automated Meeting Notes and Task Management tool enhances meeting efficiency by generating transcripts, summarizing discussions, and extracting actionable tasks. It integrates with various platforms for seamless workflow integration.',
      image: '/projects/event-management.jpg',
      tech: ['Python', 'NLP', 'Speech Recognition', 'Task Management', 'API Integration', 'Trello'],
      icons: [MessageSquare, Calendar],
      github: 'https://github.com/linuzenas/Meeting-Notes-and-Task-Management',
      live: null,
      featured: true,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 4,
      title: 'Colour Palette Generator',
      description: 'A dynamic color generation app that creates beautiful color palettes with hex codes, RGB values, and export functionality.',
      longDescription: 'An interactive web application that generates harmonious color palettes using advanced color theory algorithms. Features include real-time preview, color accessibility checking, and multiple export formats.',
      image: '/projects/color-palette.jpg',
      tech: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
      icons: [Palette, Code2],
      github: 'https://github.com/linuzenas/colour-palette-generator',
      live: 'https://linuzenas.github.io/colour-palette-generator',
      featured: false,
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      id: 5,
      title: 'Event Management System',
      description: 'Academic hub platform for managing campus activities, events, clubs, and career guidance.',
      longDescription: 'A comprehensive platform designed for college students and administrators to manage campus activities, events, clubs, and provide career guidance resources.',
      image: '/projects/event-management.jpg',
      tech: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
      icons: [Calendar, Database],
      github: 'https://github.com/linuzenas/Event-Management-System',
      live: 'https://linuzenas.github.io/Event-Management-System',
      featured: false,
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 6,
      title: 'Virtual Mouse Controller',
      description: 'Gesture recognition system using OpenCV and MediaPipe for hands-free computer control.',
      longDescription: 'An innovative computer vision project that enables users to control their mouse cursor using hand gestures. Built with OpenCV for image processing and MediaPipe for pose estimation.',
      image: '/projects/virtual-mouse.jpg',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
      icons: [MousePointer, Eye],
      github: 'https://github.com/linuzenas/Virtual-Mouse-Controller-With-Hand-Detection',
      live: null,
      featured: false,
      gradient: 'from-indigo-500 to-purple-600'
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
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 dark:from-navy-900 dark:to-navy-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-navy-600 dark:text-slate-400 max-w-2xl mx-auto">
              A collection of my recent work showcasing skills in frontend development, 
              AI/ML, and creative problem-solving
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-navy-800 shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Project Image */}
                  <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        {project.icons.map((Icon, iconIndex) => (
                          <Icon 
                            key={iconIndex} 
                            size={48} 
                            className={`mx-auto mb-2 ${iconIndex > 0 ? 'opacity-70' : ''}`}
                          />
                        ))}
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <p className="text-sm opacity-90 mb-4">{project.longDescription}</p>
                        <div className="flex space-x-2">
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                            >
                              <Github size={20} />
                            </motion.a>
                          )}
                          {project.live && (
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                            >
                              <ExternalLink size={20} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-800 dark:text-slate-200 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-navy-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 btn-primary text-center flex items-center justify-center space-x-2"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 btn-secondary text-center flex items-center justify-center space-x-2"
                        >
                          <Github size={16} />
                          <span>Source Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center gradient-text mb-12">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl bg-white dark:bg-navy-800 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Project Header */}
                    <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          {project.icons.map((Icon, iconIndex) => (
                            <Icon 
                              key={iconIndex} 
                              size={32} 
                              className={`mx-auto ${iconIndex > 0 ? 'opacity-70' : ''}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-navy-800 dark:text-slate-200 mb-2">
                        {project.title}
                      </h4>
                      <p className="text-sm text-navy-600 dark:text-slate-400 mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-slate-100 dark:bg-navy-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 px-3 py-2 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg text-sm font-medium text-center hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center space-x-1"
                          >
                            <Github size={14} />
                            <span>Code</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* View More Button */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/linuzenas?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://github.com/linuzenas?tab=repositories", "_blank")}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
