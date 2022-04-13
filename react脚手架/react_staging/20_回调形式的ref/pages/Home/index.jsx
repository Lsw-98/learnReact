import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    // 首先设置节点为 null
    this.textInput = null

    this.setTextInputRef = element => {
      // 调用回调函数，将输入框的DOM赋值给textInput
      this.textInput = element
    }

    this.focusTextInput = () => {
      // 使用原生DOM API使text输入框获得焦点
      if (this.textInput) {
        // 先让文本框失去焦点，然后点击按钮后使文本框得到焦点
        this.textInput.focus()
      }
    }
  }

  componentDidMount() {
    // 组件被挂载后，让文本框自动获得焦点
    this.focusTextInput()
  }

  render() {
    return (
      <div>
        {/* 使用ref的回调函数将text输入框DOM节点的引用存储到React */}
        <input type="text" ref={this.setTextInputRef} />
        <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
      </div>
    )
  }
}
