import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../store'

class TodoList extends Component {

  render() {
    const { inputValue, handleChange, handleClick, data } = this.props
    return (
      <div>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            data.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

// 将state转为props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    data: state.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(event) {
      const action = {
        type: "inputValue",
        value: event.target.value
      }
      dispatch(action)
    },
    handleClick() {
      const action = {
        type: "clickBtn",
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)