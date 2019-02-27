import React, { Component, Fragment } from "react";
import CoffeeInfo from "./Components/CoffeeInfo";
import OfferBanner from "./Components/OfferBanner";
import Nav from "./Components/Nav";
import LandingPage from "./Components/LandingPage";
import CompanyInfo from "./Components/CompanyInfo";
import TrySomethingNew from "./Components/TrySomethingNew";
import StuShop from "./Components/StuShop";
import Footer from "./Components/Footer";
import Basket from "./Components/Basket";
import { hotDrinks } from "./Components/hotDrinks";
import YourOrder from "./Components/YourOrder";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSelect: "landingPage",
      hotDrinks: hotDrinks
    };
  }

  coffeeNav = () => {
    this.setState(() => ({ pageSelect: "coffeeMenu" }));
  };
  landingPageNav = () => {
    this.setState(() => ({ pageSelect: "landingPage" }));
  };
  amountChange = (index, delta) => {
    this.setState(prevState => ({
      amount: (prevState.hotDrinks[index].amount += delta)
    }));
  };

  pageSelector = () => {
    if (this.state.pageSelect === "landingPage") {
      return (
        <div>
          <Fragment>
            <OfferBanner />
            <Nav coffeeNav={this.coffeeNav} />
            <LandingPage />
            <TrySomethingNew />
            <StuShop />
            <CompanyInfo />
            <Footer />
          </Fragment>
        </div>
      );
    } else if (this.state.pageSelect === "coffeeMenu") {
      return (
        <div>
          <OfferBanner />
          <Nav landingPageNav={this.landingPageNav} />
          {this.state.hotDrinks.map((hotDrinks, index) => (
            <CoffeeInfo
              amountChange={this.amountChange}
              name={hotDrinks.name}
              id={hotDrinks.id}
              amount={hotDrinks.amount}
              index={index}
            />
          ))}
          <YourOrder />
          {this.state.hotDrinks.map((hotDrinks, index) =>
            hotDrinks.amount > 0 ? (
              <Basket
                name={hotDrinks.name}
                id={hotDrinks.id}
                amount={hotDrinks.amount}
                index={index}
              />
            ) : null
          )}
          <Footer />
        </div>
      );
    }
  };
  render() {
    return <div className="App">{this.pageSelector()}</div>;
  }
}

export default App;
