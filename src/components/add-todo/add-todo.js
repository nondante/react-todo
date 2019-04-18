import React, { Component } from 'react';

class AddTodo extends Component {
  state = { 
    value: ''
   }

  updateInputValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit = (e) => {
    
    e.preventDefault(); 
    this.props.addItem(this.state.value); 
    this.setState({
      value: ''
    })
    document.querySelector("#input").value = "";
    
  }
  render() { 
    return ( 
      <form onSubmit={this.handleSubmit}>
        <div className="input-group my-3">
          <input id="input" onChange={this.updateInputValue} type="text" className="form-control" placeholder="Enter todo item" aria-label="Enter todo item" aria-describedby="button-addon2"></input>
          <div className="input-group-append">
            <button onClick={()=>{this.props.updateValue(this.state.value)}} className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
          </div>
        </div>
      </form>
     );
  }
}
 
export default AddTodo