import React from 'react'

export default function Home(props) {
  return (
    <div>
      <button className="FancyButton">
        {props.children}
      </button>
    </div>
  )
}
