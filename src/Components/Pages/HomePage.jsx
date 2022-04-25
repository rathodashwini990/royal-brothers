import React from 'react'
import Footer from '../Footer/Footer'
import CarouselApp from '../Home/CarouselApp'
import { Home } from '../Home/Home'
import Navbar from '../Navbar/Navbar'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <CarouselApp />
        <Footer />
    </div>
  )
}

export default HomePage