import React from 'react'
import { Button } from 'antd'

// 1. 为theme创建一个context
const ThemeContext = React.createContext('light')
const ColorContext = React.createContext('red')

export default function ContextDemo() {
  return (
    // 2. 使用Provider将想要共享属性的组件包裹起来
    // 这样无论组件树多深。都可以访问到Context定义的属性
    <ThemeContext.Provider value='dark'>
      <ColorContext.Provider value='blue'>
        <Toolbar />
      </ColorContext.Provider>
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {

  handleClick = () => {


  }

  render() {
    return (
      <ThemeContext.Consumer>
        {
          (theme) => (

            < ColorContext.Consumer >
              {
                (color) => (
                  <Button theme={theme} color={color} onClick={this.handleClick} />
                )
              }
            </ColorContext.Consumer>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}