import React from 'react';

class NameForm extends React.Component{

    constructor(){

        super();
        this.state = {
            value: "type here"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }

    handleClick(event){
        event.preventDefault();
        console.log(this.state.value);
    }

    render(){
        return (
            <form action="">
                <label> Name :
                    <input type="text" value={this.state.value} />
                </label>
                <button onClick={this.handleClick}>Submit</button>
            </form>
        )
    }
}


class Select extends React.Component{

    constructor(){

        super();
        this.state = {
            value: ["one","three"]
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }

    render(){
        return (
           <select multiple={true} onChange={this.handleChange} value={this.state.value}>
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
           </select>
        )
    }
}

export default NameForm