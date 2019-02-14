import React, { Component } from 'react'

export default class CompanyInfo extends Component {
  render() {
    return (
      <div>
      <div className="section_4">
        <div className="customer_service">
        <ol className="help">
          <h2 id="help">Help</h2>
          <li>My Account</li>
          <li>Stu Cards</li>
          <li>Stu rewards</li>
          <li>Shoppings & Retunds</li>
          <li>Current Offers</li>
        </ol>
        <ol className="company_info">
          <h2 id="company_info">Company Info</h2>
          <li>Code Ethics</li>
          <li>Reponsible Sourcing</li>
          <li>Supply Chain</li>
          <li>Limited Partners</li>
          <li>Office Coffee</li>
        </ol>
        <ol className="about_us">
          <h2 id="about_us">About Us</h2>
          <li>Join Stu</li>
          <li>Social Responsibilty</li>
          <li>Our People</li>
          <li>Newsroom</li> 
        </ol>
        </div>
        <ol className="_icons">
          <h2 id="share">Share</h2>
          <div className="share_icons">
            <li className="fb _icon"></li>
            <li className="insta _icon"></li>
            <li className="linked _icon"></li>
            <li className="twitter _icon"></li>
            <li className="pin _icon"></li>
          </div>
          </ol> 
      </div>
      </div>
    )
  }
}
