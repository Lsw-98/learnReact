import React, { Component } from 'react'
import './ListItem.css'

export default class ListItem extends Component {
  state = {
    mouse: false
  }

  // 鼠标移入移出
  handleMouse = (flag) => {
    return (() => {
      this.setState({
        mouse: flag
      })
    })
  }

  // 单选框是否选中
  handleClick = (id) => {
    return ((event) => {
      this.props.updateTodos(id, event.target.checked)
    })
  }

  // 删除一项todo
  handleDel = (id) => {
    return (() => {
      if (window.confirm("你确定要删除吗？")) {
        this.props.deleteTodo(id)
      }
    })
  }

  render() {
    // 这里还是App.js中定义的变量名，不能随意改
    const { id, name, done } = this.props
    const { mouse } = this.state

    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : "white" }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleClick(id)} />
          <span>{name}</span>
        </label>
        <button onClick={this.handleDel(id)} className="btn btn-danger" style={{ display: mouse ? "block" : "none" }}>删除</button>
      </li >
    )
  }
}
