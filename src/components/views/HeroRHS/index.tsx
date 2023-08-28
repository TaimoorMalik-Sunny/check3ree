import React  from 'react'
import aavelogo from '../../../../public/aavelogo.png'
import Image from 'next/image'

 // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'

// Import Swiper styles
import 'swiper/css';
 



 const HeroRHS = () => {

  SwiperCore.use([]);
  return (
    <div>
      <div className=" w-full  animate-pulse duration-400 flex justify-between ml-1 h-28 border-2 border-white rounded-lg pt-3 pl-3 pr-3 bg-herotitle ">
      <h1 className="text-2xl font-semibold leading-none text-left tracking-tight">Loan Opportunities</h1>
      <p className="pt-0 text-sm">comming soon</p>
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
      <Image className="" src={aavelogo} alt="image" width={50} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="" src={aavelogo} alt="image" width={50} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="" src={aavelogo} alt="image" width={50} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="" src={aavelogo} alt="image" width={50} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="" src={aavelogo} alt="image" width={50} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="" src={aavelogo} alt="image" width={50} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="" src={aavelogo} alt="image" width={50} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="" src={aavelogo} alt="image" width={50} height={2} />
     </SwiperSlide>
     <SwiperSlide>
      <Image className="" src={aavelogo} alt="image" width={50} height={2} />
     </SwiperSlide>
     
      
    </Swiper>
      
    {/* // "react": "18.2.0", */}

      </div>



    </div>
  )
}

export default HeroRHS
