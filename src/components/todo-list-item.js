import React, { Component } from 'react';

import './todo-list-item.css'

const TodoListItem = ({label, important = false}) => {
  const style = {
    color: important  ? 'tomato' : 'black'
  }
  return (
    <span className="todo-list-item" style={style}>{label}
      <div className="btn-group todo-list-item-btn-group p-0 m-0" role="group" aria-label="Basic example">
        <button type="button" title="Important" className="btn icon"><i className="fa fa-exclamation"></i></button>
        <button type="button" title="Remove" className="btn icon"><i className="fa fa-trash-o"></i></button>
      </div>
    </span>
  )
}

export default TodoListItem