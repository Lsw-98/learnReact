import React, { useEffect, useState } from "react";
import axios from 'axios'

function Child() {
  useEffect(() => {
    window.onresize = () => {
      console.log("resize");
    }
    const timer = setInterval(() => {
      console.log("111");
    }, 1000)

    return () => {
      // 销毁组件
      window.onresize = null
      clearInterval(timer)
      console.log("child组件销毁了");
    }
  }, [])

  return (
    <div>App</div>
  )
}

function App() {
  // 数组中第一个参数是状态名，第二个参数改变该状态的唯一方法
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [isCreated, setIsCreated] = useState(false);


  // useEffect类似于componentDidMount
  useEffect(() => {
    // 这里请求只会执行一次
    // axios.get("").then(res => {
    //   console.log(res.data);
    // })
    console.log('useEffect触发了')
  }, [count1])   // 这里可以绑定多个状态，只有绑定的状态变化了才会触发useEffect()

  return (
    <div className="App">
      <h1>count1：{count1}</h1>
      <h1>count2：{count2}</h1>
      <button onClick={() => setCount1(count1 + 1)}>count1+1</button>
      <button onClick={() => setCount2(count2 + 1)}>count2+1</button>
      <button onClick={() => setIsCreated(!isCreated)}>click</button>
      {isCreated && <Child />}
    </div >
  );
}

export default App;
