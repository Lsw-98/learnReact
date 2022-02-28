import React, { Component } from 'react'
import './Footer.css'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  // 对props进行类型限定
  static propTypes = {
    todos: PropTypes.array.isRequired,
    deleteAllTodo: PropTypes.func.isRequired,
    selectAllTodo: PropTypes.func.isRequired,
  }

  // 删除所有已完成的项
  handleDelAll = () => {
    if (window.confirm("你确定要删除所有吗？")) {
      this.props.deleteAllTodo()
    }
  }

  // 全选和全不选
  handleSelect = (event) => {
    this.props.selectAllTodo(event.target.checked)
  }

  render() {
    // 已完成的todo
    const doneTodo = this.props.todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)
    // 全部todo
    const allTodo = this.props.todos.length

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleSelect} checked={doneTodo === allTodo && allTodo !== 0 ? true : false} />
        </label>
        <span>
          <span>已完成{doneTodo}</span> / 全部{allTodo}
        </span>
        <button onClick={this.handleDelAll} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
