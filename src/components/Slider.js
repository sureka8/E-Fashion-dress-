import React from 'react'
import slider1 from '../images/home1.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import Content from './Content';
const Slider = () => {
  return (
    <div className='h-screen'>
    <div className='h-[87vh]  px-20 flex relative '>
        <div className=' w-[65%] h-full py-5'>
        <div className='text-xl absolute mt-8'>
            <h1 className='text-9xl capitalize'>Elevate Your Style <br/>
with Voguify
</h1>
<p className='mt-5 text-gray-500 text-3xl'>Lorem ipsum dolor sit amet consectetur. Urna cum felis faucibus id<br/>
egestas erat. Fermentum ut elementum odio mollis sed sociis<br/>
volutpat mollis sed sociis volutpat</p>
<button className='mt-14 border-2 px-2 py-2 border-black flex items-center'>
  <p>SHOP NOW</p>
  <IoIosArrowRoundForward />
</button>
        </div>
        </div>
        <div className='w-[35%] h-full '>
        <img src={slider1} className='w-full h-full' />
        </div>
    </div>
    </div>

  )
}

export default Slider