import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const { deleteProp, index } = this.props 
        deleteProp(index)
    }
    render() {
        const { content } = this.props
        return (
            <div className='item' onClick={this.handleClick}>{content}</div>
        )
    }
}

export default TodoItem