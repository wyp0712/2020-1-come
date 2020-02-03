import React from 'react'
// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Footerbar = (props) => {
  return (
    <div>
      <NavLink to="/homeIndex/business">首页</NavLink>
      <NavLink to="/homeIndex/myOrder">订单</NavLink>
      <NavLink to="/homeIndex/mine">我的</NavLink>
    </div>
  )
}

export default Footerbar