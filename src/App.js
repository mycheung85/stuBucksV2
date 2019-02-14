import React, { Component } from 'react';
import './App.css';
import CoffeeInfo from '../src/Components/CoffeeInfo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h2>Hello world</h2>
        </header>
        <CoffeeInfo/>
      </div>
    );
  }
}

export default App;
