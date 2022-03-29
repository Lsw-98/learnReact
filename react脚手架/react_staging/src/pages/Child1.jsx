import React, { useState } from 'react'

import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
  return {
    sendHeartAction: () => {
      dispatch({
        type: "send_heart"
      })
    },
    cancelHeartAction: () => {
      dispatch({
        type: "cancel_heart"
      })
    }
  }
}

function Child1(props) {
  const { sendHeartAction, cancelHeartAction } = props
  const [heart, setHeart] = useState(false)

  const handleClick = () => {
    heart ? cancelHeartAction() : sendHeartAction()
    setHeart(!heart)
  }
  return (
    <>
      <button onClick={handleClick}>{heart ? "取消发送爱心" : "点我发送爱心"}</button>
    </>
  )
}

export default connect(null, mapDispatchToProps)(Child1)