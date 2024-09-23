import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import img1 from '../images/article-1.png'
import img2 from '../images/article-2.png'
import img3 from '../images/article-3.png'
const Recentarticle = () => {
  return (
    <div className='container px-20 py-5 h-auto'>
<div className='flex justify-between items-center '>
    <h1 className='text-6xl font-bold uppercase'>recent articles</h1>
    <button className='mt-14 border-2 px-5 py-4 border-black flex items-center text-xl'>
  <p className=''>View All</p>
  <IoIosArrowRoundForward size={30} className='mt-1'/>
</button>
</div>
<div className='grid grid-cols-2 gap-5 mt-5'>
    <div className=' h-96 flex bg-white shadow-2xl'>
    <div className='w-3/5 h-full'>
    <img src={img1} className='w-full h-full object-cover' />
    </div>
    <div className='w-2/4  h-full p-5'>
    <div className='text-2xl flex justify-between items-center text-slate-400'>
        <p>By <br /> @Admin</p>
        <p>12, MARCH <br /> 2024</p>
    </div>
    <p className='text-4xl mt-3'>Behind <br />Seams : The Fashion</p>
    <p className=' text-gray-500 text-2xl mt-3'>Lorem ipsum dolor sit amet consectetur. Urna felis faucibus </p>
    </div>
    </div>


    <div className=' row-span-2 bg-white shadow-2xl h-[90%]'>
        <img src={img3} />
        <div className='p-5'>
        <div className='text-2xl flex space-x-10 items-center text-slate-400'>
        <p>By  @Admin</p>
        <p>12, MARCH  2024</p>
    </div>
    <p className='text-4xl mt-3'>Must-Have <br />Fashion Accessories </p>
    <p className=' text-gray-500 text-2xl mt-3'>Lorem ipsum dolor sit amet consectetur. Urna felis faucibus id
egestas erat. Fermentum ut elementum odio mollis sed sociis
volutpat mollis sed sociis volutpa</p>
    </div>
    </div>


    <div className=' h-96 flex bg-white shadow-2xl'>
    <div className='w-3/5 h-full'>
    <img src={img2} className='w-full h-full object-cover' />
    </div>
    <div className='w-2/4  h-full p-5'>
    <div className='text-2xl flex justify-between items-center text-slate-400'>
        <p>By <br /> @Admin</p>
        <p>12, MARCH <br /> 2024</p>
    </div>
    <p className='text-4xl mt-3'>Must-Have <br />Fashion Accessories </p>
    <p className=' text-gray-500 text-2xl mt-3'>Lorem ipsum dolor sit amet consectetur. Urna felis faucibus </p>
    </div>
    </div>
</div>
    </div>
  )
}

export default Recentarticle