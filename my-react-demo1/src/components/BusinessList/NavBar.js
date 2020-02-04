import React, { Component } from 'react'
import styled from 'styled-components'

const NavBarBox = styled.div`
 height: 40px;
 display:flex;
 span {
   flex:1;
   display: flex;
   justify-content:center;
   align-items: center;
 }
 .active {
   color: red;
 }
`;

export default class NavBar extends Component {
  state = {
    list: ['综合排序','销量最高','距离最近','筛选'],
    tabIndex: 0
  }
  render() {
    const { tabIndex,list } = this.state;
    return (
      <NavBarBox>
         {
           list.map((item, index) => {
              return <span key={index}
              className={index === tabIndex ? 'active': ''}
              onClick={() => {this.onTabClick(index)}} 
              >{item}</span> 
           })
         }
      </NavBarBox>
    )
  }

  onTabClick = (index) => {
    this.setState({
      tabIndex: index
    })
    const { onTabEvent } = this.props;
    if (onTabEvent) {
      onTabEvent(index)
    }
  }
}
