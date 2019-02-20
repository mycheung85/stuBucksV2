import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement">-</button>
        <span className="counter-score">Amount</span>
        <button className="counter-action decrement">+</button>
      </div>
    )
  }
}
