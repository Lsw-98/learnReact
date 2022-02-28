import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'
import './List.css'

export default class List extends Component {
  render() {
    const { todos } = this.props

    return (
      <ul className="todo-main">
        {
          todos.map((item) => {
            // 使用三点运算符传递props时，组件接收到的props命名与传递过来的相同
            return <ListItem key={item.id} {...item}></ListItem>
          })
        }
      </ul>
    )
  }
}
