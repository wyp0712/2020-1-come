import React, { Component } from 'react'
import styled from 'styled-components'
import ImageView from '../BaseComponents/ImageView'

const MerchantWrapper = styled.div`
 
`;

const DlBox = styled.dl`
  display:flex;
  width: 100%;
  padding: 5px;
  background: #ccc;
  dt {
    flex:3;
    display: flex;
    justify-content:center;
    align-items: center;
  }
  dd {
    flex:7;
    text-align: left;
  }
`;

export default class MerchantList extends Component {
  render() {
    return (
      <MerchantWrapper >
        <DlBox onClick={ () => this.onMerchantClick() }>
         <dt > 
          <ImageView
           width="76px"
           height="57px"
           src="https://p0.meituan.net/waimaipoi/6c86a9774d19a649e7c4a5f8b1044f6821905.jpg@114h_80Q_0e_1l.webp?cimage=true"
          />  
         </dt>
         <dd>
           <div className="title">晋城花店-麦当劳（新市街店）</div>  
           <div className="rate">⭐️</div>
           <div className="shipping-news">起送：5 配送：5</div>
         </dd>  
        </DlBox> 
      </MerchantWrapper>
    )
  }

  // 执行父元素上的事件
  onMerchantClick = () => {
    console.log('我在子组件中')
    const { merchantEvent } = this.props
    merchantEvent && merchantEvent()
  }
}
