import { motion } from 'framer-motion'
import { FiCpu, FiGlobe, FiBookOpen, FiUsers, FiCode } from 'react-icons/fi'

const services = [
  {
    title: "AI Peacebuilding Solutions",
    description: "Developing innovative AI tools for conflict resolution and peacekeeping training.",
    icon: <FiCpu size={32} />,
    color: "text-purple-400"
  },
  {
    title: "International Diplomacy",
    description: "Expertise in building partnerships between governments and international organizations.",
    icon: <FiGlobe size={32} />,
    color: "text-blue-400"
  },
  {
    title: "Education & Training",
    description: "Lecturing and developing curriculum for peace studies and international relations.",
    icon: <FiBookOpen size={32} />,
    color: "text-green-400"
  },
  {
    title: "UN Peacekeeping Support",
    description: "Providing political affairs liaison and training for peacekeeping operations.",
    icon: <FiUsers size={32} />,
    color: "text-yellow-400"
  },
  {
    title: "Tech Innovation",
    description: "Founding and consulting for tech startups in AI, VR, and AR applications.",
    icon: <FiCode size={32} />,
    color: "text-pink-400"
  }
]

export default function Services() {
  return (
    <div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-12"
      >
        Services & Expertise
      </motion.h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700"
          >
            <div className={`${service.color} mb-4`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}