import React from "react";

const Projects = () => {
  return(
    <div>
      <div className="projects-body">
        <div className="header-container">
          <h1 id="project-hwun">projects</h1>
          <h2 id="proj-header-blurb">These are some of my most recent pieces of work.</h2>
        </div>
          <div className="blurb-hlder">      
            <div id="first-blurb">
             <a href ="https://github.com/stevesmithsays/No-DB-Project"> <span>Seinfeld</span></a>            
            </div>                          
              <div id="second-blurb">
                <a href="http://www.mountatlas.club"><span>Mount<br/>Atlas.</span></a>
              </div>                    
              <div id="third-blurb">
                <span><i><a href="/">This</a></i> and that.</span>      
              </div>
              <span className="projects">gander.</span>
          </div>  
          
      </div>
    </div>
  )
}

export default Projects;