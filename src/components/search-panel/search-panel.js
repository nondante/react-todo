import React, { Component } from 'react';

import FilterButtonGroup from '../filter-button-group/filter-button-group';

import './search-panel.css'

const SearchPanel = (props) => {
  return(
    <div className="search-panel my-3 row justify-content-between">
      <input onChange={(e)=>{props.onSearchchange(e.target.value)}} className="col-md-6 col-sm-12 search-panel-input" placeholder="search" />
      <FilterButtonGroup 
        filterName={props.filterName}
        onFilterChange = {props.onFilterChange}
      />
    </div>
  )
}

export default SearchPanel