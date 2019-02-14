import React, { Component } from 'react';

import OfferBanner from './Components/OfferBanner'
import Nav from './Components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
      <OfferBanner />
      <Nav />
      </div>
    );
  }
}

export default App;
