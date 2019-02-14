import React, { Component } from 'react'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
         <div class="section_1">
        <div class="text_box_1">
          <p class="landing_page">
            <span class="love">Love</span>
            your Stu
          </p>
          <p class="landing_info">
            Look at our range and choose the Stu that suits you.
          </p>
          <button class="choose_coffee">Choose your coffee</button>
        </div>
      </div>
      <div>
        <div class="section_2">
          <div class="white_arrow_container">
            <img class="white_down_arrow" src="./Icons/icon- angle-arrow-down-white.png"></img>
          </div>
          <img class="iceCoffee" src="./Images/StubrewIcedCoffee.png" alt="" />
          <div class="section_2_info">
            <h4 class="section_2_heading">The new <span class="stuBrew-tag">StuBrew</span></h4>
            <p class="section_2_paragraph">
              A delicious new <span class="nitroBrew-tag">nitro brew</span> developed carefully on the darkside of
              the moon, instilled with the freshness of Stu himself.
            </p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
