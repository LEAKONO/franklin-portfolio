// components/FloatingElements.jsx
import { motion } from 'framer-motion'

const FloatingElement = ({ initialX, initialY, rotate, duration, size, color }) => {
  return (
    <motion.div
      initial={{ x: initialX, y: initialY, rotate: 0 }}
      animate={{ 
        x: [initialX, initialX + 50, initialX],
        y: [initialY, initialY + 30, initialY],
        rotate: rotate
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
      className={`absolute rounded-full opacity-20 ${color}`}
      style={{ width: size, height: size }}
    />
  )
}

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <FloatingElement 
        initialX={-100} 
        initialY={100} 
        rotate={360} 
        duration={15} 
        size="300px" 
        color="bg-purple-500" 
      />
      <FloatingElement 
        initialX={80} 
        initialY={300} 
        rotate={-180} 
        duration={20} 
        size="200px" 
        color="bg-indigo-500" 
      />
      <FloatingElement 
        initialX={-50} 
        initialY={500} 
        rotate={120} 
        duration={25} 
        size="250px" 
        color="bg-blue-500" 
      />
      <FloatingElement 
        initialX={300} 
        initialY={200} 
        rotate={-90} 
        duration={18} 
        size="150px" 
        color="bg-pink-500" 
      />
    </div>
  )
}