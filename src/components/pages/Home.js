import React from 'react'
import Navbar from "../Navbar/Navbar"
import HeroSection from "../HeroSection/HeroSection"
import Cards from "../Cards/Cards"
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home
