import React from 'react'

 const SmallGridScore = () => {
  return (
    <div className="">
            <div className=" invisible lg:visible grid-cols-3 grid-rows-2 grid  gap-1">
        <div className=" w-28 h-5 rounded-lg  text-right">
         <p className="text-gray-400">Active Since</p>
         </div>
        <div className="  w-20 h-5  rounded-lg text-right">
          <p className="text-gray-400">Balance</p>
           </div>
        <div className="w-32 h-5 rounded-lg text-right"> 
         <p className="text-gray-400">Your Rank</p>
        </div>
        <div className=" w-28 h-5 rounded-lg text-right">
          <p className="text-gray-900 text-base">27 Oct 2023</p>
        </div>
        <div className="w-20 h-5 rounded-lg text-right">
            <p className="text-gray-900 ">$144</p>
          </div>
           <div className="   w-36 h-5 rounded-lg text-right">
           <span className="text-gray-900 text-base">45926</span>
           <span className="text-gray-400 text-base"> of 59081</span>
          </div>
         

      </div>
    </div>
  )
}

export default SmallGridScore