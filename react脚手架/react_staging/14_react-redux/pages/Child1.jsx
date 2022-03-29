import React from 'react'
import { connect } from 'react-redux'

// 该组件作为发送方，要实现connect的mapDispatchToProps(dispatch, ownProps)函数
/**
 * 2. 实现mapDispatchToProps()方法，该方法返回一个对象
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    sendAction: () => {
      // 3. 利用dispatch发送一个action对象
      dispatch(
        // 4. 定义一个action对象
        {
          type: "add_action",
        }
      )
    },
  }
}

function Child1(props) {
  const handleClick = () => {
    // 5. 执行sendAction()发送action
    props.sendAction()
  }

  return (
    <>
      <button onClick={handleClick}>+</button>
    </>
  )
}

// 1. 利用connect将组件加强
export default connect(null, mapDispatchToProps)(Child1)