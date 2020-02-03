import React, { Component } from 'react'
import styled from 'styled-components'
import InputSearch from '../BaseComponents/searchBar' 

const InputWrapper = styled.div`
  width: 239px;
  height: 30px;
  background: #fff;
  border-radius: 100px;
`
const AddressWrapper = styled.div`
  width: 116px;
  height: 30px;
  color: #ccc;
  text-align: center;
  line-height: 30px;
`

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  right: 0;
  left: constant(safe-area-inset-left) !important;
  left: env(safe-area-inset-left) !important;
  right: constant(safe-area-inset-right) !important;
  right: env(safe-area-inset-right) !important;
  height: 50px;
  padding: 0 10px;
  background: #1C1B20;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;`

export default class HeaderBar extends Component {
  state = {
    focus: false, // 是否聚焦
    disabled: false
  }

  render() {
    return (
      <HeaderWrapper>
        <AddressWrapper>山西省晋城市</AddressWrapper>
        <InputWrapper className="a">
          <InputSearch
            focus={this.state.focus}
            {...this.props}
            disabled={this.state.disabled}
            goToSearchEvent={() => this.goToSearchEvent()}
          />
        </InputWrapper>
      </HeaderWrapper>
    )
  }

  goToSearchEvent = () => {
    this.props.history.push('/homeIndex/search')
  }
}
