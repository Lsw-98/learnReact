import React, { Component } from 'react'

class Navbar extends Component {
  handleClick = () => {
    const { isShow } = this.props
    isShow()
  }

  render() {
    return (
      <div style={{ background: "red", width: "200px" }}>
        <button onClick={this.handleClick}>click</button>
        <span>navbar</span>
      </div >
    )
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div style={{ background: "green", width: "200px" }}>
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ol>
      </div>
    )
  }
}

export default class Home extends Component {
  state = ({
    isShow: false,
  })

  handleShow = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {
    return (
      <div>
        <Navbar isShow={this.handleShow} />
        {
          this.state.isShow ? <Sidebar /> : ""
        }
      </div>
    )
  }
}
