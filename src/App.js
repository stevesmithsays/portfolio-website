import React, { Component } from 'react';

import routes from "./routes";
import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Home from "./components/Home";


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      {routes}
      </div>
    );
  }
}

export default App;
