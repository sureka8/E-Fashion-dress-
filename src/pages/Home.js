import React from 'react'
import Slider from '../components/Slider'
import Customerswiper from '../components/Customerswiper'
import Recentarticle from '../components/Recentarticle'
import Newsletter from '../components/Newsletter'
import TrendingProducts from '../components/TrendingProducts'
import Branding from '../components/Branding'

const Home = () => {
  return (
    <div className='bg-slate-100'>
    <Slider />
    <TrendingProducts />
    <Customerswiper />
  <Branding />
    <Recentarticle />
    <Newsletter />
    </div>
  )
}

export default Home