import React from 'react'
import {AiOutlineExclamationCircle} from 'react-icons/ai'


 const FirstCell = () => {
  return (
    <div className="">
        <div className="flex">
            <span className=" flex justify-center items-center pl-4 pt-4">
            <h1 className=" pr-2 text-2xl">MACRO Score</h1>
            <AiOutlineExclamationCircle/>
            </span>
        </div>
        <div className="flex justify-center mt-12">
            <span className=" flex justify-center items-center pl-4 pt-4">
            <h1 className=" pr-2 text-base lg:text-xl">Effects are Comming Soon </h1>
            <AiOutlineExclamationCircle/>
            </span>
        </div>
      
    </div>
  )
}

export default FirstCell
