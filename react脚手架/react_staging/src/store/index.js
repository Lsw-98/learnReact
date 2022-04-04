import { createStore, applyMiddleware, compose } from 'redux';
import todoReducer from '../reducer';
import thunk from 'redux-thunk'

// 使用增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

// 这里只可以放入两个参数，所以要使用增强函数将中间件和redux扩展插件放在一起
const todoStore = createStore(todoReducer, enhancer)

export default todoStore
