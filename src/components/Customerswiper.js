import * as React from 'react';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/effect-coverflow';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';
    
import img1 from '../images/swiper1.png'
import img2 from '../images/swiper2.png'
import img3 from '../images/swiper3.png'
import img4 from '../images/swiper4.png'
import img5 from '../images/swiper5.png'
import { FaStar } from "react-icons/fa";
const photos = [
  {img:img1, heading:"hjhjm",content:" nnn,,"},
  {img:img2, heading:"hjhjm",content:" nnn,,"},
  {img:img3, heading:"hjhjm",content:" nnn,,"},
  {img:img4, heading:"hjhjm",content:" nnn,,"},
  {img:img5, heading:"hjhjm",content:" nnn,,"},
];
const Customerswiper = () => {
  
  return (
   <div className='py-2 pb-10 mt-10'>
    <section className="  ">
      <div className="lg:mx-auto max-w-3xl mx-[1.5rem]">
       
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect={'coverflow'}
          loop={true}
          spaceBetween={-(200)}
          slidesPerView={3}
          
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
          className="coverflow"
        >
          {photos.map((p, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={p.img} alt="" />

              </SwiperSlide>
            );
          })}
          
        </Swiper>
      </div>
    </section>
    <div className='flex space-x-1 items-center justify-center text-xl text-green-800'>
           
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
    </div>
 <div className='flex items-center justify-center flex-col space-y-3 mt-2 px-20'>
          <h1 className='text-5xl font-bold'> Abigail Lily Taylor</h1>
          <h2 className='text-3xl'>Customer</h2>
          <p className='text-center text-gray-500 text-3xl'>Lorem ipsum dolor sit amet consectetur. Urna cum felis faucibus id
egestas erat. Fermentum ut elementum odio mollis sed sociis
volutpat mollis sed sociis volutpat</p>
</div>
    </div>
  
  )
}

export default Customerswiper