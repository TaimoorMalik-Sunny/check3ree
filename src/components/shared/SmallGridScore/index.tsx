import React from 'react'

 const SmallGridScore = () => {
  return (
    <div className=" ">
            <div className="  invisible lg:visible grid-cols-2 grid-rows-2 grid  gap-1 ">
        <div className=" w-28 h-5 rounded-lg  text-right">
         <p className="text-gray-400">Active Since</p>
         </div>
        <div className="  w-20 h-5  rounded-lg text-right">
          <p className="text-gray-400">Balance</p>
           </div>
       
        <div className=" w-28 h-5 rounded-lg text-right">
          <p className="text-gray-900 text-base">27 Oct 2023</p>
        </div>
        <div className="w-20 h-5 rounded-lg text-right">
            <p className="text-gray-900 ">$144</p>
          </div>
          
         

      </div>
    </div>
  )
}

export default SmallGridScore