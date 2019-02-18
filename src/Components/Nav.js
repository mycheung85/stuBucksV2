import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <header className="header">
        <nav>
          <img className="logo" src={require("../Images/stubucks-logo.png")} alt="stubucks logo" />

          <a href="/"> <li>Coffee</li></a>
          <a href="/"> <li>Tea</li></a>
          <a href="/"><li>Menu</li></a>
          <a href="/"><li>Rewards</li></a>
          <a href="/"><li>Want to join our team?</li></a>
          <a href="/"><li>Locations</li></a>
          <a href="/"><li>Specials</li></a>

        </nav>
      </header>
      </div>
    )
  }
}
