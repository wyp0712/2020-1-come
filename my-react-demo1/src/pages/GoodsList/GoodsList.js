import React, { Component } from 'react'
import GoodsHeader from '@/components/GoodsList/GoodsHeader'
import GoodsNav from '@/components/GoodsList/GoodsNav'
import GoodsContent from '@/components/GoodsList/GoodsContent'
import CartCom from '@/components/GoodsList/CartCom'

import { 
  getGoodsList } from '../../store/actionCreator'
import { connect } from 'react-redux'
import styled from 'styled-components'

const GoodsWrapper = styled.div`
  height: calc(100vh - 50px);
  display:flex;
  flex-direction:column;

  .header {

  }

  .main {
    flex:1;
    width: 100%;
    overflow: auto;
  }


`;

class GoodsList extends Component {

  state = {
    tabIndex: 0
  }
  render() {
    return (
      <GoodsWrapper className="goods-wrapper">
        <GoodsHeader {...this.props}/>
        <GoodsNav 
         getIndexEvent = {(index) => this.getTabIndex(index)}
        />
        <div className="main">
          <GoodsContent
            goods={this.props.goods}
            tabIndex={this.state.tabIndex}
          />
        </div>

        <CartCom {...this.props}/>
      </GoodsWrapper>
    )
  }

  getTabIndex = (index) => {
    this.setState({
      tabIndex: index
    })
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
