import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

class NavBar extends Component {

    render() {
        return (
            <div className="NavBar">
                <Link to="/"><button className="navBtn">Home</button></Link>
                <Link to="/about"><button className="navBtn">About</button></Link>
                <Link to="/coffee"><button className="navBtn">Buy Me A Coffee</button></Link>
            </div>
        )
    }
}

export default NavBar;