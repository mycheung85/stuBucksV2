import React, { Component } from 'react';
import CoffeeInfo from './Components/CoffeeInfo';
import OfferBanner from './Components/OfferBanner'
import Nav from './Components/Nav'
import LandingPage from './Components/LandingPage';
import CompanyInfo from './Components/CompanyInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
      <OfferBanner />
      <Nav />
      <LandingPage />
      <CoffeeInfo/>
      <CompanyInfo/>
      </div>
    );
  }
}

export default App;
