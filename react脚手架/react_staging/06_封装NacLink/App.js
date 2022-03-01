import React, { Component } from 'react'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import { Route } from 'react-router-dom'
import MyNavLink from './component/MyNavLink/MyNavLink'

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

              {/* 
                在React中使用Link标签实现不同路由之间的切换
                <NavLink className="list-group-item" to="/home">Home</NavLink>
              */}
              {/* 
                NavLink：给当前路由加高亮
                <NavLink activeClassName="test" className="list-group-item" to='/about'>About</NavLink>
               */}
              {/* 
                标签体是特殊的标签属性，在props中为children
               */}
              <MyNavLink to="/about" title="About">About</MyNavLink>
              <MyNavLink to="/home" title="Home">Home</MyNavLink>
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
