import React, { Component } from 'react';

import Stats from '../stats/stats';

const AppHeader = (props) => {
  return(
    <div className="app-header">
      <h1 className="d-inline">Todo List</h1>  
      <Stats 
        doneCount={props.doneCount}
        toDoCount={props.toDoCount}
      />
    </div> 
  )
}

export default AppHeader