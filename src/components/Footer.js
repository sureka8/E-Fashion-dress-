import React from 'react'
import img  from '../images/footer-logo.png'
const Footer = () => {
  return (
    <div className='py-10 px-64'>
        <ul className='flex items-center space-x-8 text-3xl font-bold  justify-center uppercase'>
            <li>Home</li>
            <li>about us</li>
            <li>contact us</li>
            <li>Blogs</li>
        </ul>
        <ul  className='flex items-center space-x-5 text-xl  uppercase mt-5 px-5'>
            <li>#  +1 (321) 009 008</li>
            <li>#  EMAIL@EXAMPLE.COM</li>
            <li>#  EVERYDAY: 9AM - 10PM</li>
            <li>#  STORE LOCATOR</li>
        </ul>
        <div className='mt-10'>
            <img src={img} />
        </div>
    </div>
  )
}

export default Footer