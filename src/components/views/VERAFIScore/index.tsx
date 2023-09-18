import React, { useEffect, useState } from 'react'
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import GaugeChart from 'react-gauge-chart'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { Skeleton } from '@/components/ui/skeleton'

 

 const chartStyle = {
  height: 150,
  width: 300
}
 const mertercalculation= (score: number ) =>{
  const calScore =((score / 850)* 100) /100
 
  return calScore;
  
 }
 const VERAFIScore = () => {
   
  
  const {calUserRep,userinfo , score,fetchingStatus } = useAppSelector(s => s.wallet);
   
  
   const [userinfo1 ,setuserinfo1] = useState<boolean>(false)


  return (
    <div className=" flex flex-col items-center justify-center">
        <div className="flex ">
            <span className=" flex  items-center pl-4 pt-4">
            <h1 className=" pr-2 text-2xl font-semibold">VERAFI Score</h1>
            <span onClick={()=>{ }}>< AiOutlineExclamationCircle/></span>
            </span>
        </div>
     {userinfo?  
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
  percent={mertercalculation(score)}
  // percent={mertercalculation(metervalue)}
  // formatTextValue={(value)=> metervalue + ' score'}
  />
<p className="flex justify-center pr-2 text-2xl">Score {fetchingStatus.calcCreditScore?<Skeleton className="h-4 w-[100px]" />:score}</p>
</span>
        </div>:
        <div className="mt-5">
        <span className="flex flex-col">
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
 percent={mertercalculation(score)}
  // formatTextValue={(value)=> metervalue + ' score'}
  
 
/>



  {/* <button  className="bg-blue-500 text-white rounded-lg  px-8 py-2 ">Connect Wallet</button> */}
  <p className="flex justify-center pr-2 text-2xl">Score 0</p>
</span>
        </div>}
      
    </div>
  )
}
 
export default VERAFIScore
