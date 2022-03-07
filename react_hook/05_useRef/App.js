import React, { useState, useRef } from "react";

function App() {
  // 数组中第一个参数是状态名，第二个参数改变该状态的唯一方法
  const [list, setList] = useState(["aa", "bb", "cc"])
  const [count, setCount] = useState(0)
  const context = useRef()

  const handleClick = () => {
    setList([...list, context.current.value])
    context.current.value = ""
  }

  const delClick = (index) => {
    const newList = [...list]
    // 如果仅删除一个元素，则返回一个元素的数组。 如果未删除任何元素，则返回空数组。
    newList.splice(index, 1)
    setList(newList)
  }

  const addNum = () => {
    setCount(count + 1)
    myRefCount.current += 1
  }

  let myRefCount = useRef(0)

  return (
    <div className="App">
      <input ref={context}></input>
      <button onClick={handleClick}>点我</button>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index}>{item}
                <button onClick={() => { delClick(index) }}>删除</button>
              </li>
            )
          })
        }
      </ul>

      <h2>{count}---{myRefCount.current}</h2>
      <button onClick={addNum}>+1</button>
    </div >
  );
}

export default App;
