import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface ImageProps {
  title: string;
  value: string;
  image: StaticImageData | string;
}
const CryptoProfileInfo = ({ title, value, image }: ImageProps) => {
  return (
    <div className=" flex items-center justify-between bg-white rounded-lg p-3  border mt-2 ml-1 mr-0 ">
      <span className="flex items-center ">
        {typeof image === 'string' ?
          <img src={image} alt="" className='w-10' /> :
          <Image className="" src={image} alt="image" width={40} height={2} />
        }
        <h1 className="ml-2 text-base">{title}</h1>
      </span>
      <p className=" text-xs overflow-hidden overflow-ellipsis text-gray-500">{value}</p>
    </div>
  )
}

export default CryptoProfileInfo
