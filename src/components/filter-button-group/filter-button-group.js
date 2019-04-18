import React, { Component } from 'react';

import './filter-button-group.css'

class FilterButtonGroup extends Component {
  state = { 
    buttons: [
      {
        id: 1,
        label: "All",
        active:true
      },
      {
        id: 2,
        label: "Active",
        active:false
      },
      {
        id: 3,
        label: "Done",
        active:false
      }
    ]
  }

  render() {
    
    return ( 
      <div className="filter-button-group pr-0 btn-group-sm col-md-6 col-sm-12">
        <div className="btn-group float-right p-0" role="group">
          {this.state.buttons.map(button => {
            let isActive = button.label === this.props.filterName;
            let clazz = isActive? "btn btn-info" : "btn btn-outline-secondary";
            return (<button 
                      key={button.id} 
                      id={button.id} 
                      onClick={()=>{this.props.onFilterChange(button.label)}}
                      type="button" 
                      className={clazz}>{button.label}
                    </button>)
          })}
        </div>
      </div>
     );
  }
}
 
export default FilterButtonGroup;