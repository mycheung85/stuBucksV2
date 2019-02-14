import React, { Component } from 'react';
import './App.css';
import CoffeeInfo from '../src/Components/CoffeeInfo';
import OfferBanner from './Components/OfferBanner'
import Nav from './Components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h2>Hello world</h2>
        <header />
        <CoffeeInfo/>
        <OfferBanner />
        <Nav />
      </div>
    );
  }
}

export default App;
