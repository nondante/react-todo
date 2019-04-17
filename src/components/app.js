import React, { Component } from 'react';

import AppHeader from './app-header'
import SearchPanel from './search-panel'
import TodoList from './todo-list'
import AddTodo from './add-todo'

import './app.css'



const App = () => {

  const todoData = [
    {
      label: "Drink Coffee",
      important: false,
      id: 1
    },
    {
      label: "Make Awesome App",
      important: true,
      id: 2
    },{
      label: "Have a lunch",
      important: false,
      id: 3
    }
  ]

  return (
    <div className="container mt-5">
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
      <AddTodo />
    </div>
  )
}

export default App