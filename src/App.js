import React, { Component } from 'react';
import CoffeeInfo from './Components/CoffeeInfo';
import OfferBanner from './Components/OfferBanner';
import Nav from './Components/Nav';
import LandingPage from './Components/LandingPage';
import CompanyInfo from './Components/CompanyInfo';
import TrySomethingNew from './Components/TrySomethingNew';
import StuShop from './Components/StuShop';
import Footer from './Components/Footer';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageSelect: 'landingPage'
    }
  }

  coffeeNav = () =>{
    this.setState(()=>({pageSelect: 'coffeeMenu'}))
  }
  landingPageNav = () =>{
    this.setState(()=>({pageSelect: 'landingPage'}))
  }

  pageSelector = () => {
    if (this.state.pageSelect === 'landingPage'){
      return (
      <div>
      <OfferBanner />
      <Nav  
      coffeeNav = {this.coffeeNav}
      />
      <LandingPage 
      coffeeNav = {this.coffeeNav}
      />
      <TrySomethingNew />
      <StuShop />
      <CompanyInfo />
      <Footer />
      </div>
      )
    }
    else if (this.state.pageSelect === 'coffeeMenu'){
      return(
        <div>
          <OfferBanner />
          <Nav 
          landingPageNav = {this.landingPageNav} 
          />
          <CoffeeInfo />
          <Footer />
        </div>
      )
    }
  }
  render() {
    return (
      <div className="App">
      {this.pageSelector()}
      </div>
    );
  }
}

export default App;
