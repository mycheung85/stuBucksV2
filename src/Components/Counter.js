import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={
            this.props.amount > 0
              ? () => this.props.amountChange(this.props.index, -1)
              : () => this.props.amountChange(this.props.index, 0)
          }
        >
          -
        </button>
        <span className="counter-score">{this.props.amount}</span>
        <button
          className="counter-action increment"
          onClick={() => this.props.amountChange(this.props.index, 1)}
        >
          +
        </button>
        {/* <div className="select">
          <select name="slct" id="slct">
            <option>Choose an SIZE</option>
            <option value="Short">Short (267 ml)</option>
            <option value="Tall">Tall (354 ml)</option>
            <option value="Grande">Grande (473 ml)</option>
            <option value="Venti">Venti (591 ml)</option>
          </select>
        </div> */}
      </div>
    );
  }
}
