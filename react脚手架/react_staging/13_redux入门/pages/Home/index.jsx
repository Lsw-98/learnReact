import sendAction from "../../action"
import store from "../../store"
import React, { useEffect, useState } from 'react'

// 在组件加载完毕后通过store进行监听器的注册，返回值可以用来注销监听

// 在Home组件中使用redux

export default function Home() {
  const [update, setUpdate] = useState([])
  const handleClick = () => {
    // 调用sendAction函数
    const action = sendAction()
    // 通过Store.dispatch()发送action
    store.dispatch(action)
  }

  useEffect(() => {
    // 当Home组件加载完毕时，进行对reducer的监听
    store.subscribe(() => {
      setUpdate([])
    })
  }, [store])


  return (
    <>
      <button onClick={handleClick}>发送一个action</button>
      <div>
        {store.getState().value}
      </div>
    </>
  )
}
