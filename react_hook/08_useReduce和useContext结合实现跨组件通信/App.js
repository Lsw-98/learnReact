import React, { useReducer, useContext } from "react";

function Child1() {
  const { dispatch } = useContext(GlobalContext)
  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: "changeA",
          value: "aaaa",
        })
      }}>改变a</button>
      <button onClick={() => {
        dispatch({
          type: "changeB",
          value: "bbb",
        })
      }}>改变b</button>
    </div>
  )
}

function Child2() {
  const { state } = useContext(GlobalContext)
  return (
    <div>
      {state.a}
    </div>
  )
}

function Child3() {
  const { state } = useContext(GlobalContext)
  return (
    <div>
      {state.b}
    </div>
  )
}

const reducer = (preState, action) => {
  let newState = { ...preState }
  switch (action.type) {
    case "changeA":
      newState.a = action.value
      return newState
    case "changeB":
      newState.b = action.value
      return newState
    default:
      return preState
  }
}

const intialState = {
  a: "111",
  b: "222"
}

// 实例化一个Context对象
const GlobalContext = React.createContext()

// useReducer配合useContext实现跨组件通信
function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <GlobalContext.Provider value={
      {
        state,
        dispatch,
      }
    }>
      <div className="App">
        <Child1 />
        <Child2 />
        <Child3 />
      </div >
    </GlobalContext.Provider>
  );
}

export default App;
