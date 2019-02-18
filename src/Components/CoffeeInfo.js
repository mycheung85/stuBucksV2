import React, { Component } from 'react'


export default class CoffeeInfo extends Component {
  render() {
    return (
      <div>
      
      <div class="menuContainer">
        <div class="menu">
          <h2 class="menu header">Menu</h2>
        </div>
        
        <div class="drinks">
          <div class="drinks nav">
            <h2>Coffee Drinks</h2>
          </div>

          <div class="drinks selection">
            <img src="./Images/coffee-cup.png" alt="coffee cup"/>
            <p>Espresso Drinks</p></div>
          <div class="drinks selection">
            <img src="./Images/coffee-cup.png" alt="coffee cup"/>
            <p>Brewed Coffee</p></div>  
          <div class="drinks selection">
            <img src="./Images/coffee-cup.png" alt="coffee cup"/>
            <p>Filter Coffee</p></div>
          <div class="drinks selection">
            <img src="./Images/coffee-cup.png" alt="coffee cup"/>
            <p>Latte</p></div>
          <div class="drinks selection">
            <img src="./Images/coffee-cup.png" alt="coffee cup"/>
            <p>Flat White</p></div>
          <div class="drinks selection">
            <img src="./Images/coffee-cup.png" alt="coffee cup"/>
            <p>Frappe</p></div>
          <div class="drinks selection">
            <img src="./Images/coffee-cup.png" alt="coffee cup"/>
            <p>Frappe</p></div>
          <div class="drinks selection">
            <img src="./Images/coffee-cup.png" alt="coffee cup"/>
            <p>Frappe</p></div>

          <div class="drinks nav">
            <h2>Tea and Other Drinks</h2>
          </div>

          <div class="drinks selection">
            <img src="./Images/coffee-cup.png" alt="coffee cup"/>
            <p>Chocolate</p></div>
          <div class="drinks selection">
            <img src="./Images/coffee-cup.png" alt="coffee cup"/>
              
          <p>Tea</p>
          </div>
        </div>

      </div>
      </div>
    )
  }
}
