import React from "react"
import { Link } from "react-router-dom"

import "./Button.css"

const Button = ({children, buttonStyle, buttonSize}) => {
  return (
    <Link to="SignUp">
      <button className={`${buttonStyle} ${buttonSize}`}>
        {children}
      </button>
    </Link>
  )
}

export default Button
