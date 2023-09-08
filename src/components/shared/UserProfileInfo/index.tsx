import Link from 'next/link';
import React from 'react'
import aavelogo from '../../../../public/aavelogo.png'
import Image from 'next/image'
import { VscRefresh } from 'react-icons/vsc';

 const UserProfileInfo = () => {
  return (
    
    <div className="  mt-0  flex items-center justify-between px-3 py-2 w-full h-24 border-2 border-white  rounded-lg ">
       <Link href={"./"}>
        {/* avatar name plus wallet name */}
        <div className=" py-1 px-1 flex w-60  items-center bg-white border-2  border-white  rounded-l-full rounded-r-lg">
           <Image className="" src={aavelogo} alt="image" width={40} height={2} />
          <div className=" ml-16">
          <h1>adeelMalik.eth </h1>
          <p className=" text-gray-400">0x0fe9..23fA5f</p>
          </div>
          </div>
         </Link>
         {/* <div className="border flex justify-center items-center text-gray-600 px-3 rounded-md " >
              <BiSearch />
              <input 
              type="text" 
              className=" focus:outline-none pl-1 pr-5 py-1 w-72"
              placeholder="Enter your wallet address"/>
              </div>  */}
      
              {/* hidden md:flex justify-center items-center */}
            <div className=" flex justify-center items-center">
            <div className="  invisible lg:visible grid-cols-4 grid-rows-2 grid  gap-1 ">
        <div className=" w-28 h-5 rounded-lg  text-right">
         <p className="text-gray-400">Active Since</p>
         </div>
        <div className="  w-20 h-5  rounded-lg text-right">
          <p className="text-gray-400">Balance</p>
           </div>
           <div className="  w-20 h-5  rounded-lg text-right">
          <p className="text-gray-400">NFTs</p>
           </div>
           <div className="  w-20 h-5  rounded-lg text-right">
          <p className="text-gray-400">Crypto</p>
           </div>
       
        <div className=" w-28 h-5 rounded-lg text-right">
          <p className="text-gray-900 text-base">27 Oct 2023</p>
        </div>
        <div className="w-20 h-5 rounded-lg text-right">
            <p className="text-gray-900 ">$144</p>
          </div>
          <div className="w-20 h-5 rounded-lg text-right">
            <p className="text-gray-900 ">30</p>
          </div>
          <div className="w-20 h-5 rounded-lg text-right">
            <p className="text-gray-900 ">20</p>
          </div>
          
         

      </div>
              <span className=" ml-14"><VscRefresh/></span>
           </div>
          

     </div>
  )
}

export default UserProfileInfo;