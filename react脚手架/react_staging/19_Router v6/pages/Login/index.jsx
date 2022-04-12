import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleClick = () => {
    // 跳转到about页
    // navigate('/about')
    // navigate('/about', { replace: true })
    // navigate(-1)    // 相当于back
    // navigate(1)     // 相当于forward
    // navigate(-2)

    // 路由传参
    // navigate('/about?id=1001')

    navigate('/about/1002')
  }

  return (
    <div>
      <button onClick={handleClick}>登录</button>
    </div>
  )
}
