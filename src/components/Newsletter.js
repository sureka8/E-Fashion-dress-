import React from 'react'
import img from '../images/envelope.png'
const Newsletter = () => {
  return (
    <div className='py-10 w-full  mt-10 flex items-center justify-center '>
    <div className='flex relative '>
      <div className='h-96 w-[50rem] px-32 bg-white py-20'>
        <p className='text-5xl font-semibold text-center'>Register Now and Enjoy<br />
        a 20% Discount on Your <br /> Initial Order!</p>
        <div className='h-14 w-full  border-black border-2 mt-10 flex'>
          <div className='w-3/5 border-r-black border-r-2 h-full px-3 py-3'>
          <input type='text' placeholder='Your Email' />
          </div> 
          <div className='w-2/5 flex   '>
          <div className='w-4/5 px-3  border-r-black border-r-2 h-full py-3 hover:bg-black hover:text-white'>
          <button >subscribe</button>
          </div>
         
          <div className='w-1/5 h-full px-3  '>

          </div>
         
         
          </div>
        </div>
      </div>
      <div className='h-40 w-40 absolute -right-28'>
      <img src={img} className='h-auto w-auto' />
      </div>
      </div>
    </div>
  )
}

export default Newsletter