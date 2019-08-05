import React, { Component } from 'react';
import Hero from './Hero';
import Footer from './Footer';

//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
