import React, { useState } from "react";

function App() {
  // 数组中第一个参数是状态名，第二个参数改变该状态的唯一方法
  const [text, setText] = useState("")
  const [list, setList] = useState(["aa", "bb", "cc"])

  const handleClick = () => {
    setList([...list, text])
    setText("")
  }

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const delClick = (index) => {
    const newList = [...list]
    // 如果仅删除一个元素，则返回一个元素的数组。 如果未删除任何元素，则返回空数组。
    newList.splice(index, 1)
    setList(newList)
  }

  return (
    <div className="App">
      <input onChange={handleChange} value={text}></input>
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
    </div >
  );
}

export default App;
