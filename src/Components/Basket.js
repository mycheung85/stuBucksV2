import React, { Component } from "react";
import "../style.css";

export default class Basket extends Component {
  render() {
    return (
      <div className="basket-container">
        <p className="basket-names">{this.props.name}</p>
        <p className="basket-amount">{this.props.amount}</p>
      </div>
    );
  }
}
