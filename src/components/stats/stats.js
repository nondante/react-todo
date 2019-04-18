import React, { Component } from 'react';

import './stats.css'

class Stats extends Component {

  render() { 
    return ( 
      <table className="stats d-inline float-right">
        <tbody>
            <tr>
                <td>Active:</td>
                <td>{this.props.toDoCount}</td>
            </tr>
            <tr>
                <td>Done:</td>
                <td>{this.props.doneCount}</td>
            </tr>
        </tbody>
      </table>
     );
  }
}
 
export default Stats;