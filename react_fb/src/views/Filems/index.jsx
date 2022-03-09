import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Coming from './Coming'
import NowPlaying from './NowPlaying'

export default function Films() {
  return (
    <div>
      <h2>轮播图</h2>
      <Switch>
        {/* 配置嵌套路由 */}
        <Route path="/films/nowplaying" component={NowPlaying}></Route>
        <Route path="/films/coming" component={Coming}></Route>
        <Redirect from='/films' to="/films/nowplaying"></Redirect>
      </Switch>
    </div>
  )
}
