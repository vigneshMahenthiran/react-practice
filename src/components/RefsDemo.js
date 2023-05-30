//refs demo

import React, {Component} from 'react'

class RefsDemo extends Component{
    constructor(){
        super()
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    clickHandler = ()=>{
        alert(this.inputRef.current.value)
    }

    render(){
        return(
            <div>
                <input type='text' ref ={this.inputRef}></input>
                <button onClick={this.clickHandler}> click</button>
            </div>
        )
    }
}

export default RefsDemo