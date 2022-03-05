import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './List.css'

export default class List extends Component {
  state = {
    data: [],
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    err: "", //存储错误信息
  }

  componentDidMount() {
    // 订阅消息
    // 第一个参数updateState是订阅名，第二个参数是data，表示接收到的消息数据
    this.token = Pubsub.subscribe('updateState', (_, stateObj) => {
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    Pubsub.unsubscribe(this.token)
  }

  render() {
    const { data, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，请输入关键字，然后点击搜索</h2> :
            isLoading ? <h2>Loading........</h2> :
              err ? <h2>{err}</h2> :
                data.map((dataObj => {
                  return (
                    <div className="card" key={dataObj.id}>
                      <a rel="noreferrer" href={dataObj.html_url} target="_blank">
                        <img src={dataObj.avatar_url} alt='' style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{dataObj.login}</p>
                    </div>
                  )
                }))
        }
      </div>
    )
  }
}
