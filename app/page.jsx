import About from '@/app/components/home/About'
import Footer from '@/app/components/Footer'
import Hero from '@/app/components/home/Hero'
import OurService from '@/app/components/home/OurService'
import LatestProject from '@/app/components/home/LatestProject'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <OurService />
      <LatestProject />
      <Footer />
    </div>
  )
}

export default Home