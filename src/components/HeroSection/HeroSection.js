import React from 'react'
import Button from '../Button'
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div>
        <Button buttonStyle="btn-outline hero-btns btn-mobile" buttonSize="btn-large">GET STARTED</Button>
        <Button buttonStyle="btn-primary hero-btns btn-mobile" buttonSize="btn-large">WATCH TRAILER <i className="mdi mdi-play-circle-outline"></i></Button>
      </div>
    </div>
  )
}

export default HeroSection