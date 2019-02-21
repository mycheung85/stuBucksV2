import React, { Component } from "react";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="section_1">
          <div className="text_box_1">
            <p className="landing_page">
              <span className="love">Love</span>
              your Stu
            </p>
            <p className="landing_info">
              Look at our range and choose the Stu that suits you.
            </p>
            <button onClick={this.props.coffeeNav} className="choose_coffee">
              Choose your coffee
            </button>
          </div>
        </div>
      </div>
    );
  }
}
