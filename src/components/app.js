import React, { Component } from 'react';

import AppHeader from './app-header'
import SearchPanel from './search-panel'
import TodoList from './todo-list'
import AddTodo from './add-todo'

import './app.css'



class App extends Component {

  state = {
    appButtons: [],
    todoData : [
      {
        label: "Drink Coffee",
        important: false,
        done:false,
        visible: true,
        id: 1
      },
      {
        label: "Make Awesome App",
        important: false,
        done:false,
        visible: true,
        id: 2
      },{
        label: "Have a lunch",
        important: false,
        done:false,
        visible: true,
        id: 3
      }
    ]
  } 

  handleTogggleImportance = (id) => {
    this.setState(prevState => {
      const updatedTodo = prevState.todoData.map(todo=> {
        if(todo.id===id){
          todo.important = !todo.important
        }
        return todo
      })
      console.log(updatedTodo)
      return {
        todoData: updatedTodo
      }
    })
  }

  handleToggleDoneStatus = (id) => {
    this.setState(prevState => {
      const updatedTodo = prevState.todoData.map(todo=> {
        if(todo.id===id){
          todo.done = !todo.done
        }
        return todo
      })
      return {
        todoData: updatedTodo
      }
    })
  }

  handleRemoveTodo = (id) => {
    this.setState(prevState => {
      const updatedTodo = prevState.todoData.filter(todo => {
        if(todo.id!==id){
          return todo
        }
      })
      return {
        todoData: updatedTodo
      }
    })
  }

  render() {
    return (
      <div className="container mt-5">
        <AppHeader />
        <SearchPanel 
        />
        <TodoList 
          todos={this.state.todoData}
          toggleImportance={this.handleTogggleImportance}
          toggleDoneStatus={this.handleToggleDoneStatus}
          removeTodo={this.handleRemoveTodo}
        />
        <AddTodo />
      </div>
    )
  }
}

export default App