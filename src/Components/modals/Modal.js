import React, { Component } from "react";
import "./modal.css";
import Portal from "./Portal";

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;

    return (
      <Portal>
        {on && (
          <div className="modalWrapper">
            <div className="modalCard">
              <button onClick={toggle} className="closeModal">
                CLOSE
              </button>
              <div>{children}</div>
              <div className="background" />
            </div>
          </div>
        )}
      </Portal>
    );
  }
}
