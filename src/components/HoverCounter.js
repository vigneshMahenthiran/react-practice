//higher order component

import React ,{Component} from "react";
import WithCounter from "./WithCounter"

class HoverCounter extends Component{
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
            <h1 onMouseOver={this.props.incrementCounter}>MouseOver {this.props.count} times</h1>
        )
    }
}

export default WithCounter(HoverCounter)