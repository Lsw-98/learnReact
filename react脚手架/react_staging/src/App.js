import React, { Component } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import List from './components/List/List'
import './App.css'

export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "写代码", done: false },
    ]
  }

  // 新增一项todo
  getTodo = (todoObj) => {
    const { todos } = this.state
    this.setState({
      todos: [todoObj, ...todos]
    })
  }

  // 更改todoObj中的done
  updateTodos = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map(todoObj => {
      // 匹配并处理数据
      if (todoObj.id === id) return { ...todoObj, done }   // 替换原来的todoObj，并更改done变量
      else return todoObj
    })
    this.setState({
      todos: newTodos
    })
  }

  // 删除一项todo
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter(todoObj => {
      // 过滤掉当前id
      return todoObj.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }

  // 删除所有已完成的todo
  deleteAllTodo = () => {
    const { todos } = this.state
    const newTodos = todos.filter(todoObj => {
      return !todoObj.done
    })
    this.setState({
      todos: newTodos
    })
  }

  // 全选与全不选
  selectAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map(todoObj => {
      return { ...todoObj, done }
    })
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          {/* 
            子组件向父组件传数据:
              1. 父传给子一个函数
              2. 子调用该函数
          */}
          <Header getTodo={this.getTodo}></Header>
          <List todos={todos} updateTodos={this.updateTodos} deleteTodo={this.deleteTodo}></List>
          <Footer todos={todos} deleteAllTodo={this.deleteAllTodo} selectAllTodo={this.selectAllTodo}></Footer>
        </div>
      </div>
    )
  }
}

