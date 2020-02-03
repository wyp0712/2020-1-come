import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// serarchBar 组件分析：
/**
 * @param { 
 * value 
 * onChange 
 * disabled 
 * focus 
 * 事件（路由跳转到搜索页面）}
 */

const SearchWrapper = styled.div`
  background: ${props => props.bgColor || '#fff'};
  height: 100%;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    border:none;
    width: 90%;
    height: 90%;  
  }
`

export default class searchBar extends Component {
  static propTypes = {
    bgColor: PropTypes.string,
    focus: PropTypes.bool,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    focus: false,
    disabled: true
  }

  state = {
    inputValue: ''
  }

  render() {
    return (
      <SearchWrapper bgColor="">
        <input
            value={this.state.inputValue} 
            onChange={(e) => this.onChangeEvent(e)} 
            ref={ inputDom => this.inputDom = inputDom  } 
            onKeyUp={this.inputKeyUp}
            disabled={ this.props.disabled ? 'disabled': '' }
            onClick={ () => { this.goToSearchPage() } }
          />
      </SearchWrapper>
    )
  }

  componentDidMount() {
    // 自动获取焦点
    if (this.props.focus) {
      this.inputDom.focus()
    }
  }

  // 路由跳转事件
  goToSearchPage = () => {
    const { goToSearchEvent } = this.props;
    goToSearchEvent()
  }

  // 键盘事件
  inputKeyUp = (e) => {
    if(e.keyCode === 13){
      console.log(e.target.value);
     }
  }
   
  // change事件
  onChangeEvent = (e) => {
    const target = e.target
    this.setState({
      inputValue: target.value
    }, () => {

    })
  }
}
