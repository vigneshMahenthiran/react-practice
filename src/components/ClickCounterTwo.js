//render props

import React ,{Component} from "react";

class ClickCounterTwo extends Component{

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
            <button onClick={this.props.incrementCounter}> clicked {this.props.count} times</button>
        )
    }
}

export default ClickCounterTwo