//refs as class components

import React, {Component} from "react";
import Input from "./Input";

class FocusInput extends Component{
    constructor(){
        super()
        this.compRef = React.createRef()
    }

    clickHandler = ()=>{
        this.compRef.current.focusInput()
    }

    render(){
        return(
            <div>
                <Input ref = {this.compRef}/>
                <button onClick={this.clickHandler}>focus input</button>
            </div>
        )
    }
}

export default FocusInput