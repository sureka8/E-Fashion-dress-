import React from 'react'
import Slider from '../components/Slider'
import Customerswiper from '../components/Customerswiper'
import Recentarticle from '../components/Recentarticle'
import Newsletter from '../components/Newsletter'
import TrendingProducts from '../components/TrendingProducts'
import Branding from '../components/Branding'
import Herosection from '../components/Herosection'
import Footer from '../components/Footer'
import BackgroundVideo from '../components/BackgroundVideo'
import Brands from '../components/Brands'

const Home = () => {
  return (
    <div className='bg-slate-100'>
    <Slider />
    <TrendingProducts />
    <BackgroundVideo />
    <TrendingProducts />
    <Customerswiper />
  {/* <Branding /> */}
  <Brands />
    <Recentarticle />
    <Newsletter />
    {/* <Herosection /> */}
    <Footer />
    </div>
  )
}

export default Home