
function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>water is boiling</p>
    }else{
        return <p>water is not boilding</p>
    }
}




class Temprature extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);

        //if fehr

    }

    
    handleChange(event){
        this.props.updateVerdict(event.target.value);
    }

    render(){
        return(<div>
            <input type="text" value={this.props.temprature} onChange={this.handleChange}/>
        </div>
        )
    }
}


class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state={
            temprature: 0,
            scale: "c"
        }
        
        this.updateVerdict = this.updateVerdict.bind(this);
    }

    updateVerdict(value){
    
        this.setState({
            temprature: value
        })
    }

    render(){

        const scale = this.state.scale
        const temprature = this.state.temprature
        let celcius = temprature
        let fehrenhiet = temprature;

        if(scale === "c"){
            fehrenhiet = parseInt(temprature) + 100;
        }

        if(scale === "c"){
            celcius = parseInt(temprature) + 200;
        }
        return(
            <div>Celsius
                <Temprature updateVerdict={this.updateVerdict} temprature = {celcius} scale="c"/> 
                <Temprature  updateVerdict={this.updateVerdict} temprature = {fehrenhiet} scale="f"/> 
                <BoilingVerdict celsius= {this.state.temprature}/>
            </div>
        )
    }
}