import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      Home
      {/* 二级路由出口 */}
      <Outlet></Outlet>
    </div>
  )
}
