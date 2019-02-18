import React, { Component } from 'react'
import logo from '../Images/coffee-cup.png';

export default class CoffeeInfo extends Component {
  render() {
    return (
      <div className="menuContainer">
        <div className="menu">
          <h2 className="menu header">Menu</h2>
        </div>
        
        <div className="drinks">
          <div className="drinks nav">
            <h2>Coffee Drinks</h2>
          </div>

          <div className="drinks selection">
            <img src={logo} alt="coffee cup"/>
            <p>Espresso Drinks</p></div>
          <div className="drinks selection">
            <img src={logo} alt="coffee cup"/>
            <p>Brewed Coffee</p></div>  
          <div className="drinks selection">
            <img src={logo} alt="coffee cup"/>
            <p>Filter Coffee</p></div>
          <div className="drinks selection">
            <img src={logo} alt="coffee cup"/>
            <p>Latte</p></div>
          <div className="drinks selection">
            <img src={logo} alt="coffee cup"/>
            <p>Flat White</p></div>
          <div classNames="drinks selection">
            <img src={logo} alt="coffee cup"/>
            <p>Frappe</p></div>
          <div className="drinks selection">
            <img src={logo} alt="coffee cup"/>
            <p>Frappe</p></div>
          <div classNames="drinks selection">
            <img src={logo} alt="coffee cup"/>
            <p>Frappe</p></div>

          <div className="drinks nav">
            <h2>Tea and Other Drinks</h2>
          </div>

          <div className="drinks selection">
            <img src={logo} alt="coffee cup"/>
            <p>Chocolate</p></div>
          <div className="drinks selection">
            <img src={logo} alt="coffee cup"/>
            <p>Tea</p></div>
        </div>
      </div>
    )
  }
}
