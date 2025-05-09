import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'

export default function About() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-6">
          <AnimatedText text="About Franklin" />
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Profile</h2>
            <p className="text-gray-300 mb-6">
              Franklin is an accomplished leader in international relations, peacebuilding, and technology innovation. 
              As Founder and CEO of SCHaiR, he pioneers AI, VR, and AR solutions to enhance peace operations and education.
            </p>
            <p className="text-gray-300 mb-6">
              With extensive experience at the United Nations and as an adjunct lecturer, Franklin has a proven ability 
              to build partnerships, drive innovative solutions, and deliver impactful training.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Expertise</h2>
            <ul className="space-y-3 text-gray-300">
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Peacekeeping & Conflict Resolution
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                AI for Peacebuilding Solutions
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                International Diplomacy
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Technology Innovation
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Academic Instruction
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-semibold text-purple-300 mb-4">Objective</h2>
        <p className="text-gray-300">
          To leverage expertise in technology and diplomacy to create innovative solutions for peacebuilding, 
          education, and global development, while fostering strategic partnerships and inspiring future leaders.
        </p>
      </motion.div>
    </div>
  )
}