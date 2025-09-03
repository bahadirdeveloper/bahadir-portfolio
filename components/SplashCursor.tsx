"use client"

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SplashCursor() {
  const [splashPos, setSplashPos] = useState<{ x: number; y: number } | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()

  // Throttled mouse move handler for better performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      setSplashPos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
    setSplashPos(null)
    setIsHovering(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
  }, [])

  useEffect(() => {
    // Use document instead of container for better tracking
    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {isVisible && splashPos && (
          <>
            {/* Main cursor */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: isHovering ? 1.5 : 1, 
                opacity: 0.8 
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ 
                duration: 0.15, 
                ease: "easeOut",
                scale: { type: "spring", stiffness: 300, damping: 25 }
              }}
              className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-difference"
              style={{
                left: splashPos.x - 8,
                top: splashPos.y - 8,
                transform: 'translateZ(0)', // Hardware acceleration
              }}
            />
            
            {/* Trailing effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: isHovering ? 2 : 1.5, 
                opacity: 0.3 
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut",
                delay: 0.05
              }}
              className="absolute w-8 h-8 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-sm"
              style={{
                left: splashPos.x - 16,
                top: splashPos.y - 16,
                transform: 'translateZ(0)', // Hardware acceleration
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
} 