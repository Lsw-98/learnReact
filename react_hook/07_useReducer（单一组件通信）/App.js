import React, { useReducer } from "react";

// 处理函数
const reducer = (preState, action) => {
  let newState = { ...preState }
  switch (action.type) {
    case "add":
      newState.count += 1
      return newState
    case "jian":
      newState.count -= 1
      return newState
    default:
      return preState
  }
}

// 外部状态
const intialState = { 
  count: 0
}

function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <div className="App">
      <button onClick={() => { dispatch({ type: "add" }) }}>+1</button>
      <h2>{state.count}</h2>
      <button onClick={() => { dispatch({ type: "jian" }) }}>-1</button>
    </div >
  );
}

export default App;
