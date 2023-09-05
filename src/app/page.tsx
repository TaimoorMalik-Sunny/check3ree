'use client'
import Hero from '@/components/views/Hero'
import HeroTesting from '@/components/views/HeroTesting'
import HeroTesting2 from '@/components/views/HeroTesting2'
import Mainbody from '@/components/views/MainBody'
import { motion } from 'framer-motion'

export default function Home() {

  
  return (
   <div className="">
        <motion.div
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* <GridMainBody/> */}
      {/* <HeroTesting/> */}
      <HeroTesting2/>
     
    {/* <Hero/> */}
    {/* <Mainbody/> */}
     </motion.div> 
   
   </div>
    )
}
