import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


export default class BaseButton extends Component {
  static propTypes = {
     width: PropTypes.string,
     height: PropTypes.string,
     bgColor: PropTypes.string,
     round: PropTypes.bool,
     font: PropTypes.string,
     color: PropTypes.string
  }

  static defaultProps = {
    width: '30px',
    height: '30px',
    bgColor: 'skyblue',
    round: true,
    font: '20px',
    color: '#fff'
  }

  render() {
    return (
        <SpanBtn
          onClick={ () => this.onBtnClick() }
          width={this.props.width}
          height={this.props.height}
          bgColor={this.props.bgColor}
          round={this.props.round}
          font={this.props.font}
          color={this.props.color}
        >{this.props.text}</SpanBtn>
    )
  }

  onBtnClick = () => {
    const { clickEvent } = this.props;
    clickEvent && clickEvent()
  }
}



const SpanBtn = styled.span`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.round ? '50%' : ''};
  display:inline-block;
  text-align:center;
  font-size: ${props => props.font};
  line-height: ${props => props.height};
  background: ${props => props.bgColor};
  color: ${props => props.color};
  cursor: pointer;
  margin:5px;
`