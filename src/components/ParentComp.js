//memo component
import React, {Component } from 'react'
import MemoComp from './MemoComp'

class ParentComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : 'vignesh'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name : 'vignesh'
            })
        },2000)
    }

    render(){
        return(
            <div>
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}
export default ParentComp