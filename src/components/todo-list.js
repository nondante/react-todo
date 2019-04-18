import React, { Component } from 'react';
import TodoListItem from './todo-list-item';

import './todo-list.css';


const TodoList = (props) => {

  
  const elements = props.todos.map((item)=> {
    const styles = {
      textDecoration: item.done ? "line-through": "none",
      color: item.done ? "#4f5051": "black",
      fontStyle: item.done ? "italic": "normal"
    }
  
    return (
      
      <li style={styles} onClick={()=>{props.toggleDoneStatus(item.id)}} key={item.id} className="list-group-item"><TodoListItem important={item.important} done={item.done} label={item.label} id={item.id} toggleImportance={props.toggleImportance} toggleDoneStatus={props.toggleDoneStatus} removeTodo={props.removeTodo} /></li>
    )
  })

  return(
    <ul className="list-group todo-list">
      { elements }
    </ul>
  )
}

export default TodoList