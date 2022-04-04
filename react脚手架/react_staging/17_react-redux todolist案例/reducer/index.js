const initState = {
  inputValue: "默认值",
  data: [1, 2, 3]
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "inputValue":
      const newInputState = JSON.parse(JSON.stringify(state))
      newInputState.inputValue = action.value
      return newInputState
    case "clickBtn":
      const newState = JSON.parse(JSON.stringify(state))
      newState.data.push(newState.inputValue)
      newState.inputValue = ''
      return newState

    default:
      return state
  }
}

export default reducer