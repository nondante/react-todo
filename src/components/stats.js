import React, { Component } from 'react';

import './stats.css'

class Stats extends Component {
  state = {  }
  render() { 
    return ( 
      <table className="stats d-inline float-right">
        <tbody>
            <tr>
                <td>Active:</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Done:</td>
                <td>0</td>
            </tr>
        </tbody>
      </table>
     );
  }
}
 
export default Stats;