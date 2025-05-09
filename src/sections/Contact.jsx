import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Contact() {
  return (
    <div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-12"
      >
        Get In Touch
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
        >
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-3 mr-4 rounded-full bg-purple-600/20 text-purple-400">
                <FiMail size={20} />
              </div>
              <div>
                <h3 className="text-gray-400 text-sm">Email</h3>
                <a href="mailto:kipaza@gmail.com" className="text-white hover:text-purple-300 transition-colors">
                  kipaza@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 mr-4 rounded-full bg-purple-600/20 text-purple-400">
                <FiPhone size={20} />
              </div>
              <div>
                <h3 className="text-gray-400 text-sm">Phone</h3>
                <a href="tel:+254742406487" className="text-white hover:text-purple-300 transition-colors">
                  +254 742 406 487
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 mr-4 rounded-full bg-purple-600/20 text-purple-400">
                <FiMapPin size={20} />
              </div>
              <div>
                <h3 className="text-gray-400 text-sm">Location</h3>
                <p className="text-white">
                  Kiboko Phase III, Tsavo Close Hse Number 49<br />
                  P.O. Box 4086 -0100 Thika<br />
                  Residence: Diani, Kwale County
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-purple-600 transition-colors text-white">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-purple-600 transition-colors text-white">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
        >
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">Send Me a Message</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-all w-full"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}