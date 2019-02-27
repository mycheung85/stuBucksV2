import React, { Component } from "react";
import OrderForm from "./OrderForm";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav>
            <img
              onClick={this.props.landingPageNav}
              className="logo"
              src={require("../Images/stubucks-logo.png")}
              alt="stubucks logo"
            />

            <a onClick={this.props.coffeeNav} href="#">
              <li>Coffee</li>
            </a>
            <a onClick={this.props.coffeeNav} href="#">
              {" "}
              <li>Tea</li>
            </a>
            <a onClick={this.props.coffeeNav} href="#">
              <li>Menu</li>
            </a>
            <a href="https://www.starbucks.co.uk/card/rewards" target="_blank">
              <li>Rewards</li>
            </a>
            <a href="https://www.gov.uk/contact-jobcentre-plus" target="_blank">
              <li>Want to join our team?</li>
            </a>
            <a href="https://wearecodenation.com/manchester/" target="_blank">
              <li>Locations</li>
            </a>
            <a href="https://www.thespecials.com/" target="_blank">
              <li>Specials</li>
            </a>
          </nav>
          <OrderForm />
        </header>
      </div>
    );
  }
}
