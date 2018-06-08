import React from 'react';

function ListItem(props){
    return <li>{props.val}</li>
}


function NumberList(props){
    return <ul>
        {
            props.numbers.map((num)=>{
                return <ListItem key={num} val={num} />        
            })
        }
        
    </ul>
}

export default NumberList;