import React from 'react'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Board from '../pages/Home/Board'
import Article from '../pages/Home/Article'
import Login from '../pages/Login'

export default function GetRouter() {
  return (
    <BrowserRouter>
      {/* 路由入口：指定跳转到哪一个组件，to用来配置路由地址 */}
      <Link to='/'>首页</Link>
      <Link to='/about'>关于</Link>
      <Link to='/login'>登录</Link>
      {/* 路由出口：路由对应的组件会在这里进行渲染 */}
      <Routes>
        {/* 指定路径和组件的对应关系，用于指定导航链接，完成路由匹配 */}
        <Route path="/" element={<Home />}>
          {/* 定义二级路由 */}
          {/* 默认二级路由 */}
          <Route index element={<Board />}></Route>
          <Route path='article' element={<Article />}></Route>
        </Route>
        <Route path="/about/:id" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter >
  )
}
