import React from 'react'
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function About(props) {
  const handleClick = () => {
    // 编程式导航
    props.history.push('/')
  }

  return (
    <div>
      <button onClick={handleClick}>返回首页</button>
      <div>
        {
          props.children
        }
      </div>
    </div>
  )
}

export default withRouter(About)