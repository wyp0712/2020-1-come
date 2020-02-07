import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todo extends Component {
    render() {
        console.log(this.props.todo)
        return (
            <div>
                {
                    this.props.todo.map((val, index) => {
                        return <p key={index}>{val}</p>
                    })
                }
            </div>
        )
    }
}

const mapState = state => {
    return state
}

const mapDispatch = dispatch => {
    return {}
}

export default connect(mapState, mapDispatch)(Todo)
