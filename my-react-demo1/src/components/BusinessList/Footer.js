import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Footerbar = (props) => {
  return (
    <div>
      <NavLink>首页</NavLink>
      <NavLink>订单</NavLink>
      <NavLink>我的</NavLink>
    </div>
  )
}

// export default class FooterBar extends Component {
//   static propTypes = {
//     // prop: PropTypes
//   }

//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
