import React, { Component } from 'react'

export default class Detail extends Component {

  render() {
    // 1.接收params参数
    const { id, title } = this.props.match.params

    const DetailData = [
      { id: "01", content: "Vue" },
      { id: "02", content: "NodeJs" },
      { id: "03", content: "React" },
    ]

    return (
      <div>
        <li>id:{id}</li>
        <li>title:{title}</li>
        <h2>Content:</h2>
        {
          DetailData.map((item) => {
            if (item.id === id) {
              return < span key={id} > {item.content}</span>
            }
          })
        }
      </div >
    )
  }
}
