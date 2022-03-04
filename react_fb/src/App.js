import React, { Component } from 'react'
import './App.css'
import Cinema from './component/Cinema/Cinema'
import Profile from './component/Profile/Profile'
import Home from './component/Home/Home'

export default class App extends Component {
  state = ({
    data: [
      { id: "1", title: "电影" },
      { id: "3", title: "选座" },
      { id: "2", title: "我的" },
    ],
    current: 0,
  })

  handleClick = (index) => {
    this.setState({
      current: index
    })
  }

  render() {
    const { data, current } = this.state
    return (
      <div>
        {
          current === 0 ? <Home /> :
            current === 1 ? <Cinema /> : <Profile />
        }
        <ul>
          {
            data.map((item, index) => {
              return <li onClick={() => { this.handleClick(index) }} className={current === index ? 'active' : null} key={item.id}>{item.title}</li>
            })
          }
        </ul>
      </div >
    )
  }
}
