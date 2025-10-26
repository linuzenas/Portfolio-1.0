'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  LuGraduationCap as GraduationCap,
  LuSchool as School,
  LuCalendar as Calendar,
  LuTrophy as Trophy,
  LuBookOpen as BookOpen
} from 'react-icons/lu'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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

  const educationItems = [
    {
      institution: "Kalasalingam Academy of Research and Education",
      degree: "B.Tech Information Technology",
      period: "2021 - 2025",
      grade: "CGPA: 8.5/10",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-700"
    },
    {
      institution: "DR.BRR'S Genesis Academy",
      degree: "Intermediate(11th,12th), Biology, Physics, Chemistry",
      period: "2019 - 2021",
      grade: "Grade: 735",
      icon: School,
      color: "from-green-500 to-green-700"
    },
    {
      institution: "St.Paul's Model School",
      degree: "10th",
      period: "2018 - 2019",
      grade: "Grade: 598",
      activities: "Activities and societies: Volleyball",
      icon: BookOpen,
      color: "from-purple-500 to-purple-700"
    }
  ]

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-700">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-900 dark:text-white">
              Education
            </h2>
            <p className="text-navy-600 dark:text-slate-400 max-w-2xl mx-auto">
              My academic journey and educational background that has shaped my knowledge and skills.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-navy-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy-800 dark:text-slate-200">
                      {item.institution}
                    </h3>
                    <p className="text-navy-600 dark:text-slate-400 mt-1">
                      {item.degree}
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-navy-500 dark:text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Trophy size={14} />
                        <span>{item.grade}</span>
                      </div>
                    </div>
                    {item.activities && (
                      <p className="mt-2 text-navy-600 dark:text-slate-400">
                        {item.activities}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education