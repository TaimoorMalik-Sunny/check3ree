import Link from 'next/link'
import React from 'react'
import aavelogo from '../../../../public/aavelogo.png'
import Image from 'next/image'

import {VscRefresh} from 'react-icons/vsc'
import GridMainBody from '../GridMainBody'
import SmallGridScore from '@/components/shared/SmallGridScore'
import HeroRHS from '../HeroRHS'

const Hero = () => {
  return (
    <div className=" flex flex-wrap lg:flex-nowrap ">
      {/* Left side div bg-herotitle */}
      <div className=" w-10/12">
      <div className="flex items-center justify-between px-3 py-2 w-full h-24 border-2 bg-herotitle border-white  rounded-lg backdrop-blur-lg">
       <Link href={"./"}>
        {/* avatar name plus wallet name */}
        <div className="py-1 px-1 flex w-60  items-center bg-white border-2  border-white  rounded-l-full rounded-r-lg">
           <Image className="" src={aavelogo} alt="image" width={50} height={2} />
          <div className=" ml-16">
          <h1>adeelMalik.eth </h1>
          <p className=" text-gray-400">0x0fe9..23fA5f</p>
          </div>
          </div>
         </Link>
      
            <div className="flex justify-center items-center">
             <SmallGridScore/>
              <span className=" ml-14"><VscRefresh/></span>
           </div>
          

     </div>
          <div>
      {/* Grid Place */}
        <GridMainBody/>
          </div>
     </div>

        {/* Right side dev */}
     <div className="">
     <HeroRHS/>


     </div>


    </div>
  )
}
export default Hero
