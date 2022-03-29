const initState = {
  status: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "send_heart":
      return {
        status: true
      }
    case "cancel_heart":
      return {
        status: false
      }
    default:
      return state
  }
}

export default reducer