import React  from 'react'
import aavelogo from '../../../../public/aavelogo.png'
import benddao from '../../../../public/benddao.jpeg'
import blend from '../../../../public/blend.webp'
import nftfi from '../../../../public/nftfi.png'
import Image from 'next/image'

 // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'

// Import Swiper styles
import 'swiper/css';
 

 



 const Partners = () => {

 

  SwiperCore.use([]);
  return (
    <div className="  p-3">
      <div className=" w-full  animate-pulse duration-400 flex justify-between ml-1 h-20  rounded-lg pt-3 pl-3 pr-3 bg-herotitle ">
      <h1 className=" text-lg font-semibold leading-none text-left tracking-tight">Partners</h1>
      <p className="pt-0 text-sm"></p>
      </div>
      
      <div>
      <Swiper
      spaceBetween={2}
      slidesPerView={5}
      
      autoplay={{
        delay:2000
      }}

     
    >
      
      <SwiperSlide>
      <Image className=" rounded-full" src={aavelogo} alt="image" width={40} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="rounded-full" src={benddao} alt="image" width={40} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="rounded-full" src={blend} alt="image" width={40} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="rounded-full" src={nftfi} alt="image" width={40} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="rounded-full" src={benddao} alt="image" width={40} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="rounded-full" src={blend} alt="image" width={40} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="rounded-full" src={nftfi} alt="image" width={40} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="rounded-full" src={benddao} alt="image" width={40} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="rounded-full" src={blend} alt="image" width={40} height={2} />
     </SwiperSlide>
     
      
    </Swiper>
      
    {/* // "react": "18.2.0", */}

      </div>



    </div>
  )
}

export default Partners
