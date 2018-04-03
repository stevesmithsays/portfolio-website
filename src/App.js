import React, { Component } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Hero/>
      <About/>
      </div>
    );
  }
}

export default App;
