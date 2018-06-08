import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Input extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            counter : 10
        }

        this.handleClick  = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            counter: Math.random()
        })
    }

    render(){
        return (<div>
            <input type="text" className="border"/>
            <button onClick={this.handleClick}>Click </button>
            <div>counter{this.state.counter}</div>
        </div>
        )
    }
}


class List extends React.Component{

    constructor(props){
        super(props);

        console.log(this.props)
    }

    render(){

        return (<ul>
            <li>{this.props.listdata.text}</li>
            
        </ul>
        )
    }
}



class Todo extends React.Component{



    render(){

        var data = {
            text: "breakfast"
        }


        return (<div>
            <h1>List</h1>
            <Input />
            <List listdata={data}/>
        </div>
        )
    }
}


ReactDOM.render(<Todo />, document.getElementById('root'));
// registerServiceWorker();
