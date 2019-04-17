import React, { Component } from 'react';

import Stats from './stats';

const AppHeader = () => {
  return(
    <div className="app-header">
      <h1 className="d-inline">Todo List</h1>  
      <Stats />
    </div> 
  )
}

export default AppHeader