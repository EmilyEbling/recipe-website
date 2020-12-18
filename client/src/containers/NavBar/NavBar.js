import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './navbar.css'
class NavBar extends Component {

    render() {
        return (
          <div className="NavBar">
              <Link to="/"><button className="navBtn">Home</button></Link>
              <Link to="/about"><button className="navBtn">About</button></Link>
          </div>  
        )
    }
}

export default NavBar;