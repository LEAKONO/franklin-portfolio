// sections/Home.jsx
import { motion } from 'framer-motion'
import FloatingElements from '../components/FloatingElements'
import profileImage from '../assets/images/profile.jpeg'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  // Continuous firework particle animation
  const Particle = ({ color, size, delay, position }) => {
    const x = position?.x || Math.random() * 100 - 50
    const y = position?.y || Math.random() * 100 - 50
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
          x: [0, x, x * 1.5],
          y: [0, y, y * 1.5]
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          delay: delay,
          repeat: Infinity,
          repeatDelay: 1 + Math.random() * 2
        }}
        className={`absolute rounded-full ${color}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          filter: 'blur(1px)',
          left: '50%',
          top: '50%'
        }}
      />
    )
  }

  // Typing animation for name
  const TypingText = ({ text }) => {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }, 100 + Math.random() * 50) // Random typing speed for natural feel

        return () => clearTimeout(timeout)
      } else {
        setTypingComplete(true)
      }
    }, [currentIndex, text])

    return (
      <span className="relative">
        {displayText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="absolute -right-2 w-1 h-8 bg-white"
        />
      </span>
    )
  }

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Enhanced floating elements with continuous fireworks */}
      <FloatingElements />
      
      {/* Continuous firework particles in multiple locations */}
      <div className="absolute top-1/4 left-1/4 w-full h-full">
        {[...Array(8)].map((_, i) => (
          <Particle 
            key={`firework1-${i}`} 
            color={i % 2 === 0 ? 'bg-purple-400' : 'bg-blue-400'} 
            size={Math.random() * 6 + 3}
            delay={i * 0.3}
            position={{ x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
          />
        ))}
      </div>
      
      <div className="absolute top-3/4 right-1/4 w-full h-full">
        {[...Array(8)].map((_, i) => (
          <Particle 
            key={`firework2-${i}`} 
            color={i % 3 === 0 ? 'bg-purple-400' : i % 3 === 1 ? 'bg-blue-400' : 'bg-pink-400'} 
            size={Math.random() * 6 + 3}
            delay={i * 0.3 + 0.5}
            position={{ x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
          />
        ))}
      </div>
      
      {/* Gradient background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px] opacity-20"></div>
      
      {/* Main content */}
      <div className="relative z-10 w-full px-4 md:px-8 mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Text content */}
          <div className="overflow-hidden order-2 lg:order-1">
            <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold text-white mb-6">
              <TypingText text="Franklin Mwirigi Murianki" />
            </motion.h1>
            
            <motion.div 
              variants={item} 
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: typingComplete ? 1 : 0 }}
              transition={{ delay: 1.5 }}
            >
              <span className="text-purple-400 font-medium inline-flex items-center gap-2">
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="inline-block w-3 h-3 rounded-full bg-purple-400"
                ></motion.span>
                Peacebuilder & Tech Innovator
              </span>
            </motion.div>
            
            <motion.h2 
              variants={item} 
              className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: typingComplete ? 1 : 0 }}
              transition={{ delay: 1.8 }}
            >
              Bridging Technology & Peacebuilding
            </motion.h2>
            
            <motion.p 
              variants={item} 
              className="text-gray-300 max-w-2xl text-lg mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: typingComplete ? 1 : 0 }}
              transition={{ delay: 2.1 }}
            >
              Founder & CEO of SCHaiR | UN Peacekeeping Expert | AI & VR Innovator | 
              International Relations Lecturer | Technology Entrepreneur
            </motion.p>

            <motion.div 
              variants={item}
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: typingComplete ? 1 : 0 }}
              transition={{ delay: 2.4 }}
            >
              <motion.button 
                whileHover={{ 
                  y: -3, 
                  boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)",
                  background: "linear-gradient(to right, #7c3aed, #4f46e5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-medium transition-all shadow-lg shadow-purple-500/20 hover:shadow-xl"
              >
                Download CV
              </motion.button>
              
              <motion.button 
                whileHover={{ 
                  y: -3, 
                  boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
                  backgroundColor: "rgba(124, 58, 237, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-purple-600 text-purple-300 rounded-xl font-medium transition-all shadow-lg shadow-purple-500/10 hover:shadow-xl"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>

          {/* Profile image with enhanced animations */}
          <motion.div 
            variants={item}
            className="relative flex justify-center mt-8 lg:mt-0 order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer animated ring */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                className="absolute inset-0 border-4 border-transparent border-t-purple-500 border-r-blue-500 rounded-full"
              ></motion.div>
              
              {/* Inner ring with pulsing effect */}
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-2 md:inset-4 lg:inset-6 border-2 border-purple-400/30 rounded-full"
              ></motion.div>
              
              {/* Profile image with glow effect when typing completes */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                animate={{
                  boxShadow: typingComplete ? [
                    "0 0 0 0 rgba(124, 58, 237, 0.4)",
                    "0 0 20px 10px rgba(124, 58, 237, 0)",
                    "0 0 0 0 rgba(124, 58, 237, 0)"
                  ] : "none"
                }}
                transition={{
                  duration: 2,
                  repeat: typingComplete ? Infinity : 0,
                  repeatDelay: 3
                }}
                className="absolute inset-4 md:inset-6 lg:inset-8 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl"
              >
                <img 
                  src={profileImage} 
                  alt="Franklin M. Murianki"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Animated badges */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-gray-800 p-2 md:p-3 rounded-xl shadow-lg border border-gray-700 backdrop-blur-sm"
              >
                <div className="text-purple-400 font-bold text-xs md:text-sm">CEO & Founder</div>
                <div className="text-white font-medium text-xs md:text-sm">SCHaiR</div>
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gray-800 p-2 md:p-3 rounded-xl shadow-lg border border-gray-700 backdrop-blur-sm"
              >
                <div className="text-blue-400 font-bold text-xs md:text-sm">UN Expert</div>
                <div className="text-white font-medium text-xs md:text-sm">Peacekeeping</div>
              </motion.div>
              
              {/* Floating tech icons around the image */}
              {!isMobile && (
                <>
                  <motion.div
                    animate={{
                      x: [0, 10, 0],
                      y: [0, -10, 0],
                      rotate: [0, 10, 0],
                      opacity: typingComplete ? [0, 1, 0] : 0
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    className="absolute -top-8 left-1/4 text-2xl"
                  >
                    🚀
                  </motion.div>
                  <motion.div
                    animate={{
                      x: [0, -15, 0],
                      y: [0, 15, 0],
                      rotate: [0, -10, 0],
                      opacity: typingComplete ? [0, 1, 0] : 0
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                    className="absolute bottom-0 right-0 text-3xl"
                  >
                    🌐
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Subtle grid overlay for professional look */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
    </div>
  )
}