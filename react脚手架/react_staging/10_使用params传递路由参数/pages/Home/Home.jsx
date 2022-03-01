import React, { Component } from 'react'
import './Home.css'
import Messages from './Messages/Messages'
import News from './News/News'
import { Route, Redirect, Switch } from 'react-router-dom'
import MyNavLink from '../../component/MyNavLink/MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            <h3>我是Home的内容</h3>
            <ul className="nav nav-tabs">
              {/* 
                注册路由
              */}
              <li>
                <MyNavLink to="/home/news">News</MyNavLink>
              </li>
              <li>
                <MyNavLink to="/home/messages">Messages</MyNavLink>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route path='/home/news' component={News}></Route>
          <Route path='/home/messages' component={Messages}></Route>
          <Redirect to="/home/news" />
        </Switch>
      </div>
    )
  }
}
