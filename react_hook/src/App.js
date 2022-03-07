import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

// 自定义hooks函数
// 返回films列表
function useCinemaList() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1444432",
      method: "get",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16463016686457633653391361","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      setFilms(res.data.data.cinemas)
    }).catch(err => {
      console.log(err);
    })
  }, [films])

  return {
    films
  }
}

function useFilter(films, context) {
  // 这里使用UseMemo，useMemo会执行回调函数，将结果返回
  const handleSearch = useMemo(() =>
    films.filter(item =>
      item.name.toUpperCase().includes(context.toUpperCase()) ||
      item.address.toUpperCase().includes(context.toUpperCase())
    ), [films, context]
  )

  return {
    handleSearch
  }
}

function App() {
  const [context, setContext] = useState("")

  const { films } = useCinemaList()

  const { handleSearch } = useFilter(films, context)

  return (
    < div className="App" >
      <input value={context} onChange={(event) => { setContext(event.target.value) }} type="text" />
      <ul>
        {
          handleSearch.map((item) => {
            return (
              <li key={item.cinemaId}>{item.name}</li>
            )
          })
        }
      </ul>
    </div >
  );
}

export default App;
