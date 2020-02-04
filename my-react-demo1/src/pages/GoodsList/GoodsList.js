import React, { Component } from 'react'
import GoodsHeader from '@/components/GoodsList/GoodsHeader'
import GoodsNav from '@/components/GoodsList/GoodsNav'
import GoodsContent from '@/components/GoodsList/GoodsContent'


import { 
  getGoodsList,
  getGoodsLeftArr } from '../../store/actionCreator'
import { connect } from 'react-redux'

class GoodsList extends Component {
  render() {
    return (
      <div>
        <GoodsHeader {...this.props}/>
        <GoodsNav />
        <GoodsContent
         goodsData={this.props.goods}
        />
      </div>
    )
  }

  componentDidMount() {
    const { getAjax } = this.props;
    getAjax && getAjax()
  }
}

const mapStateToProps = (state) => {
  return {
    goods: state.goods
  }
}

const mapActionsToProps = (dispatch) => {
   return {
     getAjax() {
       const action =  getGoodsList()
       dispatch(action) 
     }
   } 
}

export default connect(mapStateToProps, mapActionsToProps)(GoodsList)
