import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" 
        onClick = {this.props.amount>0 ? 
        ()=> this.props.amountChange(this.props.index, -1) : ()=> this.props.amountChange(this.props.index, 0)}>-</button>
        <span className="counter-score">{ this.props.amount }</span>
        <button className="counter-action decrement" onClick = {()=> this.props.amountChange(this.props.index, 1)}>+</button>
      </div>
    )
  }
}
