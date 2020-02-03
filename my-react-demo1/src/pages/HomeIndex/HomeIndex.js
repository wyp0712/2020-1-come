import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import RouterView from '../../router/index'
import FooterBar from '../../components/BusinessList/Footer'
import HeaderBar from '../../components/BusinessList/Header'

import styled from 'styled-components'

const HomeIndexWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const HeaderWrapper = styled.div`
  height: 45px;
  background: #ccc;
`;
const MainWrapper = styled.div`
   width: 100%;
   flex:1;
   overflow: auto;
`;
const FooterWrapper = styled.div`
  height: 45px;
  background: #ccc;
`;

export default class HomeIndex extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      <HomeIndexWrapper>
        <HeaderWrapper>
          <HeaderBar 
           {...this.props}
          />
        </HeaderWrapper>

        <MainWrapper>
          <RouterView routes={this.props.routes}></RouterView>
        </MainWrapper>

        <FooterWrapper>
          <FooterBar />
        </FooterWrapper> 
      </HomeIndexWrapper>
    )
  }
}
