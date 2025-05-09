// components/Sidebar.jsx
import { motion } from 'framer-motion'
import { FiHome, FiUser, FiBriefcase, FiBook, FiMail, FiAward } from 'react-icons/fi'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { id: 'home', icon: <FiHome />, label: 'Home' },
  { id: 'about', icon: <FiUser />, label: 'About' },
  { id: 'experience', icon: <FiAward />, label: 'Experience' },
  { id: 'services', icon: <FiBriefcase />, label: 'Services' },
  { id: 'school', icon: <FiBook />, label: 'Education' },
  { id: 'contact', icon: <FiMail />, label: 'Contact' }
]

export default function Sidebar({ currentSection, setCurrentSection, isOpen, setIsOpen }) {
  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-full bg-purple-700 text-white"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <motion.div 
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed md:relative z-40 h-full w-64 bg-gray-800 shadow-xl"
      >
        <div className="p-8 flex flex-col h-full">
          <div className="mb-12">
            <h1 className="text-2xl font-bold text-white">Franklin M. Murianki</h1>
            <p className="text-purple-300">Peacebuilder & Tech Innovator</p>
          </div>
          
          <nav className="flex-1">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setCurrentSection(item.id)
                      setIsOpen(false)
                    }}
                    className={`flex items-center w-full p-3 rounded-lg transition-all ${
                      currentSection === item.id
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-auto pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">© 2024 Franklin M. Murianki</p>
          </div>
        </div>
      </motion.div>
    </>
  )
}