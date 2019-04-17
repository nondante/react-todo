import React, { Component } from 'react';

class AddTodo extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="input-group my-3">
        <input type="text" className="form-control" placeholder="Enter todo item" aria-label="Enter todo item" aria-describedby="button-addon2"></input>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
        </div>
      </div>
     );
  }
}
 
export default AddTodo