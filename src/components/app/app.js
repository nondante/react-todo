import React, { Component } from 'react';

import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'
import AddTodo from '../add-todo/add-todo'

import './app.css'



class App extends Component {

  state = {
    value: '',
    filterName: 'Active',
    searchTerm: '',
    todoData : [
      {
        label: "Drink Coffee",
        important: false,
        done:false,
        id: 1
      },
      {
        label: "Make Awesome App",
        important: false,
        done:false,
        id: 2
      },{
        label: "Have a lunch",
        important: false,
        done:false,
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
        todoData: updatedTodo,
        
      }
    })
  }

  id = 4;
  handleAddItem = () => {
    this.id = this.id + 1;
    const newObject = {
      label: this.state.value,
      important: false,
      done:false,
      id: this.id
    }
    this.setState({
      todoData : [...this.state.todoData, newObject]
    })
  }

  filterItems(items, filter) {
    if (filter === 'All') {
      return items;
    } else if (filter === 'Active') {
      return items.filter((item) => (!item.done));
    } else if (filter === 'Done') {
      return items.filter((item) => item.done);
    }
  }

  searchItems(items,term){

    return items.filter(i => {
      if(term===''){
        return i
      }
      return i.label.toLowerCase().startsWith(term.toLowerCase())
    })

  }

  onFilterChange = (name) => {
    this.setState({
      filterName: name
    })
  }

  onSearchchange = (value) => {
    this.setState({
      searchTerm : value
    })
  }

  updateValue = (value) => {
    this.setState({
      value: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    this.handleAddItem(); 
    this.setState({
      value: ''
    })

  }


  render() {
    const { todoData, filterName, searchTerm} = this.state;
    const visibleItems = this.searchItems(this.filterItems(todoData, filterName), searchTerm)
    const doneCount = todoData.filter((item) => item.done).length;
    const toDoCount = todoData.length - doneCount;

    return (
      <div className="container mt-5">
        <AppHeader
          doneCount={doneCount}
          toDoCount={toDoCount}
        />
        <SearchPanel
          filterName={filterName}
          onFilterChange = {this.onFilterChange}
          onSearchchange = {this.onSearchchange}

        />
        <TodoList 
          todos={visibleItems}
          toggleImportance={this.handleTogggleImportance}
          toggleDoneStatus={this.handleToggleDoneStatus}
          removeTodo={this.handleRemoveTodo}
        />
        <AddTodo 
          addItem = {this.handleAddItem}
          updateValue = {this.updateValue}
          handleSubmit = {this.handleSubmit}
        />
      </div>
    )
  }
}

export default App