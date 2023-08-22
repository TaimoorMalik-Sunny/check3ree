import React from 'react'
import aavelogo from '../../../../public/aavelogo.png'
import Image from 'next/image'

 const CardGridCell3 = () => {
  return (
     <div className="animate-pulse duration-200 flex items-center justify-between bg-white rounded-lg p-5 border mt-2 ml-2 mr-2 ">
            <span className="flex items-center">
            <Image className="" src={aavelogo} alt="image" width={50} height={2} />
            <h1 className="ml-5 ">Aave</h1>
            </span>
            <p>You don't use this protocol</p>
        </div>
  )
}

export default CardGridCell3
