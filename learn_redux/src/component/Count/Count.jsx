import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {

  componentDidMount() {
    store.subscribe(() => {
      console.log("@");
    })
  }

  increment = () => {
    // const { value } = this.selectNumber
    store.dispatch({ type: "increment", data: 5 })
  }

  decrement = () => {
    // this.setState({
    //   count: this.state.count - 5
    // })
  }

  incrementOdd = () => {
    // if (this.state.count % 2 !== 0) {
    //   this.setState({
    //     count: this.state.count + this.selectNumber.value * 1
    //   })
    // }
  }

  incrementAsync = () => {
    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + this.selectNumber.value * 1
    //   })
    // }, 1000);
  }

  render() {
    return (
      <div>
        <h2>当前数字为：{store.getState()}</h2>
        {/* <select ref={num => this.selectNumber = num}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> */}

        <button onClick={this.increment()}>+5</button>
        <button onClick={this.decrement()}>-</button>
        <button onClick={this.incrementOdd()}>当前数字为奇数时再加</button>
        <button onClick={this.incrementAsync()}>异步加</button>
      </div >
    )
  }
}
