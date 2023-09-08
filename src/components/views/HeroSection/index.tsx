
import React from 'react'
import PreApprovals from '../PreApprovals'

import VERAFIScore from '../VERAFIScore'
import CheckYourVERAFIReport from '../CheckYourVERAFIReport'
import UserProfileInfo from '@/components/shared/UserProfileInfo'
import { NFTsCryptoCoins } from '../NFTsCryptoCoins'
import Partners from '../Partners'
import CustomPreApproval from '../CustomPreApproval'

 const HeroSection= () => {
  return (

    <div className=" ">
    <div className="   grid grid-cols-2 md:grid-cols-4 gap-2 ">
      {/* User profile info  */}
    <div className=" w-full col-span-4 row-span-1  h-full rounded-lg  border-2 border-white  text-center">
    <UserProfileInfo/></div>
       {/* Pre Approvals */}
     <div className="  w-full col-span-1 row-span-2 h-full rounded-lg  border-2 border-white  text-center">
    <PreApprovals/>
    </div>
    {/* VERAFI Score */}
    <div className=" flex   w-full col-span-2 row-span-2 h-full rounded-lg  border-2 border-white  text-center">
     <VERAFIScore/>
     </div>
     {/* Custom Pre Approval */}
     <div className=" w-full col-span-1 row-span-2 h-full rounded-lg  border-2 border-white  text-center">
     <CustomPreApproval/>
     </div>
     {/*Partners*/}
    
     <div className=" w-full col-span-1 row-span-1 h-full rounded-lg  border-2 border-white  text-center">
     <Partners/>
     </div>
     {/* Check your VERAFI Report */}
      <div className=" w-full col-span-2 h-full rounded-lg  border-2 border-white  text-center">
     <CheckYourVERAFIReport/>
     </div>
     {/* NFTs Crypto Coins */}
     <div className=" w-full col-span-1 h-full rounded-lg  border-2 border-white  text-center">
     <NFTsCryptoCoins/>
     </div>
    
     <div className=" w-full col-span-1 h-full rounded-lg  border-2 border-white  text-center">
     {/* <ThirdCell/> */}
    
     </div>
    
     </div>
     

     </div>

  )
}
export default HeroSection
