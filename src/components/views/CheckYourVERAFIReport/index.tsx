import { getWalletDetails } from '@/redux/features/wallet.slice';
import { useAppDispatch, useAppSelector } from '@/redux/store'
import React from 'react'

const CheckYourVERAFIReport = () => {
  const dispatch = useAppDispatch();
  const { address, balance, ageInDays } = useAppSelector(s => s.wallet);
  
  const handleGetWalletDetails = () => {
    dispatch(getWalletDetails());
  }
  
  return (
    <div  >
      <div className=" flex flex-col items-center justify-center    md:mt-10 ">
        <div>
          <h1 className=" pr-2 text-base lg:text-xl">Check Your VERAFI Report</h1>
        </div>
        <span className="mt-4">
          <div className=" lg:flex items-center">
            <div className=" w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 hover:p-1">
              <button className="bg-black text-yellow-50 rounded-full  px-8 py-2  ">Download Report</button>
            </div>
          </div>
        </span>


      </div>
    </div>
  )
}
export default CheckYourVERAFIReport