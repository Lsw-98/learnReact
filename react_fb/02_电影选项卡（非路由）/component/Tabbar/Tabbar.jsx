import React, { Component } from 'react'
import './Tabbar.css'

export default class Tabbar extends Component {
  handleClick = (id) => {
    this.props.getCurrent(id)
  }

  render() {
    const { data, current } = this.props
    return (
      <div>
        <ul>
          {
            data.map((item, index) => {
              return (
                <li
                  onClick={() => { this.handleClick(index) }}
                  className={current === index ? 'active' : null}
                  key={item.id}>{item.title}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
