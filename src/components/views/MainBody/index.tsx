'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import GridMainBody from '../GridMainBody'





export const MainBody = () => {

  return (
    <div className="">


         <motion.div
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 2.5, ease: 'easeInOut' }}
    >
      {/* <GridMainBody/> */}
      
     
    </motion.div>
 
 
    </div>
  )
}
export default MainBody





