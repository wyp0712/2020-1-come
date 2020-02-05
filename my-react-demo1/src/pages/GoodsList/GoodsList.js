import React, { Component } from 'react'
import GoodsHeader from '@/components/GoodsList/GoodsHeader'
import GoodsNav from '@/components/GoodsList/GoodsNav'
import GoodsContent from '@/components/GoodsList/GoodsContent'
import CartCom from '@/components/GoodsList/CartCom'

import { 
  getGoodsList,
  getLeftIndex } from '../../store/actionCreator'
import { connect } from 'react-redux'

class GoodsList extends Component {

  state = {
    tabIndex: 0
  }
  render() {
    return (
      <div>
        <GoodsHeader {...this.props}/>
        <GoodsNav 
         getIndexEvent = {(index) => this.getTabIndex(index)}
        />
        <GoodsContent
          goods={this.props.goods}
          tabIndex={this.state.tabIndex}
        />
        <CartCom />
      </div>
    )
  }

  getTabIndex = (index) => {
    this.setState({
      tabIndex: index
    })
    console.log(index, 'tab----index')
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
