import React, { Component } from 'react'
import './MyNavLink.css'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink className="list-group-item" {...this.props} />
    )
  }
}
