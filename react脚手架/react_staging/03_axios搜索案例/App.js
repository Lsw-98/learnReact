import React, { Component } from 'react'
import List from './components/List/List'
import Search from './components/Search/Search'

export default class App extends Component {
  state = {
    data: [],
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    err: "", //存储错误信息
  }

  // 更新App的state
  updateData = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateData={this.updateData} />
        <List {...this.state} />
      </div>
    )
  }
}

