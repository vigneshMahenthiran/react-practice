//condition rendering

import React,{Component} from 'react'

class UserGreetings extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : true
        } 
    }

    render(){
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             welcome user
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div>
        //             welcome guest
        //         </div>
        //     )
        // }
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>welcome user</div>
        // }
        // else{
        //     message = <div>welcome guest</div>
        // }
        // return(
        //     <div>{message}</div>
        // )
        // return this.state.isLoggedIn ? (
        //     <div>welcome user</div>
        // ) : (
        //     <div>welcome guest</div>
        // )
        return this.state.isLoggedIn && <div>welcome user</div>
    }
}

export default UserGreetings