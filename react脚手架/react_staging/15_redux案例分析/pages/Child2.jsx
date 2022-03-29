import React from 'react'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return state
}

function Child2(props) {
  console.log(props);
  return (
    <></>
  )
}

export default connect(mapStateToProps)(Child2)
