import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import BaseButton from '@/components/BaseComponents/baseBtn'

class CartComponent extends Component {
  
  state = {
    isMask: false
  }

  render() {
    const { isMask } = this.state;
    const { cartData,removeEvent,addEvent } = this.props;
    return (
      <CartWrapper ref={ (wrapper) => this.wrapper = wrapper }>
        { isMask &&  <div className="mask"
         onClick={ () => this.showCart() }
        ></div>}
        <div className="tip" ref={(tipDom) => this.tipDom = tipDom }>
          头部
           { cartData.length ? cartData.map((item, index) => {
                  return <div key={index}> 
                        <span>{item.name}</span>  
                        <span>{item.price}</span>  
                        <span>{item.count}</span>
                        <div className="btn-box">
                          <BaseButton
                           text='-'
                           clickEvent={ () => removeEvent(item, index) }
                          ></BaseButton>
                            <BaseButton
                           text={item.count}
                          ></BaseButton>
                           <BaseButton
                           text='+'
                           clickEvent={ () => addEvent(item, index) }
                          ></BaseButton>
                        </div>
                      </div>
           }) : null  }
        </div>
        <CartBox className="cart-box">
          <div className="cart-icon" 
           onClick={ () => this.showCart() }
          >
            <span>{cartData.length}</span>
          </div>
          <div className="cart-total">{this.getTotalPrice()}</div>
          <div className="cart-cal">去结算</div>
        </CartBox>
      </CartWrapper>
    )
  }

  getTotalPrice () {
    return this.props.cartData.reduce((num, next) => {
      return num + next.count * next.price
    }, 0)
  }

  showCart = () => {
    // 1. 展示蒙层
    let isMask = this.state.isMask
    isMask = !isMask;
    this.setState({
      isMask: isMask
    })
    // 2. 展示购物车
    if (isMask) {
      this.wrapper.style.height = '100vh'
      this.tipDom.style.transform =  `translateY(0)`;
    } else {
      this.wrapper.style.height = '10vh'
      this.tipDom.style.transform =  `translateY(295px)`;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    cartData: state.cartData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeEvent(item, index) {
      const action = {
        type: 'cart_remove',
        item,index
      }
      dispatch(action)
    },
    // ++
    addEvent(item, index) {
      const action = {
        type: 'cart_add',
        item,index
      }
      dispatch(action)
    } 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartComponent) 

const CartBox = styled.div`
   width: 100%;
   height: 50px;
   position: absolute;
   left:0;
   bottom:0;
   background: #ccc;
   display: flex;
   div{
    display:flex;
    justify-content: center;
    align-items: center;
   }
   .cart-icon {
     flex:2; 
      span {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        background: orange;
        border-radius: 50%;
        font-size:20px;
      }

   }
   .cart-total {
     flex:4; 
   }
   .cart-cal {
     flex:4; 
   }
`; 

const CartWrapper = styled.div`
  width: 100vw;
  height: 10vh;
  position:fixed;
  bottom:0;
  left:0;
  z-index:1;
  .mask {
    width: 100%;
    height:100%;
    position: absolute;
    background: #000;
    opacity: .6;
    
  }
  .tip {
    width: 100%;
    height:50%;
    background: #fff;
    left: 0;
    bottom: 50px;
    position: absolute;
    max-height: 310px;
    transform: translateY(295px);
    transition: all 500ms;
    overflow:auto;
  }
`;