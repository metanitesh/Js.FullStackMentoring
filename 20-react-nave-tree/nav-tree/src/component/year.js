import React, { Component } from 'react';
import TeamList from './teamList';

class Year extends Component {

  constructor(props) {
    super(props);  
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      display : true,
      id: 1
    }
  }
  
  handleClick(e){    
    var id = e.target.id;
    this.setState((prev)=>{
      return {
        display: !prev.display,
        id: id
      }
    })
  }

  render() {

    var years = this.props.data.map((year, index)=>{
      return (
      <li id={index} onClick={this.handleClick}>{year.season}
             { (this.state.id == index) && this.state.display && <TeamList key={index} data={year.matchData}/> }
      </li>)
    })

    return (
    <div>
     <ul>Years
        {years}
      </ul>
      </div>
    );
  }
}

export default Year;
