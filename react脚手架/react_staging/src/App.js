import React, { Component } from 'react'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import { Route, Switch } from 'react-router-dom'
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
              {/* 这里是配置的路由标签 */}
              <MyNavLink to="/lsw/about" title="About">About</MyNavLink>
              <MyNavLink to="/lsw/home" title="Home">Home</MyNavLink>
            </div>
          </div>
          {/* 
            注册路由
            若匹配上了某个路由，就不会继续往下匹配了
           */}
          <Switch>
            {/* 这里是需要展示的路由标签 */}
            {/* 
              path需要和to进行匹配
              默认为模糊匹配
              模糊匹配：to若包含path，则可以匹配成功，不需要to和path完全一样
              严格匹配：exact
            */}
            <Route exact path='/lsw/about' component={About}></Route>
            <Route exact path='/lsw/home' component={Home}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}
