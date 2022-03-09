import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Center from '../views/Center'
import Cinemas from '../views/Cinemas'
import Films from '../views/Filems'
import NotFound from '../components/mistake/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'

function isAuth() {
  return localStorage.getItem("token")
}

export default class IndexRouter extends Component {
  render() {
    return (
      // 封装路由组件
      <HashRouter>
        <Switch>
          <Route path="/films" component={Films}></Route>
          <Route path="/cinemas" component={Cinemas}></Route>
          {/* <Route path="/center" component={Center}></Route> */}
          <Route path="/center" render={(props) => {
            return isAuth() ? <Center {...props} /> : <Redirect to="/login" />
          }}></Route>
          {/* <Route path="/detail/:id" component={Detail}></Route> */}
          <Route path="/detail" component={Detail}></Route>
          <Route path="/login" component={Login}></Route>
          {/* 
            重定向
          */}
          <Redirect exact from='/' to='/films' />
          <Route component={NotFound}></Route>
        </Switch>
        {this.props.children}
      </HashRouter>
    )
  }
}
