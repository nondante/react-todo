import React, { Component } from 'react';

import FilterButtonGroup from './filter-button-group';

import './search-panel.css'

const SearchPanel = () => {
  return(
    <div className="search-panel mt-3 row justify-content-between">
      <input className="col-6 search-panel-input" placeholder="search" />
      <FilterButtonGroup />
    </div>
  )
}

export default SearchPanel