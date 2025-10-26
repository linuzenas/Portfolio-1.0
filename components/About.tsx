'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { 
  LuGraduationCap as GraduationCap, 
  LuCode as Code, 
  LuLightbulb as Lightbulb, 
  LuTarget as Target,
  LuCode2 as React,
  LuFileCode as Html5,
  LuPalette as Css3,
  LuCode as Javascript,
  LuCode as Python,
  LuGitBranch as GitBranch,
  LuPalette as Figma,
  LuServer as Flask,
  LuDatabase as Database,
  LuBrain as Brain,
  LuEye as Eye
} from 'react-icons/lu'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const skillCategories = [
    { 
      title: 'Frontend Technologies', 
      skills: ['React', 'HTML5', 'CSS', 'JavaScript'],
      color: 'from-blue-400 to-blue-600'
    },
    { 
      title: 'Languages', 
      skills: ['Python', 'XML'],
      color: 'from-green-400 to-green-600'
    },
    { 
      title: 'Developer Tools', 
      skills: ['Git', 'Github', 'Figma', 'Trello', 'API', 'PowerBI', 'Android Studio'],
      color: 'from-purple-400 to-purple-600'
    },
    { 
      title: 'Libraries/Frameworks', 
      skills: ['OpenCV', 'MediaPipe', 'Pandas', 'NumPy', 'NLP', 'streamlit', 'Flask', 'Tkinter'],
      color: 'from-pink-400 to-pink-600'
    }
  ]

  const timeline = [
    {
      year: '2023',
      title: 'Started B.Tech IT',
      description: 'Began my journey in Information Technology at Kalasalingam University',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2023',
      title: 'First Projects',
      description: 'Built my first web applications and discovered passion for frontend development',
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2024',
      title: 'AI/ML Exploration',
      description: 'Dove into machine learning, computer vision, and natural language processing',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2025',
      title: 'Leadership Roles',
      description: 'Became Vice President of Coding Blocks and ML Core Team Member at Microsoft Learn',
      icon: Target,
      color: 'from-orange-500 to-red-500'
    },
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

  return (
    <section id="about" className="section-padding bg-white/50 dark:bg-navy-900/50 backdrop-blur-sm">
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
              About Me
            </h2>
            <p className="text-lg text-navy-600 dark:text-slate-400 max-w-2xl mx-auto">
              A passionate 3rd-year B.Tech IT student with a love for creating beautiful, 
              functional digital experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image & Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-80 h-80 mx-auto"
                >
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  
                  {/* Profile image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-navy-700 shadow-2xl">
                    <Image
                      src="/blog/P.jpg"
                      alt="P Linu Zenas Paul"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center"
                  >
                    <Code size={16} className="text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center"
                  >
                    <Brain size={12} className="text-white" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Projects', value: '10+' },
                  { label: 'Technologies', value: '10+' },
                  { label: 'Years Learning', value: '2+' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-xl bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm border border-white/20 dark:border-navy-700/20"
                  >
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-navy-600 dark:text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Introduction */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-navy-800 dark:text-slate-200">
                  Hello! I'm P Linu Zenas Paul
                </h3>
                <p className="text-navy-600 dark:text-slate-400 leading-relaxed">
                  I'm a 3rd-year B.Tech Information Technology student at Kalasalingam University, 
                  passionate about frontend development, UI/UX design, and AI-powered projects. 
                  I love transforming ideas into beautiful, functional digital experiences that 
                  make a difference.
                </p>
                <p className="text-navy-600 dark:text-slate-400 leading-relaxed">
                  Currently, I'm focusing on mastering React, exploring AI/ML concepts, and 
                  building innovative projects that combine creativity with technology. I'm 
                  always eager to learn new technologies and take on exciting challenges.
                </p>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-navy-800 dark:text-slate-200">
                  Education
                </h4>
                <div className="p-6 rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 dark:from-navy-800/50 dark:to-navy-700/50 border border-primary-200 dark:border-navy-600">
                  <div className="flex items-center space-x-3 mb-2">
                    <GraduationCap className="text-primary-600 dark:text-primary-400" size={24} />
                    <h4 className="text-lg font-semibold text-navy-800 dark:text-slate-200">
                      B.Tech Information Technology
                    </h4>
                  </div>
                  <p className="text-navy-600 dark:text-slate-400">
                    Kalasalingam University • 2021 - 2027 (Expected)
                  </p>
                </div>
              </div>

              {/* Current Focus */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-navy-800 dark:text-slate-200">
                  Currently Learning & Building
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['DSA', 'AI/ML Concepts', 'API Integration', 'Advanced React', 'UI/UX Design'].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section - Static Cards Side by Side */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-bold text-center gradient-text mb-12">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Frontend Card */}
              <motion.div 
                className="bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 shadow-md rounded-lg p-6"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">Frontend</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['React', 'HTML5', 'CSS', 'JavaScript'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-navy-700 text-navy-700 dark:text-slate-200 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Languages Card */}
              <motion.div 
                className="bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 shadow-md rounded-lg p-6"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Languages</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Python', 'XML'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-navy-700 text-navy-700 dark:text-slate-200 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Developer Tools Card */}
              <motion.div 
                className="bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 shadow-md rounded-lg p-6"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Developer Tools</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Git', 'Github', 'Figma', 'Trello', 'API'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-navy-700 text-navy-700 dark:text-slate-200 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Libraries/Frameworks Card */}
              <motion.div 
                className="bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 shadow-md rounded-lg p-6"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-4 text-pink-600 dark:text-pink-400">Libraries/Frameworks</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['OpenCV', 'MediaPipe', 'Pandas', 'Flask'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-navy-700 text-navy-700 dark:text-slate-200 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-bold text-center gradient-text mb-12">
              My Journey
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent-400 to-primary-400"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Timeline dot */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg z-10`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-semibold text-navy-800 dark:text-slate-200">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-navy-600 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
