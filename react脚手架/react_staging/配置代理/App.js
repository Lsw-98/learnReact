import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

export default class App extends Component {
  getStudentData = () => {
    axios.get("http://localhost:3000/api1/students").then((res) => {
      console.log(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  getCarData = () => {
    axios.get("http://localhost:3000/api2/cars").then((res) => {
      console.log(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div >
        <button onClick={this.getStudentData}>点我请求学生数据</button>
        <button onClick={this.getCarData}>点我请求汽车数据</button>
      </div>
    )
  }
}

