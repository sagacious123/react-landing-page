import React from 'react'
import CardItem from "../CardItem"
import "./Cards.css"

function Cards() {
  return (
    <div className="cards-section">
    <h1>Check out these EPIC Destinations!</h1>
      <ul className="cards-container">
        <CardItem 
          src="/images/img-9.jpg" 
          label="Adventure" 
          text="Explore the hidden waterfall deep inside the Amazon Jungle"
          path="/products"
        />
        <CardItem 
          src="/images/img-2.jpg" 
          label="Adventure" 
          text="Travel through the Islands of Bali in a Private Cruise"
          path="/products"
        />
      </ul>
      <ul className="cards-container">
        <CardItem 
          src="/images/img-3.jpg" 
          label="Adventure" 
          text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
          path="/products"
        />
        <CardItem 
          src="/images/img-4.jpg" 
          label="Adventure" 
          text="Experience Football on Top of the Himilayan Mountains"
          path="/products"
        />
        <CardItem 
          src="/images/img-8.jpg" 
          label="Adventure" 
          text="Ride through the Sahara Desert on a guided camel tour"
          path="/products"
        />
      </ul>
    </div>
  )
}

export default Cards
