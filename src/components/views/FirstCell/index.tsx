import React from 'react'
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import GaugeChart from 'react-gauge-chart'

 
 const FirstCell = () => {
  return (
    <div className="">
        <div className="flex">
            <span className=" flex justify-center items-center pl-4 pt-4">
            <h1 className=" pr-2 text-2xl">MACRO Score</h1>
            <AiOutlineExclamationCircle/>
            </span>
        </div>
        <div className="flex justify-center ">
            {/* <span className=" flex justify-center items-center pl-4 pt-4">
            <h1 className=" pr-2 text-base lg:text-xl">Effects are Comming Soon </h1>
            <AiOutlineExclamationCircle/>
            </span> */}



<GaugeChart id="gauge-chart5"
  nrOfLevels={800}
  arcsLength={[0.3, 0.5, 0.2,0.3]}
  colors={['#5BE12C', '#F5CD19', '#EA4228','#EA4228']}
  percent={0.57}
  arcPadding={0.02}
  className=" "
  textColor={'black'}
/>
        </div>
      
    </div>
  )
}

export default FirstCell
