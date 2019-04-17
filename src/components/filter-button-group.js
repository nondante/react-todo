import React, { Component } from 'react';

import './filter-button-group.css'

class FilterButtonGroup extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="filter-button-group pr-0 btn-group-sm col-md-6 col-sm-12">
        <div className="btn-group float-right p-0" role="group">
          <button type="button" className="btn btn-primary">All</button>
          <button type="button" className="btn btn-secondary">Active</button>
          <button type="button" className="btn btn-secondary">Done</button>
        </div>
      </div>
     );
  }
}
 
export default FilterButtonGroup;