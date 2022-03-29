// 2. 设置一个初始的state，若state为空则使用initState
const initState = {
  value: "初始值"
}

// 1. 创建reducer，reducer接收两个参数，第一个参数是默认状态，第二个参数为一个action对象
const reducer = (state = initState, action) => {
  // 3. 判断action的type值，如果匹配，返回新的state
  switch (action.type) {
    case "send_action":
      return Object.assign({}, state, action)
    default:
      return state
  }
}


// 导出reducer
export default reducer

// reducer是一个方法，它接受两个参数，一个是preState，另一个action，返回新的state