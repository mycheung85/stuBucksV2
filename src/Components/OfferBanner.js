import React, { Component } from "react";

export default class OfferBanner extends Component {
  render() {
    return (
      <div>
        <div className="offerBar">
          <div className="shipping">
            <h2 className="offer">
              Free shipping on orders of £30+ | Use Code STULOVE > offer details
              >
            </h2>
          </div>
          <div className="nearestStore">
            <a
              target="blank"
              href="https://www.google.com/search?q=nearest+starbucks&rlz=1C5CHFA_enGB817GB817&oq=nearest+starbusck&aqs=chrome.1.69i57j0l5.5714j1j7&sourceid=chrome&ie=UTF-8"
            >
              {" "}
              <h2 class="offer">Find Nearest Store</h2>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
