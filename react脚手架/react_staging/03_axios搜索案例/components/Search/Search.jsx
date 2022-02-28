import axios from 'axios'
import React, { Component } from 'react'
import './Search'

export default class Search extends Component {

  searchUser = () => {
    // 连续解构赋值
    const { keyWordElement: { value } } = this
    // 发送请求前更新状态 
    this.props.updateData({ isFirst: false, isLoading: true })
    // 发起网络请求
    axios.get(`http://localhost:3000/api1/search/users2?q=${value}`).then((res) => {
      // 发送请求成功后更新状态 
      this.props.updateData({ isLoading: false, data: res.data.items })
    }).catch(error => {
      // 发送请求失败后更新状态 
      this.props.updateData({ isLoading: false, err: error.message })
    })
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.searchUser}>Search</button>
        </div>
      </section>
    )
  }
}
