// 1. 创建action对象
const sendAction = () => {
  // 2. 返回一个action对象
  return {
    type: "send_action",
    value: "我是一个action",
  }
}

// 3. 导出action对象
export default sendAction

// action是一个方法，它返回一个对象，对象包括type和value