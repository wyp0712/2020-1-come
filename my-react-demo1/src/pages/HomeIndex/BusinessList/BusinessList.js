import React, { Component } from 'react'
// import styled from 'styled-components'
// import HeaderBar from '@/components/BusinessList/Header.js'
import IconBox from '@/components/BusinessList/IconBox'
import NavBar from '@/components/BusinessList/NavBar'
import MerchantList from '@/components/BusinessList/MerchantList'


export default class BusinessList extends Component {

  state = {
    round: true
  }

  render() {
    return (
      <div>
        <IconBox />
        <NavBar
         onTabEvent={ (index) => this.onTabEvent(index) }
        />
        <MerchantList
         merchantEvent={ () => this.merchantEvent() }
        />
      </div>
    )
  }

  onTabEvent = (index) => {

  }

  merchantEvent = () => {
    console.log('跳转事件')
    this.props.history.push('/goods')
  }

  onImageClick = () => {
    console.log('image点击事件')
  }
}
