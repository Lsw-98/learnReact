import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail/Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: "消息1" },
      { id: '02', title: "消息2" },
      { id: '03', title: "消息3" },
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.messageArr.map((item) => {
              return (
                <li key={item.id}>
                  {/* 
                    路由传递参数的方式：
                    1. 向路由组件传递params参数
                  */}
                  <Link to={`/home/messages/detail/${item.id}/${item.title}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 
          1. 声明接收params参数
        */}
        <Route path='/home/messages/detail/:id/:title' component={Detail} />
      </div>
    )
  }
}
