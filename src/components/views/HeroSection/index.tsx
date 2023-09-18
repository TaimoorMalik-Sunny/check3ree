
import React from 'react'
import PreApprovals from '../PreApprovals'

import VERAFIScore from '../VERAFIScore'
import CheckYourVERAFIReport from '../CheckYourVERAFIReport'
import UserProfileInfo from '../UserProfileInfo'
import { NFTsCryptoCoins } from '../NFTsCryptoCoins'
import Partners from '../Partners'
import CustomPreApproval from '../CustomPreApproval'
import { useAppSelector } from '@/redux/store'

 const HeroSection= () => {
  const {userinfo  } = useAppSelector(s => s.wallet);
  const {calUserRep } = useAppSelector(s => s.wallet);

  // const { address, balance, ageInDays } = useAppSelector(a => a.wallet);
  return (
    
    <div className=" ">
    <div className="   grid grid-cols-2 md:grid-cols-4 gap-2 ">
      {/* User profile info  */}
    <div className=" w-full col-span-4 row-span-1  h-full rounded-lg  border-2 border-white  text-center">
    <UserProfileInfo /></div>
       {/* Pre Approvals */}
     <div className="  w-full col-span-1 row-span-2 h-full rounded-lg  border-2 border-white  text-center">
    {calUserRep?<PreApprovals/>:<span className=' blur-sm'><PreApprovals/></span>}
    </div>
    {/* VERAFI Score */}
    <div className=" flex   w-full justify-center col-span-2 row-span-2 h-full rounded-lg  border-2 border-white  text-center">
     <VERAFIScore/>
     </div>
     {/* Custom Pre Approval */}
     <div className=" w-full col-span-1 row-span-2 h-full rounded-lg  border-2 border-white  text-center">
     {userinfo?<CustomPreApproval/>:<span className='blur-sm'><CustomPreApproval/></span>}
     </div>
     {/*Partners*/}
    
     <div className=" w-full col-span-1 row-span-1 h-full rounded-lg  border-2 border-white  text-center">
     {userinfo?<Partners/>:<span className='blur-sm'><Partners/></span>}
     </div>
     {/* Check your VERAFI Report */}
      <div className=" w-full col-span-2 h-full rounded-lg  border-2 border-white  text-center">
     {calUserRep?<CheckYourVERAFIReport/>:<span className=' blur-sm'><CheckYourVERAFIReport/></span>}
     </div>
     {/* NFTs Crypto Coins */}
     <div className=" w-full col-span-1 h-full rounded-lg  border-2 border-white  text-center">
    {userinfo? <NFTsCryptoCoins/>:
    <span className=' blur-sm'>
     <NFTsCryptoCoins/>
     </span>}    
     </div>
    
     <div className=" w-full col-span-1 h-full rounded-lg  border-2 border-white  text-center">
     {/* <ThirdCell/> */}
    
     </div>
    
     </div>
     

     </div>

  )
}
export default HeroSection
