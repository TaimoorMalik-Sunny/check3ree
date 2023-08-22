import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

export const FirstCell = () => {
  return (
     <div className="">
        <div className="flex ">
            <span className=" flex justify-center items-center pl-4 pt-4">
            <h1 className=" pr-2 text-2xl">Your Borrows</h1>
            <AiOutlineExclamationCircle/>
            </span>
        </div>
       
        
           <div className="animate-pulse duration-200 p-5 border bg-white mt-2 ml-2 mr-2 mb-4">
            <p className=" text-gray-400 ">You don't have any Borrows</p>
        </div>
      
    </div>
  )
}

export default FirstCell
