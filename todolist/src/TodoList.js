import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  } 
  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  // handleItemClick(index) {}
  deleteItem(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({list})
  }
  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
        return (
          <TodoItem 
            deleteProp={this.deleteItem} 
            key={index} 
            content={item} 
            index={index} 
          />
        )
      })
    )
  }
  render() {
    return (
      <Fragment>
        <div className='smart'>
          <input value={this.state.inputValue} onChange={this.handleChange}/>          
          {/*<button style={{background: 'red', color: '#fff'}} onClick={this.handleClick}>add</button>*/}
          <button className='red-btn' onClick={this.handleClick}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>      
    );
  }
}

export default TodoList;
