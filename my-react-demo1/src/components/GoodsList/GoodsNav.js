import React, { Component } from 'react'
import NavBar from '../BaseComponents/NavBar'

export default class GoodsNav extends Component {

  state = {
    list: ['点菜','评价','商家']
  }

  render() {
    return (
      <NavBar
       tabList={this.state.list}
      ></NavBar>
    )
  }
}
