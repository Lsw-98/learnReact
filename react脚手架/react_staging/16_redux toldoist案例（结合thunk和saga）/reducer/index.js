const initState = {
  inputValue: "请输入任务名称",
  data: []
}

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "inputValueChange":
      return {
        inputValue: action.value,
      }
    case "addItem":
      // 深拷贝state
      let newState = JSON.parse(JSON.stringify(state))
      // 将输入框的值加入到state数组中
      newState.data.push(newState.inputValue)
      // 将输入框置为空
      newState.inputValue = ""
      return newState
    case "delItem":
      let newDelState = JSON.parse(JSON.stringify(state))
      console.log(newDelState);
      // splice(index, length)    删除数组指定位置的数据
      newDelState.data.splice(action.value, 1)
      return newDelState
    case "getList":
      let getListlState = JSON.parse(JSON.stringify(state))
      action.value.map(item => {
        getListlState.data.push(item)
      })
      return getListlState
    default:
      return state
  }
}

export default todoReducer
