import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'
import About from '../pages/About'
import Messages from '../pages/About/Messages'
import News from '../pages/About/News'
import Cart from '../pages/Cart'
import Details from '../pages/Cart/Details'
import Home from '../pages/Home'
import './index.css'

export default function SetRouter() {
  return (
    <Router>
      <ul>
        <li>
          {/* Link中的to === Route中的path */}
          <NavLink exact to='/'>首页</NavLink>
        </li>
        <li>
          <NavLink exact to='/cart'>购物车</NavLink>
        </li>
        <li>
          <NavLink exact to="/about">关于</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path='/' component={Home}></Route>

        <About path="/about">
          <div>
            <ul>
              <li><NavLink exact to='/about'>News</NavLink></li>
              <li><NavLink exact to='/about/messages'>Messages</NavLink></li>
            </ul>
          </div>
          <Switch>
            <Route exact path='/about' component={News}></Route>
            <Route exact path='/about/messages' component={Messages}></Route>
          </Switch>
        </About>
        <Route exact path='/cart' component={Cart}></Route>
        {/* 动态路由 */}
        <Route exact path='/details/:id' component={Details}></Route>
      </Switch>
    </Router>

  )
}
