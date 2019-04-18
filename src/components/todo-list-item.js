import React, { Component } from 'react';

import './todo-list-item.css'

class TodoListItem extends Component {

  
  render(){
    let styles = {
      color: this.props.important ? "tomato" : "black",
      fontWeight: this.props.important ? "700" : "normal",
      color: this.props.done ? "#4f5051": "black",
      fontStyle: this.props.done ? "italic": "normal"
      
    }

    return (
      <span style={styles}  className="todo-list-item text-center">{this.props.label}
        <div className="btn-group todo-list-item-btn-group m-0" role="group" aria-label="Basic example">
          <button style={styles} onClick={(e)=>{e.stopPropagation();this.props.toggleImportance(this.props.id)}} type="button" title="Important" className="btn icon"><i className="fa fa-exclamation"></i></button>
          <button onClick={(e)=>{e.stopPropagation();this.props.removeTodo(this.props.id)}} type="button" title="Remove" className="btn icon"><i className="fa fa-trash-o"></i></button>
        </div>
      </span>
    )
  }
}

export default TodoListItem