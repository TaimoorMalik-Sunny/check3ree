'use client'
import Hero from '@/components/views/Hero'
import HeroTesting from '@/components/views/HeroTesting'
import Mainbody from '@/components/views/MainBody'
import { motion } from 'framer-motion'

export default function Home() {

  
  return (
   <div className="bg-gradient-to-t from-white via-red-50  to-white">
        <motion.div
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {/* <GridMainBody/> */}
      <HeroTesting/>
     
    {/* <Hero/> */}
    {/* <Mainbody/> */}
     </motion.div> 
   
   </div>
    )
}
