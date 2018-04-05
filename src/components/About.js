import React from "react";


const About = () => {
    return(
      <div>
        <div id="about-body">
            <div className="about-container">
              <div className="about-blurb">
                <span className="about-statement" id="about-name">My name is Steve Smith.</span> 
                <span className="about-statement" id="about-traits">I am a front-end web developer.</span>                
                <span className="about-statement" id="about-location">Currently I am located in Chicago, IL.(not in this photo)</span> 
                <span className="about-statement" id="about-contact">Feel free to contact me<a href="#" id="about-here">here!</a></span>
              </div>  
          </div>
        </div>
      </div>
    )
}

export default About;

// <img src={require(`../assets/images/_DSF8179.jpg`)}/>