import React from 'react'
import { connect } from 'react-redux'

/**
 * 2. 实现mapStateToProps()方法
 * @param {*} state 
 */
const mapStateToProps = (state) => {
  // 3. 将接收到的state返回
  return state
}

function Child2(props) {
  const { count } = props
  return (
    <>
      <div>{count}</div>
    </>
  )
}

// 1. 该组件作为接收方，需要实现connect的mapStateToProps(state, props)函数
export default connect(mapStateToProps)(Child2)