import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './Header.css'
import PropTypes from 'prop-types'

export default class Header extends Component {
  // 对props进行类型限定
  static propTypes = {
    getTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    const { keyCode, target } = event
    // keyCode = 13为回车键
    if (keyCode !== 13) return
    // 若内容为空不可进行添加
    if (target.value.trim() === '') return
    const todoObj = { id: nanoid(), name: target.value, done: false }
    // 将输入的内容传给父组件
    // 调用父组件传过来的props中的函数给父组件传数据
    this.props.getTodo(todoObj)

    // 按下回车后进行清空
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
