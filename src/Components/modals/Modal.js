import React, { Component } from "react";
import "./modal.css";
import Portal from "./Portal";
import Basket from '../Basket';
import YourOrder from '../YourOrder';

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;

    return (
      <div>
      <Portal>
        {on && (
          <div className="modalWrapper">
            <div className="modalCard">
              <button onClick={toggle} className="closeModal">
                X
              </button>
              <div>{children}</div>
              <Basket />
              <YourOrder />
              <div className="background" />
            </div>
          </div>
        )}
      </Portal>
      
      </div>
    );
  }
}
