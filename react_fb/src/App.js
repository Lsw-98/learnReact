import React, { Component } from 'react'
import './App.css'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'

export default class App extends Component {
  render() {
    return (
      <div>
        <MRouter>
          {/* 将Tabbar作为插槽放在MRouter中 */}
          <Tabbar></Tabbar>
        </MRouter>

      </div >
    )
  }
}
