import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import RouterView from '../router/index'

export default class HomeIndex extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      <div className="home-index">
         
         <RouterView routes={this.props.routes}></RouterView>
      </div>
    )
  }
}
