import React from 'react';
var bool = true;

function Greet(props) {

    if (props.isUser) {
        return <UserGreet />
    }else{
        return <GusetGreet />
    }

}

function UserGreet() {
    return (
        <div>
            <span>Hello User</span>
        </div>
    )
};

function GusetGreet() {
    return (
        <div>
            <span>Hello Guest</span>
        </div>
    )
}


export default Greet