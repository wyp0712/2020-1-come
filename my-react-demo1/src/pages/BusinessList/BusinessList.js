import React, { Component } from 'react'
// import styled from 'styled-components'
// import HeaderBar from '@/components/BusinessList/Header.js'
import IconBox from './node_modules/@/components/BusinessList/IconBox'

export default class BusinessList extends Component {

  state = {
    round: true
  }

  render() {
    return (
      <div>
        <IconBox />
        商家列表
      </div>
    )
  }

  onImageClick = () => {
    console.log('image点击事件')
  }
}
