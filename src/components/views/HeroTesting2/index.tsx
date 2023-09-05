
import React from 'react'



import ThirdCell from '../ThirdCell'
import { Searchbar } from '@/components/shared/Search'
import FirstCell from '../FirstCell'
import SecondCell from '../SecondCell'
import UserProfileInfo from '@/components/shared/UserProfileInfo'
import { HeroRHSDown } from '../HeroRHSDown'
import HeroRHS from '../HeroRHS'

 const HeroTesting = () => {
  return (

    <div className=" ">
    <div className="   grid grid-cols-2 md:grid-cols-4 gap-2 ">
      {/* User profile info  */}
    <div className=" w-full col-span-4 row-span-1  h-full rounded-lg  border-2 border-white  text-center">
    <UserProfileInfo/>
   
     
       </div>
       {/* Search  */}
     <div className=" flex items-center justify-center w-full col-span-1 row-span-2 h-full rounded-lg  border-2 border-white  text-center">
   
     <ThirdCell/>
    </div>
    <div className=" flex   w-full col-span-2 row-span-2 h-full rounded-lg  border-2 border-white  text-center">
     <FirstCell/>
     </div>
     
     <div className=" w-full col-span-1 row-span-2 h-full rounded-lg  border-2 border-white  text-center">
     <Searchbar/>
     </div>
     {/* meter portion  */}
    
     <div className=" w-full col-span-1 row-span-1 h-full rounded-lg  border-2 border-white  text-center">
     <HeroRHS/>
     </div>
    
    
     <div className=" w-full col-span-2 h-full rounded-lg  border-2 border-white  text-center">
     <SecondCell/>
     </div>
     <div className=" w-full col-span-1 h-full rounded-lg  border-2 border-white  text-center">
     <HeroRHSDown/>
     </div>
    
     <div className=" w-full col-span-1 h-full rounded-lg  border-2 border-white  text-center">
     {/* <ThirdCell/> */}
    
     </div>
    
     </div>
     

     </div>

  )
}
export default HeroTesting
