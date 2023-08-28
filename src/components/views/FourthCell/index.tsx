import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

 const FourthCell = () => {
  return (
    
      <div className="">
        <div className="flex ">
            <span className=" flex justify-center items-center pl-4 pt-4">
            <h1 className=" pr-2 text-2xl">Your Deposite</h1>
            <AiOutlineExclamationCircle/>
            </span>
        </div>
       
        
           <div className="animate-pulse duration-400 p-5 border bg-white mt-2 ml-2 mr-2 mb-4">
            <p className=" text-gray-400 ">You don't have any deposite</p>
        </div>
      
    </div>
  )
}

export default FourthCell
