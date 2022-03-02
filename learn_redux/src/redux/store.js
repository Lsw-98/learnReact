// 整个应用只有一个store对象

import { createStore } from 'redux'
// 引入为Count组件服务的reducer
import countRedux from './count_redux'

const store = createStore(countRedux)

export default store