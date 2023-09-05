import Image from 'next/image'
import React from 'react'
import { BiLogoDiscordAlt } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import bandwlogo from '../../../../public/blackwhitelogo.png'

 const Footer = () => {
  return (
    <div>
         <div className="flex flex-wrap md:flex justify-between items-center m-1 px-2 py-0 border-2  border-t-white">
           {/* for icons */}
            <div className="flex flex-wrap p-5 gap-4">
                <BsTwitter size={25}/>
                <BiLogoDiscordAlt size={25}/>
                <Image src={bandwlogo} width={25} height={25} alt="logo"/>


            </div>
            {/* for text  */}
            <div className="flex flex-wrap justify-center items-center lg:flex gap-5">
            <p className="text-gray-500 hover:text-gray-950 underline animate-pulse duration-600">Terms & Conditions</p>
            <p className="text-gray-500 hover:text-gray-950 underline animate-pulse duration-600">Privacy Policy</p>
            <p className="text-gray-500 hover:text-gray-950 underline animate-pulse duration-600">FAQ</p>
            <p className="text-gray-500 hover:text-gray-950 underline animate-pulse duration-600">Documentation</p>
            <p className="text-gray-500 hover:text-gray-950 underline animate-pulse duration-600">© 2023 Check3ree</p>


            </div>
         </div>
    </div>
  )
}

export default Footer 
