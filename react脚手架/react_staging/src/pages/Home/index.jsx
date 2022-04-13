import React from 'react'
import { Button } from 'antd'

export default function Home() {
  return (
    <div>
      <Toolbar theme="dark" />
    </div>
  )
}

function Toolbar(props) {
  return (
    <div>
      {/* 
        Toolbar组件接受一个额外的theme属性，然后传递给ThemedButton组件，
        如果React应用中每个按钮都需要这样，那就很繁琐 
        因为对于theme这个属性必须逐层传递
      */}
      <ThemedButton theme={props.theme} />
    </div>
  )
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />
  }
}
