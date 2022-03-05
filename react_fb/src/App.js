import React, { Component } from 'react'
import './App.css'
import Cinema from './component/Cinema/Cinema'
import Profile from './component/Profile/Profile'
import Home from './component/Home/Home'
import Tabbar from './component/Tabbar/Tabbar'
import Navbar from './component/Navbar/Navbar'

export default class App extends Component {
  state = ({
    current: 0,
    data: [
      { id: "1", title: "电影" },
      { id: "3", title: "选座" },
      { id: "2", title: "我的" },
    ],
  })

  handleClick = (index) => {
    this.setState({
      current: index
    })
  }

  goCenter = () => {
    this.setState({
      current: 2
    })
  }

  render() {
    const { current } = this.state
    return (
      <div>
        <Navbar goCenter={this.goCenter} />
        {
          current === 0 ? <Home /> :
            current === 1 ? <Cinema /> : <Profile />
        }

        {/* 
          直接写函数名，不需要传参
        */}
        <Tabbar getCurrent={this.handleClick} current={this.state.current} data={this.state.data} />
      </div >
    )
  }
}
