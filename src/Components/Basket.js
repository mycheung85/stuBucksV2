import React, { Component } from "react";
import "../style.css";

export default class Basket extends Component {
  render() {
    return (
      <div className="basket-container">
        <div className="basket-names">{this.props.name}</div>
        <div className="basket-amount">{this.props.amount}</div>
      </div>
    );
  }
}
