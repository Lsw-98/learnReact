import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'
import './List.css'
import PropTypes from 'prop-types'

export default class List extends Component {
  // 对props进行类型限定
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodos: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render() {
    // 父组件传来的数据(App.js)
    const { todos, updateTodos, deleteTodo } = this.props

    return (
      <ul className="todo-main">
        {
          todos.map((item) => {
            // 使用三点运算符传递props时，组件接收到的props命名与传递过来的相同
            return <ListItem key={item.id} {...item} updateTodos={updateTodos} deleteTodo={deleteTodo}></ListItem>
          })
        }
      </ul>
    )
  }
}
