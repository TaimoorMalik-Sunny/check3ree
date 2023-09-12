'use client'
import { motion } from 'framer-motion'
import HeroSection from '@/components/views/HeroSection'

export default function Home() {

  
  return (
   <div className="">
        <motion.div
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
    
      <HeroSection/>
     
     
     </motion.div> 
   
   </div>
    )
}
