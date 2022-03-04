import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class Home extends Component {
  state = {
    numbers: []
  }

  getNumber = () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    this.setState({
      numbers: list
    }, () => {
      // 回调函数
      // 当setState()执行完后会调用该函数
      new BetterScroll(".wrapper")
    })

    console.log(this.state.numbers);   // []
    console.log(document.querySelectorAll("li"));   // []
  }

  render() {
    return (
      <div>
        <button onClick={this.getNumber}>显示数组</button>
        <div className="wrapper" style={{ height: '200px', background: 'yellow', overflow: 'hidden' }}>
          <ol>
            {
              this.state.numbers.map(item => {
                return (
                  <li key={item}>{item}</li>
                )
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}
