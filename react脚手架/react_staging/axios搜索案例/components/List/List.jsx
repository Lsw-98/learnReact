import React, { Component } from 'react'
import './List.css'

export default class List extends Component {
  render() {
    const { data, isFirst, isLoading, err } = this.props
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
