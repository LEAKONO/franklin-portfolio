// sections/Home.jsx
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import FloatingElements from '../components/FloatingElements'
import profileImage from '../assets/images/profile.jpeg'

export default function Home() {
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

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <FloatingElements />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px] opacity-20"></div>
      
      <div className="relative z-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text content */}
          <div>
            <motion.div variants={item} className="mb-6">
              <span className="text-purple-400 font-medium inline-flex items-center gap-2">
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="inline-block w-3 h-3 rounded-full bg-purple-400"
                ></motion.span>
                Peacebuilder & Tech Innovator
              </span>
            </motion.div>
            
            <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold text-white mb-6">
              <AnimatedText text="Franklin Mwirigi Murianki" />
            </motion.h1>
            
            <motion.h2 variants={item} className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
              <AnimatedText text="Bridging Technology & Peacebuilding" />
            </motion.h2>
            
            <motion.p variants={item} className="text-gray-300 max-w-2xl text-lg mb-10">
              Founder & CEO of SCHaiR | UN Peacekeeping Expert | AI & VR Innovator | 
              International Relations Lecturer | Technology Entrepreneur
            </motion.p>

            <motion.div 
              variants={item}
              className="flex flex-wrap gap-4"
            >
              <motion.button 
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl text-white font-medium transition-all shadow-lg shadow-purple-500/20"
              >
                Download CV
              </motion.button>
              
              <motion.button 
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-600 text-purple-300 hover:bg-purple-900/30 rounded-xl font-medium transition-all shadow-lg shadow-purple-500/10"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>

          {/* Profile image with animation */}
          <motion.div 
            variants={item}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glowing border */}
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
              
              {/* Profile image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="absolute inset-4 md:ins-6 lg:ins-8 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl"
              >
                <img 
                  src={profileImage} 
                  alt="Franklin M. Murianki"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating badges */}
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
                className="absolute -bottom-6 -left-6 bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-700"
              >
                <div className="text-purple-400 font-bold text-sm">CEO & Founder</div>
                <div className="text-white font-medium">SCHaiR</div>
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
                className="absolute -top-6 -right-6 bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-700"
              >
                <div className="text-blue-400 font-bold text-sm">UN Expert</div>
                <div className="text-white font-medium">Peacekeeping</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scrolling indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, 10, 20]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </motion.div>
      </div>
    </div>
  )
}