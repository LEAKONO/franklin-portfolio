// components/Sidebar.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiBriefcase, FiBook, FiMail, FiAward } from 'react-icons/fi';
import { FiMenu, FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'home', icon: <FiHome size={18} />, label: 'Home' },
  { id: 'about', icon: <FiUser size={18} />, label: 'About' },
  { id: 'experience', icon: <FiAward size={18} />, label: 'Experience' },
  { id: 'services', icon: <FiBriefcase size={18} />, label: 'Services' },
  { id: 'school', icon: <FiBook size={18} />, label: 'Education' },
  { id: 'contact', icon: <FiMail size={18} />, label: 'Contact' }
];

export default function Sidebar({ currentSection, setCurrentSection, isOpen, setIsOpen }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <AnimatePresence>
        {isMobile && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-6 right-6 z-50 md:hidden p-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
            aria-label="Menu"
          >
            {isOpen ? (
              <FiX size={24} className="text-white" />
            ) : (
              <FiMenu size={24} className="text-white" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: isMobile ? -320 : 0 }}
        animate={{
          x: isOpen ? 0 : isMobile ? -320 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed md:relative z-40 h-full w-72 bg-gray-900 shadow-2xl border-r border-gray-800`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-2xl font-bold text-white">Franklin M. Murianki</h1>
            <p className="text-purple-400 mt-2 text-sm font-medium">Technology & Peace Advocate</p>
          </motion.div>
          
          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <button
                    onClick={() => {
                      setCurrentSection(item.id);
                      if (isMobile) setIsOpen(false);
                    }}
                    className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 ${
                      currentSection === item.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <span className={`mr-3 ${currentSection === item.id ? 'text-white' : 'text-purple-400'}`}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                    {currentSection === item.id && (
                      <motion.span
                        layoutId="activeItem"
                        className="ml-auto w-2 h-2 bg-white rounded-full"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>
          
          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-auto pt-6 border-t border-gray-800"
          >
            <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Franklin M. Murianki</p>
            <p className="text-gray-600 text-xs mt-1">All Rights Reserved</p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}