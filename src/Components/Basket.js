import React, { Component } from 'react'

export default class Basket extends Component {
  render() {
    return (
      <div>
        { this.props.name }
        { this.props.amount }
      </div>
    )
  }
}
