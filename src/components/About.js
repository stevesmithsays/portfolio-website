import React from "react";


const About = () => {
    return(
      <div>
        <div id="about-body">
        <div><h1 className="about-me">about.</h1></div>
        <div className="about-container">
                <span className="about-statement" id="about-name">My name is Steve Smith.</span>
                <span className="about-statement" id="about-traits">I am a front-end web developer.</span>                
                <span className="about-statement" id="about-location">Currently, I am located in Chicago, IL. (just not in this photo)</span> 
                <div className="about-statement" id="about-skills">Friendly with
                  <div id="icon-container">
                    <i class="icon-html5-alt"></i> 
                    <i class="icon-css3"></i>
                    <i class="icon-javascript-alt"></i>             
                    <i class="icon-reactjs"></i>
                    <i class="icon-sass"></i>
                    <i class="icon-nodejs"></i>
                    <i class="icon-postgres"></i>   
                    <i class="icon-git"></i>                      
                  </div>
                </div>
                <span className="about-statement" id="about-contact">Feel free to contact me <a href="#" id="about-here">here.</a></span>
              </div>  
        </div>
      </div>
    )
}

export default About;