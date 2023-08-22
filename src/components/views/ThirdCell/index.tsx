import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import Image from 'next/image'
import aavelogo from '../../../../public/aavelogo.png'
import CardGridCell3 from '@/components/shared/CardGridCell3'

export const ThirdCell = () => {
  return (
    
    <div className="">
        <div className="flex">
            <span className=" flex justify-center items-center pl-4 pt-4">
            <h1 className=" pr-2 text-2xl">Protocols</h1>
            <AiOutlineExclamationCircle/>
            </span>
        </div>
       
        <CardGridCell3/>
         <CardGridCell3/>
           <div className="animate-pulse duration-200 p-5 border rounded-lg bg-white mt-2 ml-2 mr-2 mb-4 py-10">
            <p className="">You don't use this protocol</p>
        </div>
      
    </div>

  )
}

export default ThirdCell
