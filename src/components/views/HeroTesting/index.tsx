import Link from 'next/link'
import React from 'react'
import aavelogo from '../../../../public/aavelogo.png'
import Image from 'next/image'

import {VscRefresh} from 'react-icons/vsc'
import GridMainBody from '../GridMainBody'
import SmallGridScore from '@/components/shared/SmallGridScore'
import HeroRHS from '../HeroRHS'
import { BiSearch } from 'react-icons/bi'
import { HeroRHSDown } from '../HeroRHSDown'

 const HeroTesting = () => {
  return (

    <div className=" ">
    <div className="   grid grid-cols-2 md:grid-cols-3 gap-2 ">
       {/* <div className=" w-full col-span-1  rounded-lg  border-2 border-white  text-center">
           <div className="border flex items-center text-gray-600 px-3 rounded-md " >
              <BiSearch />
              <input 
              type="text" 
              className=" focus:outline-none pl-1 pr-5 py-1 w-72"
              placeholder="Enter your wallet address"/>
              </div>
       </div> */}
    <div className=" w-full col-span-2   rounded-lg  border-2 border-white  text-center">
  
    
    <div className="  mt-10  flex items-center justify-between px-3 py-2 w-full h-24 border-2 border-white  rounded-lg ">
       <Link href={"./"}>
        {/* avatar name plus wallet name */}
        <div className=" py-1 px-1 flex w-60  items-center bg-white border-2  border-white  rounded-l-full rounded-r-lg">
           <Image className="" src={aavelogo} alt="image" width={50} height={2} />
          <div className=" ml-16">
          <h1>adeelMalik.eth </h1>
          <p className=" text-gray-400">0x0fe9..23fA5f</p>
          </div>
          </div>
         </Link>
         <div className="border flex justify-center items-center text-gray-600 px-3 rounded-md " >
              <BiSearch />
              <input 
              type="text" 
              className=" focus:outline-none pl-1 pr-5 py-1 w-72"
              placeholder="Enter your wallet address"/>
              </div> 
      
              {/* hidden md:flex justify-center items-center */}
            <div className=" flex justify-center items-center">
             <SmallGridScore/>
              <span className=" ml-14"><VscRefresh/></span>
           </div>
          

     </div>



   
     </div>
     <div className=" w-full col-span-1  rounded-lg  border-2 border-white  text-center">
     
     <HeroRHS/>

     </div>
     <div className=" w-full col-span-2 h-full rounded-lg  border-2 border-white  text-center">
     

     <GridMainBody/>
     </div>
     <div className=" w-full col-span-1 h-60 rounded-lg  border-2 border-white  text-center">
     
     <HeroRHSDown/>
     </div>
     </div>

     </div>

  )
}
export default HeroTesting
