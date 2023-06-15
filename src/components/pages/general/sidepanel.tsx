import React from 'react'
import { Link } from 'react-router-dom';

const SidePanel = () => {
  return (
    <div className="aside">
        <div className="logo">
            <a href="#"><span>K</span>N</a>
        </div>
        <div className="nav-toggler">
            <span></span>
        </div>
        <ul className="nav">
            <li><Link to="/" className="active"><i className="fa fa-home"></i> Home</Link></li>
            <li><Link to="/About"><i className="fa fa-user"></i> About</Link></li>
            <li><Link to="/Services"><i className="fa fa-list"></i>Services</Link></li>
            <li><Link to="/Portfolio"><i className="fa fa-briefcase"></i>Portfolio</Link></li>
            <li><Link to="/Contact"><i className="fa fa-comments"></i>Contact</Link></li>
        </ul>
    </div>
  )
}

export default SidePanel