import React, { useEffect, useState } from 'react'

export default function App() {
  let [count, setCount] = useState(0)

  useEffect(() => {
    console.log("我是第一个Effect");

    return () => {
      console.log("我是第一个Effect，我被卸载了");
    }
  })

  useEffect(() => {
    console.log(count);

    return () => {
      console.log("我是第二个Effect，我被卸载了");
    }
  }, [count])

  const handleClick = () => {
    setCount(count += 1)
  }


  return (
    <div>
      <button onClick={handleClick}>点我</button>
    </div>
  )
}
