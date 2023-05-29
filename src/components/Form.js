//basics of form handling
import React ,{Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)
        this.state= {
            username : '',
            comments : '',
            topic : 'react'
        }
    }
    
    handleUsernameChange = (event)=>{
        this.setState ({
            username : event.target.value
        })
    }

    handleCommentsChange = (event) =>{
        this.setState({
            comments : event.target.value
        })
    }

    handleTopicChange = event =>{
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>username :</label>
                    <input 
                    type="text" value = {this.state.username} onChange={this.handleUsernameChange}
                    // value = {this.state.username}
                    // onChange = {this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>comments</label>
                    <textarea
                    value = {this.state.comments}
                    onChange={this.handleCommentsChange}/>
                </div>
                <div>
                    <label>topic</label>
                    <select value ={this.state.topic} onChange={this.handleTopicChange}>
                        <option value ="angular">angular</option>
                        <option value ="react">react</option>
                    </select>
                </div>
                <button type = "submit">submit</button>
            </form>
        )
    }
}

export default Form