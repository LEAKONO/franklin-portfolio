import { memo } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiGlobe, FiUsers, FiBook, FiCode } from 'react-icons/fi';

const experiences = [
  {
    title: "Founder & CEO",
    company: "SCHaiR",
    period: "2020 - Present",
    description: "Pioneering AI, VR, and AR solutions for peace operations and education. Developing innovative tools for conflict resolution and peacekeeping training.",
    icon: <FiCode className="text-purple-400" />,
    highlights: [
      "AI-driven conflict resolution simulations",
      "VR training for peacekeepers",
      "Predictive analytics for humanitarian aid"
    ]
  },
  {
    title: "Political Affairs Liaison",
    company: "United Nations (UNSOS)",
    period: "2015 - Present",
    description: "Strengthening relations between UNSOS and partners including AU, AMISOM, UNSOM, and host governments of Kenya and Somalia.",
    icon: <FiGlobe className="text-blue-400" />,
    highlights: [
      "Diplomatic community briefings",
      "Pre-deployment training coordination",
      "Host government relations"
    ]
  },
  {
    title: "Adjunct Lecturer",
    company: "Riara University",
    period: "2019 - 2022",
    description: "Taught courses on Terrorism & Counter Terrorism, Post Conflict Societies & Peacebuilding, and International Peacekeeping.",
    icon: <FiBook className="text-yellow-400" />,
    highlights: [
      "Pioneered project-based learning",
      "Guest lecture coordination",
      "Curriculum development"
    ]
  },
  {
    title: "Valedictorian",
    company: "UN University for Peace",
    period: "2010",
    description: "Graduated top of class with MA in International Peace Studies. Thesis on Private Military Firms in UN Peacekeeping.",
    icon: <FiAward className="text-pink-400" />,
    highlights: [
      "Class of 2010 highest honors",
      "Thesis published in academic journals",
      "Keynote graduation speaker"
    ]
  }
];

const ExperienceCard = memo(({ exp }) => {
  return (
    <div className="relative w-full p-6 md:p-8 bg-gray-800/50 rounded-xl border border-gray-700">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="p-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
          <div className="text-3xl">
            {exp.icon}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
            <span className="hidden md:block text-gray-500 mx-2">•</span>
            <span className="text-purple-300 font-medium">{exp.company}</span>
          </div>
          
          <div className="text-sm text-gray-400 mb-4">
            <span>{exp.period}</span>
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            {exp.description}
          </p>
          
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-400">KEY ACHIEVEMENTS:</h4>
            <ul className="space-y-2">
              {exp.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start text-gray-300">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
});

const Experience = memo(() => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Professional Journey
          </span>
        </h1>
        <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
      </div>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ExperienceCard exp={exp} />
          </motion.div>
        ))}
      </div>
    </div>
  )
});

export default Experience;