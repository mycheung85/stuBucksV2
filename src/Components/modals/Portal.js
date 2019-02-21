import { Component } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

export default class Portal extends Component {
  constructor() {
    super();
    this.mod = document.createElement("div");
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.mod);
  };

  componentWillUnmount() {
    portalRoot.removeChild(this.mod);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.mod);
  }
}
