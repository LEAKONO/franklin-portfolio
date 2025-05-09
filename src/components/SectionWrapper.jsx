// sections/Home.jsx
import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import FloatingElements from '../components/FloatingElements'

export default function Home() {
  return (
    <div className="relative">
      <FloatingElements />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <AnimatedText text="Franklin Mwirigi Murianki" />
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-purple-300 mb-6">
            <AnimatedText text="Bridging Technology & Peacebuilding" />
          </h2>
          <p className="text-gray-300 max-w-2xl text-lg">
            Founder & CEO of SCHaiR | UN Peacekeeping Expert | AI & VR Innovator | 
            International Relations Lecturer | Technology Entrepreneur
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-all">
            Download CV
          </button>
          <button className="px-6 py-3 border border-purple-600 text-purple-300 hover:bg-purple-900/30 rounded-lg font-medium transition-all">
            Contact Me
          </button>
        </motion.div>
      </div>
    </div>
  )
}