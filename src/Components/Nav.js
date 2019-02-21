import React, { Component } from "react";

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
            <a href="/">
              <li>Rewards</li>
            </a>
            <a href="/">
              <li>Want to join our team?</li>
            </a>
            <a href="/">
              <li>Locations</li>
            </a>
            <a href="/">
              <li>Specials</li>
            </a>
          </nav>
        </header>
      </div>
    );
  }
}
