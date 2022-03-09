import React, { Component } from 'react'

export default class extends Component {
  handleClick = () => {
    this.props.goCenter()
  }

  render() {
    return (
      <div style={{ background: "yellow", textAlign: "center" }}>
        <button style={{ float: "left" }}>back</button>
        <span>卖座电影</span>
        <button style={{ float: "right" }} onClick={this.handleClick}>center</button>
      </div>
    )
  }
}
