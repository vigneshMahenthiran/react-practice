//render props

import React ,{Component} from "react";

class HoverCounterTwo extends Component{

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
            <h1 onMouseOver={this.props.incrementCounter}> mouseover {this.props.count} times</h1>
        )
    }
}

export default HoverCounterTwo