import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import nftfi from '../../../../public/nftfi.png'
import blend from '../../../../public/blend.webp'
import CryptoProfileInfo from '@/components/shared/CryptoProfileInfo'
import { useAppSelector } from '@/redux/store'



export const PreApprovals = () => {
   
  const {preApprovalNftfi ,preApprovalBendDao } = useAppSelector(s => s.wallet);
 

  return (
    
    <div className="p-3 ">
        <div className="flex">
            <span className=" flex justify-center items-center pl-4 pt-4">
            <h1 className=" pr-2 text-lg font-semibold ">Pre Approvals</h1>
            <AiOutlineExclamationCircle/>
            </span>
        </div>
       
            <CryptoProfileInfo image={blend}  title={"BendDAO"} value={preApprovalBendDao+"ETH"}/>
           
         
            <CryptoProfileInfo image={nftfi}  title={"NFTFI"} value={preApprovalNftfi+"ETH"}/>
           
     {/* if user have not any coins  */}
        {/* <div className=" text-sm animate-pulse duration-400 p-5 border rounded-lg bg-white mt-2 ml-2 mr-2 mb-4 py-10">
            <p className="">You don't use this protocol</p>
        </div> */}
      
    </div>

  )
}

export default PreApprovals
