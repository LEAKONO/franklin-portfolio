import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import { FiGlobe, FiCpu, FiUsers, FiBook, FiAward, FiTarget } from 'react-icons/fi'

export default function About() {
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
    hidden: { y: 30, opacity: 0 },
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

  const expertiseItems = [
    { icon: <FiGlobe className="text-purple-400" />, text: "Peacekeeping & Conflict Resolution" },
    { icon: <FiCpu className="text-blue-400" />, text: "AI for Peacebuilding Solutions" },
    { icon: <FiUsers className="text-green-400" />, text: "International Diplomacy" },
    { icon: <FiBook className="text-yellow-400" />, text: "Academic Instruction" },
    { icon: <FiAward className="text-pink-400" />, text: "UN Peacekeeping Expertise" },
    { icon: <FiTarget className="text-red-400" />, text: "Technology Innovation" }
  ]

  return (
    <div className="relative overflow-hidden">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full filter blur-[100px]"
      />
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full filter blur-[100px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <motion.div variants={item} className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <AnimatedText 
              text="About   Franklin" 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
            />
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={item}>
            <motion.h2 
              whileHover={{ x: 5 }}
              className="text-2xl md:text-3xl font-semibold text-purple-300 mb-6 flex items-center"
            >
              <motion.span 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block mr-3"
              >
                
              </motion.span>
              Professional Profile
            </motion.h2>
            
            <motion.p 
              variants={item}
              className="text-gray-300 mb-6 text-lg leading-relaxed"
            >
              Franklin is an <span className="text-purple-300 font-medium">accomplished leader</span> in international relations, peacebuilding, and technology innovation. As Founder and CEO of SCHaiR, he pioneers <span className="text-blue-300 font-medium">AI, VR, and AR solutions</span> to enhance peace operations and education.
            </motion.p>
            
            <motion.p 
              variants={item}
              className="text-gray-300 mb-8 text-lg leading-relaxed"
            >
              With <span className="text-yellow-300 font-medium">extensive experience</span> at the United Nations and as an adjunct lecturer, Franklin has a proven ability to build partnerships, drive innovative solutions, and deliver <span className="text-green-300 font-medium">impactful training</span> across complex environments.
            </motion.p>
            
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-medium shadow-lg shadow-purple-500/30"
              >
                Download Full CV
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div variants={item}>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-8">
              Core <span className="text-blue-300">Expertise</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {expertiseItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-5 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500 transition-all"
                >
                  <div className="text-2xl mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    {item.text}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated objective section */}
        <motion.div
          variants={item}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500 rounded-full filter blur-[80px] opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-[80px] opacity-20"></div>
          
          <div className="relative z-10">
            <motion.h2 
              whileInView={{ x: [-20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-purple-300 mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Professional Objective
              </span>
            </motion.h2>
            
            <motion.p
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              To leverage expertise in <span className="text-purple-300 font-medium">technology</span> and <span className="text-blue-300 font-medium">diplomacy</span> to create innovative solutions for peacebuilding, education, and global development, while fostering strategic partnerships and inspiring future leaders.
            </motion.p>
            
            <motion.div
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex justify-center"
            >
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}