import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Services from "./components/pages/Services"
import Products from "./components/pages/Products"
import SignUp from "./components/pages/SignUp"
import {  } from "./components/HeroSection/HeroSection";

import "./App.css"


const App = () => {
    return (
        <>
          <Router>
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/Services" component={Services} />
                  <Route path="/Products" component={Products} />
                  <Route path="/SignUp" component={SignUp} />
              </Switch>
          </Router>
        </>
    )
}

export default App