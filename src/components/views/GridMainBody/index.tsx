import React from 'react'
import FirstCell from '../FirstCell'
import SecondCell from '../SecondCell'
import ThirdCell from '../ThirdCell'
import FourthCell from '../FourthCell'
import FifthCell from '../FifthCell'


 const GridMainBody = () => {
  return (
    <div className=" mt-5">
        <div className="">
             <div className=" md:grid grid-cols-1   lg:grid-cols-2 grid gap-5">
        <div className=" w-full col-span-1 h-60 rounded-lg  border-2 border-white  text-center">
          <FirstCell/>
         </div>
        <div className="  w-full row-span-1 h-60  rounded-lg  border-2  border-white ">
          <SecondCell/>
           </div>
           {/* blur-sm   hover:blur-none */}
        <div className="   w-full row-span-2 h-full rounded-lg  border-2  border-white text-center"> 
        <ThirdCell/>
        </div>
        {/* blur-sm   hover:blur-none  */}
        <div className=" w-full col-span-1 h-full rounded-lg  border-2  border-white text-center">
          <FourthCell/>
        </div>
        {/* blur-sm   hover:blur-none */}
        <div className="   w-full col-span-1 h-full rounded-lg border-2  border-white text-center">
          <FifthCell/> 
          </div>

      </div>


    
        </div>
        
        </div>
  )
}

export default GridMainBody
