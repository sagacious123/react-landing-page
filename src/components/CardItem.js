import React from 'react'
import { Link } from 'react-router-dom'
import "./CardItem.css"

const CardItem = (props) =>  {
  return (
    <>
      <li className="card-item">
        <Link to={props.path}>
          <figure className="card-img" data-label={props.label}>
            <img src={props.src} alt="img-1"/>
          </figure>
          <div className="card-text">
            <h3>{props.text}</h3>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
