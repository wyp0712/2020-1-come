import React, { Component,Fragment } from 'react'
// import PropTypes from 'prop-types'
import ImageView from '../BaseComponents/ImageView'
import axios from 'axios'
import '../../mock/index'

import styled from 'styled-components'

const ImageBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  ul {
    width: 18%%;
    margin: 7px;
    li {
      &:nth-child(2) {
        width: 100%;
        overflow: hidden;
      }
    }
  }
`;


export default class IconBox extends Component {
  static propTypes = {
    // prop: PropTypes
  }
  state = {
    round: true,
    iconList: []
  }

  render() {
    return (

      <ImageBox>
        
        { this.state.iconList.map((item, index) => {
           return (
             <ul key={item.id}>
              <li>
                <ImageView
                  src={item.img}
                  round={this.state.round}
                  onClick={this.onImageClick}
                  width={'60px'}
                  height={'60px'}
                />
              </li>
              <li>
                {item.text}
              </li>
             </ul>
           )
        }) }
      </ImageBox>
    )
  }

  componentDidMount() {
    axios.get('/api/icon').then(res => {
      console.log(res.data.list, 'res')
      this.setState({
        iconList: res.data.list
      })
    })
  }

  onImageClick = () => {

  }
}
