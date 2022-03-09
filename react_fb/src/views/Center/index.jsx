import React from 'react'

export default function Center(props) {
  return (
    <div>
      <span onClick={() => {
        props.history.push('/filmsorder')
      }}>电影订单</span>
    </div>
  )
}
