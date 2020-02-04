import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar, Icon } from 'antd-mobile';
import ImageView from '../BaseComponents/ImageView'
const GoodsHeaderWrapper = styled.div`
   background-color: rgb(46, 47, 59);
   height: 130px;
   .top {
    .am-navbar-light {
      background-color: rgb(46, 47, 59);
    }
   }
`;

export default class GoodsHeader extends Component {
  render() {
    return (
      <GoodsHeaderWrapper>
        <div className="top">
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.go(-1)}
          ></NavBar>
        </div>
        <ul className="bottom">
            <li>
             <ImageView 
              width='85px'
              height='64px'
              src="https://p0.meituan.net/waimaipoi/6c86a9774d19a649e7c4a5f8b1044f6821905.jpg@114h_80Q_0e_1l.webp?cimage=true"
             />
            </li> 
        </ul>
      </GoodsHeaderWrapper>
    )
  }
}
