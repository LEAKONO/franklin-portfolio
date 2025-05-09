import { motion } from 'framer-motion'
import { FiAward, FiBook } from 'react-icons/fi'

const education = [
  {
    degree: "MA. International Peace Studies",
    institution: "United Nations University for Peace",
    year: "2010",
    description: "Thesis: Private Peace Private War: PMFs role in future UN PKO ops and the prospects of a UN standing Army. Valedictorian class of 2010.",
    icon: <FiAward />
  },
  {
    degree: "BSc. International Business Administration",
    institution: "United States International University-Africa",
    year: "2005",
    description: "Second Class Upper division. Minor in International Relations. Dean's List 2002-2004.",
    icon: <FiBook />
  }
]

const certifications = [
  "Integrated Mission Planning Course - EASF, IPSTC (2024)",
  "SSR/DDR SWISS International Defense - IPSTC (2024)",
  "United Nations Civil Military Coordination - BPST (2019)",
  "Conflict Analysis & Prevention Course - IPSTI (2017)",
  "Preventive Diplomacy & Early Warning - IPSTI (2013)",
  "IPT Specialization Course on Women in Armed Conflict - ASPR (2010)"
]

export default function School() {
  return (
    <div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-12"
      >
        Education & Certifications
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-gray-800/50 rounded-xl border-l-4 border-purple-600"
          >
            <div className="flex items-start mb-4">
              <div className="p-3 mr-4 rounded-full bg-purple-600/20 text-purple-400">
                {edu.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-purple-300">{edu.institution}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{edu.year}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300">{edu.description}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-semibold text-purple-300 mb-4">Professional Certifications</h2>
        <ul className="space-y-3">
          {certifications.map((cert, index) => (
            <motion.li 
              key={index}
              whileHover={{ x: 5 }}
              className="text-gray-300 flex items-start"
            >
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              {cert}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}