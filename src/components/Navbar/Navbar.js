import React, { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../Button"
import "./Navbar.css"


const Navbar = () => {

    const [click, SetClick] = useState(false)  
    const [button, setButton] = useState(true)

    const handleClick = () => {
      SetClick(!click)
    }

    const showButton = () =>{
      if(window.innerWidth <= 960) {
        setButton(false)
      } else {
        setButton(true)
      }
    }

    window.addEventListener("resize", showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL
                    </Link>
                    <div onClick={handleClick} className="navbar-toggle">
                      <i className={click ? 'mdi mdi-close' : 'mdi mdi-menu'}></i>
                    </div>
                    <div className={click ? "right-nav active" : "right-nav"}>
                      <ul className="nav-items">
                          <li><Link className="nav-link" to="/">Home</Link>  </li>
                          <li><Link className="nav-link" to="/Services">Services</Link></li>
                          <li><Link className="nav-link" to="/Products">Products</Link></li>
                      </ul>
                        <Button buttonStyle="btn-outline btn-medium">SignUp</Button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
