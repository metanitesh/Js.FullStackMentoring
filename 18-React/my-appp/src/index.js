import React from 'react';
import ReactDOM from 'react-dom';

// const user = {
//   name: "nitesh",
//   last: "sharma"
// }

// function greet(){
//   if(user){
//     return <h1>hello {user.name}</h1>
//   }else{
//     return <h1>hello stranger</h1>
//   }
  
// }

// const element =  <h1>{greet()}</h1>;

 
// function Welcome (props){
  // return <h1> {props.name} </h1>
// }


// function App (){
//   return <div> <Welcome name="nitesh" />
//   <Welcome name="ajith" />
//   <Welcome name="srikant" /></div>
// }


// class Clocks extends React.Component{
  
//   constructor(props){
//     super(props);    
//     this.state = {};
//     this.state.date = new Date().toString();
    
//   }


//   tick(){
//     this.setState({
//       date : (new Date()).toDateString()
//     })
//   }

//   componentDidMount() {
//     setInterval(this.tick, 1000)
//   }

//   hello(){
//     this.
//   }

//   render(){
//     return(<h1>Clock<span>{this.state.time}</span></h1>);
//   }
// }

class Clocks extends React.Component{

  constructor(){
    super()
    this.state = {
      count: 1,
      time : new Date()
    }
  }

  componentDidMount(){
    
    // setInterval(()=>{
      
    //   this.setState({
    //     time: this.state.count++
    //   })  

    // }, 1000)

    
  }

  render(){
    return (
    <div>
      <h1>Hello {this.state.time.toDateString()}</h1>
      <Work time={this.state.time.toString()}/>
    </div>
    )

  }
}


class Work extends React.Component{

  constructor(props){
    super(props)
    this.state = {};
    this.state.toggle = true;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
     this.updateState();
  }

  updateState(){
    this.setState((prevState)=>({
      toggle : !prevState.toggle
    })) 

  }
  render(){
    return <div><button onClick = {this.handleClick} >click</button>
    <span >Is toggle {this.state.toggle.toString()}</span>
    </div>
  }
}


// function Work(props){

//   return 
// }

ReactDOM.render(
  <Clocks />,
  document.getElementById('root')
);


