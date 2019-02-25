import React, { Component, Fragment } from "react";
import Modal from "./modals/Modal";
import Toggle from "./modals/Toggle";
import CoffeeInfo from "./CoffeeInfo";
import { hotDrinks } from "./hotDrinks";
import Basket from "./Basket";
import "../style.css";
import YourOrder from "./YourOrder";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotDrinks: hotDrinks
    };
  }

  amountChange = (index, delta) => {
    this.setState(prevState => ({
      amount: (prevState.hotDrinks[index].amount += delta)
    }));
  };

  render() {
    return (
      <div>
        <div className="section_1">
          <div className="text_box_1">
            <p className="landing_page">
              <span className="love">Love </span>
              your Stu
            </p>
            <p className="landing_info">
              Look at our range and choose the Stu that suits you.
            </p>

            <Toggle>
              {({ on, toggle }) => (
                <Fragment className="orderForm">
                  <button onClick={toggle} className="choose_coffee">
                    Choose your coffee
                  </button>

                  <Modal on={on} toggle={toggle}>
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
                    {this.state.hotDrinks.map((hotDrinks, index) => (
                      <CoffeeInfo
                        amountChange={this.amountChange}
                        name={hotDrinks.name}
                        id={hotDrinks.id}
                        amount={hotDrinks.amount}
                        index={index}
                      />
                    ))}
                  </Modal>
                </Fragment>
              )}
            </Toggle>
          </div>
        </div>
      </div>
    );
  }
}
