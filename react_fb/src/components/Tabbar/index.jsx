import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Tabbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/films" activeClassName='active'>电影</NavLink>
        </li>
        <li>
          <NavLink to="/cinemas" activeClassName='active'>影院</NavLink>
        </li>
        <li>
          <NavLink to="/center" activeClassName='active'>我的</NavLink>
        </li>
      </ul>
    </div>
  )
}
