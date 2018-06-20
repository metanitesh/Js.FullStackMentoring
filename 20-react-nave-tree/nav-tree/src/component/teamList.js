import React, { Component } from 'react';
import Chart from './chart'

class TeamList extends Component {

  constructor(props) {
    super(props);

  }
  
  handleClick(e){

  }


  render() {

    var matches = this.props.data.map((match, index) => {
        return (
        <li key={index} id={index} onClick={this.handleClick}>{match.name}
            { <Chart data={match.chartData}/> }
        </li>)
    })


    return (
     <ul>
        {matches}
      </ul>
    );
  }
}

export default TeamList;
