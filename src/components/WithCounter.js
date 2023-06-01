//creating a higher order component and exporting it to clickcounter.js and hovercounter.js

import React from "react";

const UpdatedComponent = OriginalComponent =>{
    class NewComponent extends React.Component{

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
                <OriginalComponent count={this.state.count} incrementCounter={this.incrementCounter}/>
            )
        }
    }
    return NewComponent
}

export default UpdatedComponent