import React from 'react';
import { Switch, Route } from "react-router-dom";

import About from "./components/About";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default(
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Home" component={Home}/>
    <Route exact path="/projects" component={Projects}/>
    <Route exact path="/blog" component={Blog}/>
    <Route exact path="/contact" component={Contact}/>
    <Route path="*"
    render={() => (
        <div>
            <p>Not Found Foo!</p>
        </div>
    )}
    />
  </Switch>
)
