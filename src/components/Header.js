import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/scss/Header.scss";
import Hero from "./Hero";

class Header extends Component {
  render(){
    return(
      <div>
        <div className="site-header"> 
            <a href="Home"><div id="site-logo">
            <span>S.</span>
            </div></a>
          <nav className="site-nav">
            <ul>
              <Link to="/" className="nav-link" id="home-link"><li>Home.</li></Link>
              <Link to="Projects" className="nav-link" id="project-link"><li>Projects.</li></Link>
              <Link to="Blog" className="nav-link" id="about-link"><li>Blog.</li></Link>
              <Link to="Contact" className="nav-link" id="contact-link"><li>Contact.</li></Link>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header