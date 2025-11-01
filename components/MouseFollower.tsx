'use client'

import { useEffect, useState } from 'react'

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Fade in the cursor follower when mouse moves
      if (opacity < 1) {
        setOpacity(1)
      }
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    // Add event listeners for mouse movement
    window.addEventListener('mousemove', handleMouseMove)
    
    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]')
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    // Cleanup event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor follower */}
      <div 
        className="fixed pointer-events-none z-50 transition-opacity duration-300 ease-in-out"
        style={{
          opacity: opacity,
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -20,
          top: -20,
        }}
      >
        <div 
          className={`
            w-10 h-10 rounded-full 
            bg-gradient-to-r from-blue-400 to-cyan-300 dark:from-blue-500 dark:to-cyan-400
            mix-blend-difference
            transition-all duration-300 ease-out
            flex items-center justify-center
            ${isHovering ? 'scale-150 opacity-70' : 'scale-100 opacity-40'}
          `}
        />
      </div>
      
      {/* Secondary subtle glow effect */}
      <div 
        className="fixed pointer-events-none z-40 transition-opacity duration-500 ease-in-out"
        style={{
          opacity: opacity * 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -40,
          top: -40,
        }}
      >
        <div 
          className={`
            w-20 h-20 rounded-full 
            bg-gradient-to-r from-blue-300/30 to-cyan-200/30 dark:from-blue-400/30 dark:to-cyan-300/30
            blur-md
            transition-all duration-500 ease-out
            ${isHovering ? 'scale-125' : 'scale-100'}
          `}
        />
      </div>
    </>
  )
}

export default MouseFollower