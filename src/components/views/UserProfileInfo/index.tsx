"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import aavelogo from '../../../../public/aavelogo.png'
import Image from 'next/image'
import { VscRefresh } from 'react-icons/vsc';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getWalletAttributes } from '@/redux/features/wallet.slice';
import { Skeleton } from '@/components/ui/skeleton';








const UserProfileInfo = () => {

  const dispatch = useAppDispatch();
const {userinfo , attribute, score ,fetchingStatus  } = useAppSelector(s => s.wallet);
 

 
 console.log(userinfo)
 console.log(attribute?.["wallet_balance_eth_att_1"])
//  const activeSince = moment().subtract(attribute?.wallet_age_days_att_7, 'days').calendar();
  
  // const [userinfo ,setuserinfo] = useState<boolean>(false)
  //  const { address, balance, ageInDays } = useAppSelector(a => a.wallet);'

  
  return (
    
    <div className="  mt-0  flex items-center justify-between px-3 py-2 w-full h-24 border-2 border-white  rounded-lg ">
       <Link href={"./"}>
        {/* avatar name plus wallet name
        <div className=" py-1 px-1 flex w-60  items-center bg-white border-2  border-white  rounded-l-full rounded-r-lg">
           <Image className="" src={aavelogo} alt="image" width={40} height={2} />
          <div className=" ml-16">
          <h1>adeelMalik.eth </h1>
        
          <p className=" text-gray-400">0x0fe9..23fA5f</p>

          </div>
           </div> */}
           {/* {fetchingStatus.getWalletDetails?<h1>adeelMalik.eth </h1>:""} */}

           
           {userinfo?
             <div className=" py-1 px-1 flex w-60  items-center bg-white border-2  border-white  rounded-l-full rounded-r-lg">
             <Image className="" src={aavelogo} alt="image" width={40} height={2} />
            <div className=" ml-16">
              
            <h1>adeelMalik.eth </h1>
            {/* <p className=" text-gray-400">0x0fe9..23fA5f</p> */}
            {/* {fetchingStatus.getWalletDetails?<Skeleton className="h-4 w-[200px]" />:<p className=" w-32 overflow-hidden overflow-ellipsis text-gray-400">{attribute?.wallet_address}</p>} */}
            <p className=" w-32 overflow-hidden overflow-ellipsis text-gray-400">{attribute?.wallet_address}</p>
            
  
            </div>
             </div>:
              <div className=" py-1 px-1 flex   items-center bg-white border-2  border-white  rounded-l-full rounded-r-lg">
             {fetchingStatus.getWalletDetails?<Skeleton className="h-12 w-12 rounded-full" />: <Image className="" src={aavelogo} alt="image" width={40} height={2} />}
             <div className="flex flex-col gap-2 ml-16">
             
             {fetchingStatus.getWalletDetails?<Skeleton className="h-4 w-[200px]" />:<h1>Wallet not connected </h1>}
             
             {fetchingStatus.getWalletDetails?<Skeleton className="h-4 w-[100px]" />: <p className=" underline text-gray-400">Connect Wallet</p>}
           
           
            
   
             </div>
             </div>
           
           }


         </Link>
         {/* <div className="border flex justify-center items-center text-gray-600 px-3 rounded-md " >
              <BiSearch />
              <input 
              type="text" 
              className=" focus:outline-none pl-1 pr-5 py-1 w-72"
              placeholder="Enter your wallet address"/>
              </div>  */}
      
              {/* hidden md:flex justify-center items-center */}
            
            <div className=" flex justify-center items-center">
            {userinfo? 
            <div className="  invisible lg:visible grid-cols-4 grid-rows-2 grid  gap-x-6  gap-y-3">
        <div className="  h-5 rounded-lg  text-right">
         <p className="text-gray-400">Active Since</p>
         </div>
        <div className="   h-5  rounded-lg text-right">
          <p className="text-gray-400">Balance</p>
           </div>
           <div className="   h-5  rounded-lg text-right">
          <p className="text-gray-400">NFTs</p>
           </div>
           <div className="  h-5  rounded-lg text-right">
          <p className="text-gray-400">Crypto</p>
           </div>
       
        <div className="  h-5 rounded-lg text-right">
          
          <p className="text-gray-900 text-base">27 Oct 2023</p>
          
        
        </div>
        <div className="h-5 rounded-lg text-right">
          
           <p className="text-gray-900 ">{attribute?.wallet_balance_eth_att_1} ETH</p>
          
          </div>
          <div className=" h-5 rounded-lg text-right">
            <p className="text-gray-900 ">300</p>
            
          </div>
          <div className=" h-5 rounded-lg text-right">
            <p className="text-gray-900 ">400</p>
            
          </div>
          
         
      
      </div>:
      <div className="  invisible lg:visible grid-cols-4 grid-rows-2 grid  gap-x-6  gap-y-3">
      <div className="  h-5 rounded-lg  text-right">
       <p className="text-gray-400">Active Since</p>
       </div>
      <div className="   h-5  rounded-lg text-right">
        <p className="text-gray-400">Balance</p>
         </div>
         <div className="   h-5  rounded-lg text-right">
        <p className="text-gray-400">NFTs</p>
         </div>
         <div className="  h-5  rounded-lg text-right">
        <p className="text-gray-400">Crypto</p>
         </div>
     
      <div className="  h-5 rounded-lg text-right">
        
       {fetchingStatus.getWalletDetails?<Skeleton className="h-4 w-[100px]" />: <p className="text-gray-900 text-base">DD-MM-YYYY.</p>}
        
      
      </div>
      <div className="h-5 rounded-lg text-right">
        
       {fetchingStatus.getWalletDetails? <Skeleton className="h-4 w-[100px]" /> :<p className="text-gray-900 ">0.00 ETH</p>}
        
        </div>
        <div className=" h-5 rounded-lg text-right">
       {fetchingStatus.getWalletDetails?<Skeleton className="h-4 w-[100px]" />:<p className="text-gray-900 ">XYZ</p>}
          
        </div>
        <div className=" h-5 rounded-lg text-right">
          {fetchingStatus.getWalletDetails?<Skeleton className="h-4 w-[100px]" />:<p className="text-gray-900 ">PQR</p>}
          
        </div>
        
       
    
    </div>
         
        }
              <span className=" hover:rotate-180 ml-14"><VscRefresh/></span>
              
           </div>
     </div>
  )
}

export default UserProfileInfo;

function moment() {
  throw new Error('Function not implemented.');
}
