import React from 'react'
// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const FooterBox = styled.div`
 display:flex;
 height: 100%;
 a {
   flex:1;
   display:flex;
   justify-content: center;
   align-items: center;
 } 
 .active {
   color: red;
 }
`;

const Footerbar = (props) => {
  return (
    <FooterBox>
      <NavLink to="/homeIndex/business">首页</NavLink>
      <NavLink to="/homeIndex/myOrder">订单</NavLink>
      <NavLink to="/homeIndex/mine">我的</NavLink>
    </FooterBox>
  )
}

export default Footerbar