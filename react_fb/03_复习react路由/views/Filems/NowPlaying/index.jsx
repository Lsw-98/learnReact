import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

export default function NowPlaying(props) {
  // NowPlaying是films的孩子，可以接收到props
  // 可以使用this.props.histroy下的方法实现编程式导航


  // useEffect(() => {
  //   axios({
  //     url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1444432",
  //     method: "get",
  //     headers: {
  //       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16463016686457633653391361","bc":"110100"}',
  //       'X-Host': 'mall.film-ticket.cinema.list'
  //     }
  //   }).then(res => {
  //     console.log(res.data.data.films);
  //   })
  // }, [])

  const [filmList, setFilmList] = useState([])

  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9132997",
      method: "get",
      headers: {
        'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.0", "e": "16463016686457633653391361", "bc": "110100" }',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      setFilmList(res.data.data.films);
    })
  }, [])

  // const handleClick = (id) => {
  //   // 路由传参的方式

  //   // 1. 动态路由
  //   // props.history.go(`/detail/${id}`)

  //   // 2. query传参
  //   props.history.push({ pathname: "/detail", query: { id } })
  // }

  return (
    <div>
      {
        filmList.map(item =>
          // 封装为小的film组件
          <WithFilmItem key={item.filmId} {...item} />

          // return (
          //   <li key={filmId} onClick={() => handleClick(filmId)}>
          //     <NavLink to={'/detail/' + filmId}>
          //       {name}
          //     </NavLink>
          //   </li>
          // )
        )
      }

    </div>
  )
}

function FileItem(props) {
  let { filmId, name } = props
  return (
    <li onClick={() => {
      props.history.push(`/detail/${filmId}`)
    }}>
      {/* <NavLink to={'/detail/' + filmId}>
        {name}
      </NavLink> */}
      {name}
    </li>
  )
}

const WithFilmItem = withRouter(FileItem)