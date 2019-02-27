import React, { Component } from "react";

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
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener"
              >
                <li className="fb _icon" />
              </a>
              <a
                href="https://www.instagram.com/wearecodenation/"
                target="_blank"
              >
                <li className="insta _icon" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <li className="linked _icon" />
              </a>
              <a href="https://twitter.com" target="_blank">
                <li className="twitter _icon" />
              </a>
              <a href="https://www.pinterest.co.uk/" target="_blank">
                <li className="pin _icon" />
              </a>
            </div>
          </ol>
        </div>
      </div>
    );
  }
}
