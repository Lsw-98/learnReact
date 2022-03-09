import React, { Component } from 'react'
import axios from 'axios'
import './Cinema.css'
import BetterScroll from 'better-scroll'

export default class Cinema extends Component {
  state = ({
    cinemaArr: [],
    copyCinemaArr: [],
    isShowSearch: false,
  })

  componentDidMount() {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1444432",
      method: "get",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16463016686457633653391361","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.setState({
        cinemaArr: res.data.data.cinemas,
        copyCinemaArr: res.data.data.cinemas,
      })
      // 这里本身就在异步操作中，所以直接使用同步写法
      new BetterScroll(".wrapper")
    }).catch(err => {
      console.log(err);
    })
  }

  showSearch = () => {
    this.setState({
      isShowSearch: !this.state.isShowSearch
    }, () => {
      new BetterScroll(".wrapper")
    })
  }

  handleSearch = (event) => {
    const newCinemaArr = this.state.copyCinemaArr.filter((item) => {
      return item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
    })
    this.setState({
      cinemaArr: newCinemaArr
    }, () => {
      new BetterScroll(".wrapper")
    })
  }

  render() {
    const { cinemaArr } = this.state
    return (
      <div>
        <input onInput={this.handleSearch} type="text" />
        {/* <button onClick={this.handleSearch}>搜索</button> */}
        <div className='wrapper' style={{ height: "500px", overflow: "hidden" }}>
          <div className='content'>
            {
              cinemaArr.map((item) => {
                return (
                  <dl key={item.cinemaId}>
                    <dt>{item.name}</dt>
                    <dd>{item.address}</dd>
                  </dl>
                )
              })
            }
          </div>
        </div>
      </div >
    )
  }
}
