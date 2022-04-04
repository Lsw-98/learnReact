import React, { Component } from 'react'
import { Input, Button, List } from 'antd';
import './TodoList.css'
import store from '../store';
import axios from 'axios'
import { clickAction, delAction, inputAction } from '../action/action';

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    // console.log(store.getState());   // 这里会返回在reducer中定义的默认state
    this.state = store.getState()
    // 绑定this指向
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)

    // 订阅store
    store.subscribe(this.storeChange)
  }

  componentDidMount() {
    // 使用thunk中间件
    axios.get('http://api.tianapi.com/ncov/index?key=ae08907862c9415e6224eaa185c7d3de').then((res) => {
      const list = []
      res.data.newslist[0].news.map((item) => {
        list.push(item.title)
      })

      // 定义action
      const inputAction = {
        type: "getList",
        value: list,
      }
      store.dispatch(inputAction)
    }).catch((err) => {
      console.log(err);
    })
  }

  storeChange = () => {
    // 将state设置为reducer返回的新state
    this.setState(store.getState())
  }

  handleChange = (event) => {
    const action = inputAction(event.target.value)
    store.dispatch(action)
  }

  handleClick = () => {
    const action = clickAction
    store.dispatch(action)
  }

  deleteItem = (index) => {
    const action = delAction(index)
    store.dispatch(action)
  }

  render() {
    return (
      <div className='todolist'>
        <div className='todolist-input'>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: "250px", marginRight: "4px" }}
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
          <Button
            type='primary'
            onClick={this.handleClick}
          >提交</Button>
        </div>
        <div>
          <List
            bordered
            dataSource={this.state.data}
            renderItem={(item, index) => <List.Item onClick={() => { this.deleteItem(index) }}>{item}</List.Item>}
          />
        </div>
      </div>
    )
  }
}
