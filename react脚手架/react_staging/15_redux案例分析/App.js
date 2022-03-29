import React, { Component } from 'react'
import Child1 from './pages/Child1'
import Child2 from './pages/Child2'

import store from './store'
import { Provider } from 'react-redux'

export default class App extends Component {

  render() {
    return (
      // 使用Provider包裹组件，被包裹的组件就可以使用store中的state了
      < Provider store={store} >
        <div>
          <Child1 />
          <Child2 />
        </div>
      </Provider >
    )
  }
}
