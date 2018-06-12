import React, { Component } from 'react';
import Chart from './chart'

class TeamList extends Component {

  constructor(props) {
    super(props);
    this.state ={
      display : true,
      target: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e){

    e.stopPropagation();
    var target = e.target.id;

    this.setState(function(prevState){

      return {
        target : target,
        display: true
      }
    })
  }


  render() {

    var matches = this.props.data.map((match, index) => {
        return (
        <li key={index} id={index} onClick={this.handleClick}>{match.name}
            {this.state.target == index && this.state.display && <Chart data={match.chartData}/> }
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
