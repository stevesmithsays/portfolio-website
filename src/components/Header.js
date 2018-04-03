import React, { Component } from 'react';
import "../styles/scss/Header.scss";

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
              <a href="Home" className="nav-link" id="home-link"><li>Home.</li></a>
              <a href="Projects" className="nav-link" id="project-link"><li>Projects.</li></a>
              <a href="Blog" className="nav-link" id="about-link"><li>Blog.</li></a>
              <a href="Contact" className="nav-link" id="contact-link"><li>Contact.</li></a>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header