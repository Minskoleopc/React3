import React , {Component} from "react";
class Message extends Component {
    constructor(){
        super()
        this.state = {
            message:"Welcome"
        }
    }

    // changeMessage(){
    //     this.state = {
    //         message:"Welcome satish !"
    //     }
    // }


    changeMessage(){
        this.setState({
            message:"Welcome chinmay !"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>ChangeMessage</button>
            </div>
        )
    }
}

export default Message