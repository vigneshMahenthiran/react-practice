//higher order component

import React ,{Component} from "react";
import WithCounter from "./WithCounter"

class ClickCounter extends Component{

    // const {}
    // constructor(props){
    //     super(props)
    //     this.state= {
    //         count : 0
    //     }
    // }

    // incrementCounter = ()=>{
    //     this.setState((currentState)=>{
    //         return{ count : currentState.count +1}
    //     })
    // }

    render(){
        return(
            <button onClick={this.props.incrementCounter}>{this.props.name} clicked {this.props.count} times</button>
        )
    }
}

export default WithCounter(ClickCounter)