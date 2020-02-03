import React, { Component } from 'react'
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
        width: 56px;
        overflow: hidden;
        height: 25px;    
      }
    }
  }
`;


export default class IconBox extends Component {
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
      this.setState({
        iconList: res.data.list
      })
    })
  }

  onImageClick = () => {

  }
}
