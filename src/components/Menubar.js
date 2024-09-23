import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import logo from '../images/logo.png'
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import img1 from '../images/header-image.png'
import { IoIosArrowRoundForward } from "react-icons/io";

const Menubar = () => {
  const [menuopen,setMenuopen] = useState(false)
  return (
    <div>
    <div className='flex px-20 container py-5 justify-between items-center'>
        <div className='text-3xl font-bold ' onClick={() => setMenuopen(!menuopen)}>
          {menuopen ? <IoMdClose size={50}/> : <CiMenuFries  size={40}/> }
          </div>
        <div>
            <img src={logo} />
        </div>
        <div className='flex space-x-3 text-3xl font-semibold'>
 <CiSearch />
<PiShoppingCartThin />
 <CiUser />
        </div>
    </div>
    {menuopen && (
      <div className='w-full h-auto  flex  left-0'>
      <div className='w-2/5 bg-white px-20  '>
      <div className='  w-96  border-black border-2'>
      <img src={img1} className='h-full' />
      </div>
      </div>
      <div className='w-3/5 '>
      <ul className='text-slate-400 capitalize text-7xl  flex flex-col space-y-5'>
        <li className='hover:text-black hover:underline flex items-center  '>
          <p>home</p>
          <IoIosArrowRoundForward  className='mt-2'/>
        </li>
        <li className='hover:text-black hover:underline '>about</li>
        <li className='hover:text-black hover:underline flex items-center  '>
          <p>blog</p>
          <IoIosArrowRoundForward  className='mt-2'/>
        </li>
        <li className='hover:text-black hover:underline '>contact</li>
        <li className='hover:text-black hover:underline flex items-center  '>
          <p>shop</p>
          <IoIosArrowRoundForward  className='mt-2'/>
        </li>
        <li className='hover:text-black hover:underline flex items-center  '>
          <p>pages</p>
          <IoIosArrowRoundForward  className='mt-2'/>
        </li>
      </ul>
      </div>
    </div>
    )}
    
    </div>
  )
}

export default Menubar