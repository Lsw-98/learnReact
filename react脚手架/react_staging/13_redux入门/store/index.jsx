import reducer from "../reducer";
import { createStore } from 'redux'

// 1. 创建Store
const store = createStore(reducer)

// 2. 导出Store
export default store

// store是一个“中间人”，可以通过store.getState()获得新的state
// 通过store.dispatch(action)发送一个action到reducer
// 通过store.subscribe()对reducer进行监听