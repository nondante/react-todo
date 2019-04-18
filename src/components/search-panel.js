import React, { Component } from 'react';

import FilterButtonGroup from './filter-button-group';

import './search-panel.css'

const SearchPanel = (props) => {
  return(
    <div className="search-panel my-3 row justify-content-between">
      <input className="col-md-6 col-sm-12 search-panel-input" placeholder="search" />
      <FilterButtonGroup 
      />
    </div>
  )
}

export default SearchPanel