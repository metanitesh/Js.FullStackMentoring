import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './todo.js'
import Greet from './conditional.js'
import List from './conditional.js'
import NumberList from './numberlist';
import { formatDiagnostic, isElementAccessExpression, ClassificationType, isCaseOrDefaultClause } from 'typescript';
import NameForm from './name-form.js'

class Box extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div >hello
                <div>
                    {/* {this.props.children} */}
                </div>
            </div>

        )
    }
}


class Container extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Box >
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                    <li>four</li>
                    <li>five</li>
                </ul>
            </Box>

        )
    }
}

ReactDOM.render(<Container />, document.getElementById('root'))
