import React, { Component } from 'react'
import About from './components/About/About'
import Home from './components/Home/Home'
import { Link, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 在原生html中，使用<a>跳转不同的页面 */}
              {/*<a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a>*/}

              {/* 在React中使用Link标签实现不同路由之间的切换 */}
              <Link className="list-group-item" to="/about">About</Link>
              <Link className="list-group-item" to="/home">Home</Link>
            </div>
          </div>
          {/* 注册路由 */}
          <Route path='/about' component={About}></Route>
          <Route path='/home' component={Home}></Route>
        </div>
      </div>
    )
  }
}
