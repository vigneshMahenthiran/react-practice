//render props 
//using this counter function for incrementing in both clickcountertwo and hovercountertwo by using function as props

import React, {Component} from "react";

class RenderCounter extends Component{
    constructor(props){
        super(props)
        this.state= {
            count : 0
        }
    }

    incrementCounter = ()=>{
        this.setState((currentState)=>{
            return{ count : currentState.count +1}
        })
    }
    
    render(){
        return(
            <div>
                {this.props.render(this.state.count , this.incrementCounter)}
            </div>
        )
    }
}

export default RenderCounter