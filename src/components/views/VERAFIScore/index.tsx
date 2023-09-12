import React, { useState } from 'react'
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import GaugeChart from 'react-gauge-chart'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { getWalletDetails } from '@/redux/features/wallet.slice'
import { calculatWalletScore } from '@/redux/features/wallet.slice/asyncThunks'
 

 const chartStyle = {
  height: 150,
  width: 300
}
 const mertercalculation= (score: number ) =>{
  const calScore =((score / 850)* 100) /100
 
  return calScore;
  
 }
 const VERAFIScore = () => {
   
  const dispatch = useAppDispatch();
  const {calUserRep,userinfo  } = useAppSelector(s => s.wallet);
   
   const handleCalculateWalletScore = () => {
     dispatch(calculatWalletScore());
     console.log(calUserRep)
   }
 
   
  
   
 
  
   const [userinfo1 ,setuserinfo1] = useState<boolean>(false)
  const [metervalue ,setmetervalue] = useState<number>(450)
  return (
    <div className="flex  flex-col w-full items-center">
        <div className="flex">
            <span className=" flex  items-center pl-4 pt-4">
            <h1 className=" pr-2 text-2xl font-semibold">VERAFI Score</h1>
            <span onClick={()=>{setmetervalue(450)  }}>< AiOutlineExclamationCircle/></span>
            </span>
        </div>
     {userinfo1?  
      <div className=" mt-5 flex ">
        <span>
<GaugeChart id="gauge-chart5" style={chartStyle}
  nrOfLevels={300}
  arcsLength={[0.3, 0.5, 0.2,0.3]}
  colors={['#EA4228','#ff8936','#F5CD19', '#5BE12C']}
  arcPadding={0.02}
  textColor={'white'}
  animate={true}
  marginInPercent={0.05}
  cornerRadius={6}
  arcWidth={0.10}
  needleColor={''}
  hideText
  // percent={mertercalculation(metervalue)}
  // formatTextValue={(value)=> metervalue + ' score'}
  
 
/>
<p className="flex justify-center pr-2 text-2xl">Score {metervalue}</p>
</span>
        </div>:
        <div className="p-2 mt-5 flex ">
        <span>
<GaugeChart id="gauge-chart5" style={chartStyle}
  nrOfLevels={300}
  arcsLength={[0.3, 0.5, 0.2,0.3]}
  colors={['#EA4228','#ff8936','#F5CD19', '#5BE12C']}
  arcPadding={0.02}
  textColor={'white'}
  animate={true}
  marginInPercent={0.05}
  cornerRadius={6}
  arcWidth={0.10}
  needleColor={''}
  needleBaseColor={''}
  hideText
 percent={mertercalculation(metervalue)}
  // formatTextValue={(value)=> metervalue + ' score'}
  
 
/>{userinfo?<button onClick={()=>{handleCalculateWalletScore()}}  className="bg-blue-500 text-white rounded-lg  px-8 py-2">Calculate Score </button>:
<button  className="bg-blue-500 text-white rounded-lg  px-8 py-2">Connect Wallet </button>}
</span>
        </div>}
      
    </div>
  )
}
 
export default VERAFIScore
