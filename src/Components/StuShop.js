import React, { Component } from 'react'

export default class StuShop extends Component {
  render() {
    return (
      <div>
        <div className="stuShopBanner">
        <h4 className="stuShopBannerTextA">The Stu <span className="stuShopBannerTextB">Shop</span></h4>
      </div>
      <div className="section_3">
        <div className="arrowDown"><img src="/Icons/icon-angle-arrow-down-green.png" alt=""></img></div>
          <div className="row">
            <div className="column colStuShop">
              <img src="./Images/buyCoffee.jpg" alt="Buy Coffee" className="buyCoffee"></img>
              <h4>Shop Coffee</h4>
              <hr>
                <p>Hand-roasted coffee, 
                <br>delivered fresh for
                </br>ultimate flavour.</p></hr>
            </div>
            <div className="column colStuShop">
               <img src="./Images/buyTea.jpg" alt="Buy Tea" className="buyTea"></img>
              <h4>Shop Tea</h4>
              <hr>
              <p>Our finest selection of
              <br>premium whole leaf
              </br>tea.</p></hr>
            </div>
            <div className="column colStuShop">
              <img src="./Images/buyEquipment.png" alt="Buy Equipment" className="buyEquipment"></img>
              <h4>Shop Equipment</h4>
              <hr>
              <p>Brewers and presses
              <br>for making the perfect
              </br>Stu at home.</p></hr>
            </div>
        </div>
      </div>
      </div>
    )
  }
}