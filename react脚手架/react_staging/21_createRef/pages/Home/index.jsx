import React, { Component } from 'react'
import About from '../About'

export default class Home extends Component {
  constructor(props) {
    super(props)
    // 将ref属性赋值给一个实例属性
    this.textInputRef = React.createRef()
  }

  componentDidMount() {
    // 在组件的任何地方都可以使用
    this.textInputRef.current.focusTextInput()
  }

  render() {
    return (
      <div>
        <About ref={this.textInputRef} />
      </div>
    )
  }
}
