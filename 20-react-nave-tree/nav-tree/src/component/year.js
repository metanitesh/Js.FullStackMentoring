import React, { Component } from 'react';
import TeamList from './teamList';

class Year extends Component {

  constructor(props) {
    super(props);
    this.state ={
      display: true,
      target: 0
    }
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e){
    var target = e.target.id;

    this.setState(function(prevState){
      
      var display = true;

      if(target != prevState.target){
        display = true;
      }

      if(target == prevState.target){
        display = !prevState.display;
      }


      return {
        target : target,
        display : display
      }
    })
  }

  render() {

    var years = this.props.data.map((year, index)=>{
      return (
      <li id={index} onClick={this.handleClick}>{year.season}
            {this.state.target == index && this.state.display && <TeamList key={index} data={year.matchData}/> }
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
