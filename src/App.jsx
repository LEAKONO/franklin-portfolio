// App.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Home from './sections/Home'
import About from './sections/About'
import Services from './sections/Services'
import School from './sections/School'
import Contact from './sections/Contact'
import Experience from './sections/Experience'

const sections = {
  home: <Home />,
  about: <About />,
  services: <Services />,
  school: <School />,
  contact: <Contact />,
  experience: <Experience />
}

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    // Check if window is defined (for SSR)
    if (typeof window !== 'undefined') {
      // Set sidebar to open by default on desktop
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setIsSidebarOpen(true)
        } else {
          setIsSidebarOpen(false)
        }
      }
      
      // Set initial state
      handleResize()
      
      // Add event listener
      window.addEventListener('resize', handleResize)
      
      // Cleanup
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      <Sidebar 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12"
          >
            {sections[currentSection]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App