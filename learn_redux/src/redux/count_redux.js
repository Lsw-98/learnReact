// reducer的本质就是一个函数
// 该文件为一个为Count组件服务的reducer

// 初始化状态
const initState = 0

function countRedux(preState = initState, action) {

  const { type, data } = action
  switch (type) {
    case "increment":
      return preState + data
    case "decrement":
      return preState - data
    case "incrementOdd":
      return preState + data
    case "incrementAsync":
      return preState + data
    default:
      return preState
  }
}

export default countRedux