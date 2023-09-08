import React from 'react'
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import GaugeChart from 'react-gauge-chart'
 
 const metervalue = 800
 const chartStyle = {
  height: 150,
  width: 300
}
 const mertercalculation= (score: number ) =>{
  const calScore =((score / 850)* 100) /100
 
  return calScore;
  
 }
 const VERAFIScore = () => {
  return (
    <div className="flex  flex-col w-full items-center">
        <div className="flex">
            <span className=" flex  items-center pl-4 pt-4">
            <h1 className=" pr-2 text-2xl font-semibold">VERAFI Score</h1>
            <AiOutlineExclamationCircle/>
            </span>
        </div>
        <div className=" mt-5 flex ">
            {/* <span className=" flex justify-center items-center pl-4 pt-4">
            <h1 className=" pr-2 text-base lg:text-xl">Effects are Comming Soon </h1>
            <AiOutlineExclamationCircle/>
            </span> */}


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
<p className="flex justify-center pr-2 text-2xl">Score 550</p>
</span>
        </div>
      
    </div>
  )
}

export default VERAFIScore
