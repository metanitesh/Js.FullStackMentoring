import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './todo.js'
import Greet from './conditional.js'
import List from './conditional.js'
import NumberList from './numberlist';
import { formatDiagnostic, isElementAccessExpression, ClassificationType, isCaseOrDefaultClause } from 'typescript';
import NameForm from './name-form.js'


function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>water is boiling</p>
    }else{
        return <p>water is not boilding</p>
    }
}

class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state={
            temprature: 0
        }
        
        this.updateVerdict = this.updateVerdict.bind(this);
    }

    updateVerdict(event){
    
        this.setState({
            temprature: event.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.updateVerdict}/>
                <BoilingVerdict celsius= {this.state.temprature}/>
            </div>
        )
    }
}

ReactDOM.render(<Calculator celsius={200} />, document.getElementById('root'))
