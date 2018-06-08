import React from 'react';

class AddText extends React.Component{

    render(){
        return (
            <input type="text"/>
        )
        
    }
}




class Todo extends React.Component{

    render(){
        var data = {text : "breakfast"};

        return (
        <div className="border">
            <AddText  />
            <List list={data}/>
        </div>        
        )
        
    }
}




class List extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            counter : 1
        }

        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount(){
        
    }

    handleClick(e){

        console.log(this.state.counter)

        this.setState(function(prevState){
           
         return{
            counter: prevState.counter+1
         }
            
        })
    }

    render(){
        return (<div><h1>{this.props.list.text}{this.state.counter}</h1><p>lorem30</p><button onClick={this.handleClick}>click me</button></div>)
        
        
    }
}

export default Todo