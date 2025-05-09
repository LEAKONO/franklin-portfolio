// sections/Experience.jsx
import { motion } from 'framer-motion'
import { FiBriefcase, FiAward } from 'react-icons/fi'

const experiences = [
  {
    title: "Founder & CEO",
    company: "SCHaiR",
    period: "2020 - Present",
    description: "Pioneering AI, VR, and AR solutions for peace operations and education. Developing innovative tools for conflict resolution and peacekeeping training.",
    icon: <FiBriefcase />
  },
  {
    title: "Political Affairs Liaison Assistant",
    company: "United Nations (UNSOS)",
    period: "2015 - Present",
    description: "Strengthening relations between UNSOS and partners including AU, AMISOM, UNSOM, and host governments of Kenya and Somalia.",
    icon: <FiBriefcase />
  },
  {
    title: "Adjunct Lecturer",
    company: "Riara University",
    period: "2019 - 2022",
    description: "Taught courses on Terrorism & Counter Terrorism, Post Conflict Societies & Peacebuilding, and International Peacekeeping.",
    icon: <FiBriefcase />
  },
  {
    title: "Valedictorian",
    company: "United Nations University for Peace",
    period: "2010",
    description: "Graduated top of class with MA in International Peace Studies.",
    icon: <FiAward />
  }
]

export default function Experience() {
  return (
    <div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-12"
      >
        Professional Experience
      </motion.h1>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border-l-4 border-purple-600"
          >
            <div className="flex items-start">
              <div className="p-3 mr-4 rounded-full bg-purple-600/20 text-purple-400">
                {exp.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-purple-300">{exp.company}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}