import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Cart() {
  const newGoods = [
    { id: '001', name: "汽车" },
    { id: '002', name: "房子" },
    { id: '003', name: "手表" },
  ]
  const [goods, setGoods] = useState(newGoods)

  return (
    <div>
      <ul>
        {
          goods.map((item) => (
            <li key={item.id}><NavLink to={`/details/${item.id}`}>{item.name}</NavLink></li>
          ))
        }
      </ul>
    </div>
  )
}
