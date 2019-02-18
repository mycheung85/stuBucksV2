import React, { Component } from 'react'

export default class TrySomethingNew extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="section_2">
          <div className="white_arrow_container">
            <img className="white_down_arrow" src={require("../Icons/icon- angle-arrow-down-white.png")} alt="white down arrow"></img>
          </div>
          <img className="iceCoffee" src={require("../Images/StubrewIcedCoffee.png")} alt="StubrewIcedCoffee" />
          <div className="section_2_info">
            <h4 className="section_2_heading">The new <span className="stuBrew-tag">StuBrew</span></h4>
            <p className="section_2_paragraph">
              A delicious new <span className="nitroBrew-tag">nitro brew</span> developed carefully on the darkside of
              the moon, instilled with the freshness of Stu himself.
            </p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
