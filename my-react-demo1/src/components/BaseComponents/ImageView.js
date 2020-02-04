import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImageBox = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
  img {
    width: 100%;
    height:100%; 
    border-radius: ${props => props.round ? "50%" : "0"};
  }
`;

export default class ImageView extends Component {
  static propTypes = {
    round: PropTypes.bool,
    height: PropTypes.string,
    onClick: PropTypes.func,
    src: PropTypes.string
  }

  static defaultProps = {
    round: false,
    height: 'auto'
  }

  render() {
    return (
      <ImageBox
        width={this.props.width}
        height={this.props.height}
        round={this.props.round}
        onClick={() => this.onClick}
      >
        <img src={this.props.src} alt=""/>
      </ImageBox>
    )
  }

  componentDidMount() {
    // console.log(this.props, 'round')
  }

  onClick = () => {

    const { onClick } = this.props;
    console.log(onClick, 'onClick')
    onClick()
  }
}
