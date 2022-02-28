import React, { Component } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import List from './components/List/List'
import './App.css'

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "写代码", done: false },
    ]
  }

  getTodo = (todoObj) => {
    const { todos } = this.state
    this.setState({
      todos: [todoObj, ...todos]
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
          <List todos={todos}></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

