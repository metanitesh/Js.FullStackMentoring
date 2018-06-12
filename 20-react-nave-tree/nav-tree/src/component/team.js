import React, { Component } from 'react';



class Team extends Component {

  constructor(props) {
    super(props);
  
  }
  

  render() {

    console.log(this.props.data);
    
    // var years = this.props.data.map((year, index)=>{
    //   return <li key={index}>{index}{year.season}
    //     <Team data={year.data} />
    //   </li>
    // })

    return (

     <div>
        Hello
      </div>
    );
  }
}

export default Team;
