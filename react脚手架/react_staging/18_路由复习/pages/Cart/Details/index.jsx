import React from 'react'

export default function Detail(props) {
  return (
    <div>
      {
        props.match.params.id === '001' && <div>汽车详情</div>
      }
      {
        props.match.params.id === '002' && <div>房子详情</div>
      }
      {
        props.match.params.id === '003' && <div>手表详情</div>
      }
    </div>
  )
}
