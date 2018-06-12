import React, { Component } from 'react';
import Chart from './chart'

class TeamList extends Component {

  constructor(props) {
    super(props);
  
  }
  

  render() {

    // console.log(this.props.data);

    var matches = this.props.data.map((match, index) => {
        return (
        <li key={index} >{match.name}
            <Chart data={match.chartData} />
        </li>)
    })

    
    // var years = this.props.data.map((year, index)=>{
    //   return <li key={index}>{index}{year.season}
    //     <Team data={year.data} />
    //   </li>
    // })

    return (
     <ul>
        {matches}
      </ul>
    );
  }
}

export default TeamList;
