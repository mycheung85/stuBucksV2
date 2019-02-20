import React, { Component } from 'react'
import logo from '../Images/coffee-cup.png';
import Counter from './Counter'

export default class CoffeeInfo extends Component {
  render() {
    return (
      <div>
      <div className="menuContainer">
        <div className="menu">
          
        </div>
        
        <div className="drinks">
          <div className="drinks coffeeNav">
           <div className="drinks selection">
            <img className="coffeeCupImg" src={logo} alt="coffee cup"/>
          {this.props.name}
          <Counter 
            amountChange = { this.props.amountChange }
            amount = { this.props.amount }
            index = { this.props.index }
          />
        </div>

          
          </div>
      </div>
      </div>
      </div>
    )
  }
}