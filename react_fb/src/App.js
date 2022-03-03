import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class App extends Component {
  state = ({
    content: "",
    messageArr: [
      { id: "1", content: "vue真好用" },
      { id: "2", content: "react大厂用的多" },
      { id: "3", content: "nodejs必须掌握" },
    ]
  })

  addContent = () => {
    console.log(this.c);
    const newContent = { id: nanoid(), content: this.c.value }
    this.setState({
      messageArr: [...this.state.messageArr, newContent]
    })

    // 清空输入框
    this.c.value = ""
  }

  delContent = (id) => {
    const newMessages = this.state.messageArr.filter((item) => {
      return item.id !== id
    })
    this.setState({
      messageArr: newMessages
    })
  }

  render() {
    return (
      <div>
        <input ref={content => { this.c = content }} type="text" />
        <button onClick={this.addContent}>add</button>
        <ul>
          {
            this.state.messageArr.map((item) => {
              return (
                <div>
                  <li key={item.id}>{item.content}
                    {/* <button onClick={this.delContent.bind(this, item.id)}>del</button> */}
                    <button onClick={() => { this.delContent(item.id) }}>del</button>
                  </li>
                </div>
              )
            })
          }
        </ul>
        {
          this.state.messageArr.length === 0 ? <h2>暂无待办事项</h2> : null
          // this.state.messageArr.length === 0 && <h2>暂无待办事项</h2> 
        }
      </div >
    )
  }
}
