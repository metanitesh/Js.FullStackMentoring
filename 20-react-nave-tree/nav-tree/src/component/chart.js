import React, { Component } from 'react';



class Chart extends Component {

  constructor(props) {
    super(props);
  }
  

  render() {

    var charts = this.props.data.map((chart, index)=>{
        return (
            <li key={index}>
                {chart}
            </li>
        )
    })


    return (

     <ul>
        {charts }
      </ul>
    );
  }
}

export default Chart;
