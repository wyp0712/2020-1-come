import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 引入swiper组件
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default class GoodsContent extends Component {
  static propTypes = {}

  render() {
    const { goodsData } = this.props
    return (
      <div className="swiper-container">
         <div className="swiper-wrapper">
           {
             goodsData.length && goodsData.map((item, index) => {})
           }
           <div className="swiper-slide">
             { console.log(goodsData, 'goodsData') }
           </div>
           <div className="swiper-slide">
             2
           </div>
           <div className="swiper-slide">
             3
           </div>
         </div>
      </div>
    )
  }

  componentDidMount() {
    new Swiper('.swiper-container', {})
  }
}
