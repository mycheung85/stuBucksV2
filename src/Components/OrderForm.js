import React, { Component, Fragment } from "react";
import Toggle from "./modals/Toggle";
import Modal from "./modals/Modal";
import Basket from "./Basket";
import YourOrder from "./YourOrder";
import { hotDrinks } from "./hotDrinks";

export default class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotDrinks: hotDrinks
    };
  }

  render() {
    return (
      <Fragment>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment className="orderForm">
              <button onClick={toggle} className="CoffeeCupBasket">
                <p className="basketName">
                  <img
                    className="basketImg"
                    src={require("../Images/coffeeCupBasket.png")}
                    alt="basket"
                  />
                  Basket
                </p>
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
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </Fragment>
    );
  }
}
