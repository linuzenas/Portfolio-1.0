'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  LuBookOpen as BookOpen, 
  LuExternalLink as ExternalLink, 
  LuCalendar as Calendar, 
  LuClock as Clock, 
  LuUser as User,
  LuTag as Tag,
  LuArrowRight as ArrowRight,
  LuPen as PenTool,
  LuCode2 as Code2,
  LuLightbulb as Lightbulb
} from 'react-icons/lu'

const Blog = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const blogPosts = [
    {
      id: 1,
      title: 'Figma — Beginner\'s Guide',
      excerpt: 'A comprehensive guide to getting started with Figma, covering the basics of design, prototyping, and collaboration features.',
      content: 'Learn the fundamentals of Figma, from creating your first design to collaborating with team members. This guide covers everything a beginner needs to know about this powerful design tool.',
      image: '/blog/figma-guide.jpg',
      author: 'Petlu Linu Zenas Paul',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Design', 'Figma', 'UI/UX', 'Tutorial'],
      platform: 'Medium',
      url: 'https://medium.com/@petluzenas/figma-beginners-guide',
      featured: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Building Responsive Web Applications',
      excerpt: 'Best practices for creating responsive web applications that work seamlessly across all devices and screen sizes.',
      content: 'Explore modern techniques for building responsive web applications using CSS Grid, Flexbox, and modern JavaScript frameworks.',
      image: '/blog/responsive-web.jpg',
      author: 'Petlu Linu Zenas Paul',
      date: '2024-02-20',
      readTime: '12 min read',
      tags: ['Web Development', 'CSS', 'Responsive Design', 'JavaScript'],
      platform: 'Medium',
      url: '#',
      featured: false,
      gradient: 'from-blue-500 to-cyan-500',
      comingSoon: true
    },
    {
      id: 3,
      title: 'AI-Powered Development Tools',
      excerpt: 'How artificial intelligence is revolutionizing the way we write code and build applications.',
      content: 'Discover the latest AI-powered development tools and how they can enhance your coding workflow and productivity.',
      image: '/blog/ai-tools.jpg',
      author: 'Petlu Linu Zenas Paul',
      date: '2024-03-10',
      readTime: '10 min read',
      tags: ['AI', 'Development Tools', 'Productivity', 'Machine Learning'],
      platform: 'Medium',
      url: '#',
      featured: false,
      gradient: 'from-green-500 to-emerald-500',
      comingSoon: true
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
    <section id="blog" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 dark:from-navy-900 dark:to-navy-800">
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
              Blog & Publications
            </h2>
            <p className="text-lg text-navy-600 dark:text-slate-400 max-w-2xl mx-auto">
              Sharing knowledge and insights about web development, design, and technology
            </p>
          </motion.div>

          {/* Articles */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-center gradient-text mb-12">
              Articles
            </h3>
            {blogPosts.filter(post => post.featured).map((post) => (
              <motion.article
                key={post.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-navy-800 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Article Image */}
                  <div className={`h-64 lg:h-auto bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <PenTool size={48} className="mx-auto mb-4" />
                        <h4 className="text-2xl font-bold">{post.title}</h4>
                      </div>
                    </div>
                    
                    {/* Platform Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        {post.platform}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-navy-600 dark:text-slate-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-navy-800 dark:text-slate-200 mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-navy-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                        <User size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-navy-800 dark:text-slate-200">{post.author}</p>
                        <p className="text-sm text-navy-600 dark:text-slate-400">Author</p>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <motion.a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 group"
                    >
                      <span>Read Article</span>
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Removed "More Articles" section as requested */}

          {/* Stay Updated section removed as requested */}
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
