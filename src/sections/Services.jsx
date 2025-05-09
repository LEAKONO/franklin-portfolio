import { memo, lazy, Suspense } from 'react'

// Lazy load icons with React.lazy (Vite alternative to next/dynamic)
const FiCpu = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiCpu })))
const FiGlobe = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiGlobe })))
const FiBookOpen = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiBookOpen })))
const FiUsers = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiUsers })))
const FiCode = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiCode })))
const FiLayers = lazy(() => import('react-icons/fi').then(mod => ({ default: mod.FiLayers })))

const services = [
  {
    title: "AI Peacebuilding Solutions",
    description: "Developing cutting-edge AI tools for conflict resolution and peacekeeping training with real-time adaptive learning.",
    icon: <FiCpu className="text-3xl" />,
    color: "from-purple-500 to-indigo-500",
    features: ["Predictive analytics", "VR simulations", "Automated negotiation"]
  },
  {
    title: "International Diplomacy",
    description: "Expert facilitation of partnerships between governments, NGOs and international organizations.",
    icon: <FiGlobe className="text-3xl" />,
    color: "from-blue-500 to-cyan-500",
    features: ["Conflict mediation", "Policy advisory", "Stakeholder engagement"]
  },
  {
    title: "Education & Training",
    description: "Innovative curriculum development and instruction for peace studies programs worldwide.",
    icon: <FiBookOpen className="text-3xl" />,
    color: "from-emerald-500 to-teal-500",
    features: ["Project-based learning", "Executive training", "Virtual classrooms"]
  },
  {
    title: "UN Peacekeeping Support",
    description: "Comprehensive political affairs liaison and specialized training for peace operations.",
    icon: <FiUsers className="text-3xl" />,
    color: "from-amber-500 to-yellow-500",
    features: ["Pre-deployment training", "Cultural competency", "Crisis management"]
  },
  {
    title: "Tech Innovation",
    description: "Strategic consulting for tech startups specializing in AI, VR and AR applications.",
    icon: <FiCode className="text-3xl" />,
    color: "from-rose-500 to-pink-500",
    features: ["Product strategy", "Investor relations", "Prototype development"]
  },
  {
    title: "Research & Development",
    description: "Pioneering research at the intersection of technology and peacebuilding methodologies.",
    icon: <FiLayers className="text-3xl" />,
    color: "from-violet-500 to-purple-500",
    features: ["White papers", "Field studies", "Data analysis"]
  }
]

const ServiceCard = memo(({ service }) => (
  <div className="service-card">
    <div className="gradient-border" />
    <div className={`icon-container ${service.color}`}>
      {service.icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
    <p className="text-gray-300 mb-5 leading-relaxed">{service.description}</p>
    <div className="mt-auto">
      <h4 className="text-sm font-semibold text-gray-400 mb-2">KEY FEATURES:</h4>
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center text-gray-300">
            <span className={`w-2 h-2 rounded-full mr-2 bg-gradient-to-r ${service.color}`}></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
))

const Services = memo(() => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Services & Expertise
        </h1>
        <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  )
})

export default Services