import React,{useState,useEffect} from 'react'
import bg1 from '../images/inner-banner-1.png'
import bg2 from '../images/inner-banner-2.png'
import bg3 from '../images/inner-banner-3.png'
import bg4 from '../images/inner-banner-4.png'
import bg5 from '../images/inner-banner-5.png'
import brand1 from '../images/brand-1.png'
import brand2 from '../images/brand-2.png'
import brand3 from '../images/brand-3.png'
import brand4 from '../images/brand-4.png'
import brand5 from '../images/brand-5.png'
const Brands = () => {
    const [backgroundImage, setBackgroundImage] = useState(bg1);
  const backgrounds = [bg1, bg2, bg3, bg4, bg5];
  const [scrollCount, setScrollCount] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Calculate which background image to display based on scroll position
    const newScrollCount = Math.floor(scrollPosition / window.innerHeight);
    if (newScrollCount < backgrounds.length) {
      setBackgroundImage(backgrounds[newScrollCount]);
    }

    // Set scroll count
    setScrollCount(newScrollCount);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if the last background has been shown
  useEffect(() => {
    if (scrollCount >= backgrounds.length) {
      // Logic to transition to the next component or section
      // e.g., redirecting or changing the state to show another component
      console.log("Transitioning to the next component...");
      // You can call a function here to render the next component
    }
  }, [scrollCount]);

  return (
    <div className='h-screen ' 
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}>
     <div className='flex  h-full w-full'>
        <div className='border-r-2 border-r-slate-300 w-1/5 '>
        <div className='flex flex-col items-center justify-center py-40  space-y-10'>
            <img src={brand1} />
            <p className='text-center text-white  text-lg font-bold '>Lorem ipsum dolor sit amet consectetur. Urna faucibus
            egestas erat. Fermentum towmoro.</p>
            <button className='border-white border-2 uppercase text-white px-10 py-4'> Shop Now</button>
        </div>
        </div>
        <div className='border-r-2 border-r-slate-300 w-1/5  flex items-center justify-center'>
        <img src={brand2} />

        </div>
        <div className='border-r-2 border-r-slate-300 w-1/5 flex items-center justify-center'>
        <img src={brand3} />
        </div>
        <div className='border-r-2 border-r-slate-300 w-1/5 flex items-center justify-center'>
        <img src={brand4} />
        </div>
        <div className='border-r-2 border-r-slate-300 w-1/5 flex items-center justify-center'>
        <img src={brand5} />
        </div>
     </div>
    </div> 
  )
}

export default Brands