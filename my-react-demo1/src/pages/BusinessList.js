import React, { Component } from 'react'
// import styled from 'styled-components'
import HeaderBar from '@/components/BusinessList/Header.js'

export default class BusinessList extends Component {
  render() {
    return (
      <div>
        <HeaderBar 
         {...this.props}
        />
        商家列表
      </div>
    )
  }
}
