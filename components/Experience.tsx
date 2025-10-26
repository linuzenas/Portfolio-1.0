'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  LuCrown as Crown, 
  LuUsers as Users, 
  LuCode as Code, 
  LuAward as Award, 
  LuCalendar as Calendar,
  LuExternalLink as ExternalLink,
  LuBuilding2 as Building2,
  LuGraduationCap as GraduationCap,
  LuLightbulb as Lightbulb,
  LuTarget as Target,
  LuTrophy as Trophy,
  LuStar as Star,
  LuBrain as Brain
} from 'react-icons/lu'

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const experiences = [
    {
      id: 1,
      title: 'Vice President',
      company: 'Coding Blocks Student Chapter KARE',
      period: '2025 - Present',
      type: 'Leadership',
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      description: 'Leading the student chapter to promote coding culture and organize technical events.',
      achievements: [
        'Organized 5+ Hackathons and coding competitions',
        'Increased chapter community by 100+ members through strategic initiatives',
        'Collaborated with industry professionals for events and more'
      ],
      skills: ['Leadership', 'Event Management', 'Public Speaking'],
      current: true
    },
    {
      id: 2,
      title: 'ML Core Team Member',
      company: 'Microsoft Learn Student Chapter KARE',
      period: '2024 - 2025',
      type: 'Technical',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      description: 'Core team member responsible for ML initiatives and technical workshops.',
      achievements: [
        'Developed machine learning models for student projects',
        'Conducted workshops and hackathons in KARE ',
        'Created online educational content for students',
        'Collaborated with Microsoft Learn platform for content creation'
      ],
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Teaching'],
      current: false
    },
    {
      id: 3,
      title: 'Python Intern',
      company: 'CSEdge',
      period: '2024',
      type: 'Internship',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      description: 'Software development internship focusing on Python-based applications.',
      achievements: [
        'Developed web applications using Python and Flask framework',
        'Implemented RESTful APIs for data management systems',
        'Gained hands-on experience with version control.'
      ],
      skills: ['Python', 'Flask', 'REST APIs', 'Git', 'Automation'],
      current: false
    },
  ]

  const education = [
    {
      degree: 'B.Tech Information Technology',
      institution: 'Kalasalingam University',
      period: '2023 - 2027 (Expected)',
      grade: 'CGPA: 6.94 / 10',
      description: 'Comprehensive study of computer science fundamentals, software engineering, and emerging technologies.',
      courses: ['Data Structures & Algorithms', 'Database Management', 'Software Engineering', 'Machine Learning', 'Web Development'],
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500'
    },

    {
      degree: 'Intermediate (11th,12th)',
      institution: "DR.BRR'S Genesis Academy",
      period: '2020 - 2022',
      grade: '735 / 1000',
      description: 'Completed Intermediate education with a foundation in science, focusing on Biology, Physics, and Chemistry.',
      courses: ['Biology', 'Physics', 'Chemistry'],
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500'
    },

    {
      degree: 'Schooling',
      institution: "St.Paul's Model School",
      period: ' Completed in 2020',
      grade: '598 / 600',
      description: 'Completed secondary education with excellence in academics and extracurricular activities. Built strong fundamentals in science and some other subjects.',
      courses: ['Mathematics',
    'Science (Physics, Chemistry, Biology)',
    'English and Social Studies'],
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500'
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
    <section id="experience" className="section-padding bg-white/50 dark:bg-navy-900/50 backdrop-blur-sm">
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
              Experience & Leadership
            </h2>
            <p className="text-lg text-navy-600 dark:text-slate-400 max-w-2xl mx-auto">
              My journey in technology, leadership roles, and continuous learning
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold text-center gradient-text mb-12">
              Professional Experience
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent-400 to-primary-400"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative flex items-start space-x-8"
                  >
                    {/* Timeline dot */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg z-10 relative`}>
                      <exp.icon size={24} className="text-white" />
                      {exp.current && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <motion.div 
                      variants={cardVariants}
                      whileHover="hover"
                      className="flex-1 bg-white dark:bg-navy-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-navy-800 dark:text-slate-200 mb-1">
                            {exp.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-navy-600 dark:text-slate-400">
                            <Building2 size={16} />
                            <span className="font-medium">{exp.company}</span>
                            <span className="text-sm">•</span>
                            <span className="text-sm">{exp.type}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 mt-2 sm:mt-0">
                          <Calendar size={16} />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-navy-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-navy-800 dark:text-slate-200 mb-2">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-navy-600 dark:text-slate-400">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold text-center gradient-text mb-12">
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white dark:bg-navy-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${edu.color} flex items-center justify-center flex-shrink-0`}>
                      <edu.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-navy-800 dark:text-slate-200 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-navy-600 dark:text-slate-400 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">
                        {edu.period} • {edu.grade}
                      </p>
                      <p className="text-navy-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      <div>
                        <h5 className="font-semibold text-navy-800 dark:text-slate-200 mb-2">
                          Key Courses:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-1 bg-slate-100 dark:bg-navy-700 text-slate-700 dark:text-slate-300 rounded text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  )
}

export default Experience
