import React, { Component } from 'react';
import CoffeeInfo from './Components/CoffeeInfo';
import OfferBanner from './Components/OfferBanner'
import Nav from './Components/Nav'

class App extends Component {
  render() {
    return (

      <div className="App">
      <OfferBanner />
      <Nav />
      <LandingPage />
      <CoffeeInfo/>

      </div>
    );
  }
}

export default App;
