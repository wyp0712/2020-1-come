import React, { Component,Fragment } from 'react'
import PropTypes from 'prop-types'
// 引入swiper组件
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getLeftIndex, getGoodsAdd, getGoodsRemove } from '../../store/actionCreator'
import BaseButton from '../BaseComponents/baseBtn'

class GoodsContent extends Component {
  static propTypes = {
    tabIndex: PropTypes.number
  }

  state = {
    mySwiper: null,
    leftTabIndex: 0
  }

  render() {
    // console.log(this.props, 'proip-----props')
    const { goods, leftEvent, addEvent, removeEvent,leftTabIndex } = this.props
    return (
      <div className="swiper-container">
         <div className="swiper-wrapper">
           <div className="swiper-slide">
            <ContentWrapper className="box">
              <LeftWrapper>
                {
                  goods.length && goods.map((item, index) => { 
                    return (
                        <div  key={index}
                         className={leftTabIndex === index ? 'left active': 'left' }
                         onClick={() => { leftEvent(index) }}
                        >
                          {item.name}
                        </div>
                      )
                    })
                }
              </LeftWrapper>

              <RightWrapper>
                {
                  goods.length && goods[this.props.leftTabIndex].foods.map((item, index) => { 
                    return (
                        <div className="right" key={index}>
                          <h4>{item.name}</h4>
                          <div>{item.price}</div>
                          <div>{item.description}</div>
                          <div>{item.info}</div>
                           <div className="btn-box" >
                             { item.count ? <Fragment>
                                <BaseButton
                                text='-'
                                clickEvent={() => {removeEvent(index)}}
                                ></BaseButton>
                                <BaseButton
                                text={item.count}
                                ></BaseButton>
                             </Fragment>
                             : null
                            }
                            
                              <BaseButton 
                               text="+"
                               clickEvent={() => {addEvent(index)}}
                              ></BaseButton>
                           </div>
                        </div>
                      )
                    })
                }
              </RightWrapper>
             </ContentWrapper>
           </div>
           <div className="swiper-slide">
             2
           </div>
           <div className="swiper-slide">
             3
           </div>
         </div>
         
         { this.state.mySwiper && this.setSwiperTranslate() }
      </div>
    )
  }

  // 这个生命周期只执行一次
  componentDidMount() {
    this.setState({
      mySwiper: new Swiper('.swiper-container', {})
    }, () => {
      const { tabIndex } = this.props
      this.state.mySwiper.setTransition(1000);//设定过渡的时间
      this.state.mySwiper.setTranslate(-375 * tabIndex);//设定位移，可以为正数
    })
  }

  setSwiperTranslate = () => {
    const { tabIndex } = this.props
    this.state.mySwiper.setTransition(1000);//设定过渡的时间
    this.state.mySwiper.setTranslate(-375 * tabIndex);//设定位移，可以为正数
  }
}

const mapStateToProps = (state) => {
  return {
    leftTabIndex: state.leftTabIndex
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    leftEvent(index) {
      const action = getLeftIndex(index)
      dispatch(action)
    },
    addEvent(index) {
      // console.log(index, 'add')
      const action = getGoodsAdd(index)
      dispatch(action)
    },
    removeEvent(index) {
      // console.log(index, 'remove')
      const action = getGoodsRemove(index)
      dispatch(action)
    }
  }
}



export default connect(mapStateToProps, mapActionsToProps)(GoodsContent)


const ContentWrapper = styled.div`
  display: flex;
`;

const LeftWrapper = styled.div`
  width: 60px;
  .left {
    width: 100%;
    text-align:center;
    line-height: 30px;
    border-bottom:1px solid #ccc;
    overflow:hidden;
    border-bottom:1px solid #ccc;
    margin:5px 0px;
  }
  .active {
    color: orange;
  }
`;

const RightWrapper = styled.div`
    width: 160px;
    .right {
      width: 100%;
      overflow:hidden;
      
      text-align:center;
      padding-left: 10px;
      border-bottom:1px solid #ccc;
    }
`;
