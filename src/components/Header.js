import React, { Component } from 'react'
import { connect } from 'react-redux'


 class Header extends Component {

    submit = () => {
        this.props.add(this.inp.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={el => this.inp = el}/>
                <button onClick={this.submit}>提交</button>
            </div>
        )
    }
}


const mapState = state => {
    return {}
}

const mapDispatch = dispatch => {
    return {
        add(text){
            dispatch({type: 'ADD', text})
        }
    }
}

export default connect(mapState, mapDispatch)(Header)