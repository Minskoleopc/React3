import React , {Component} from "react";

class UserGreeting extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn:true
        }
    }

    // if - else approach
    // render(){
    //     if(this.state.isLoggedIn){
    //         return <div>welcome chinmay</div>
    //     }
    //     else {
    //         return <div>welcome user</div>
    //     }
    // }

    // element variable approach

    // render(){
    //     let message = undefined
    //     if(this.state.isLoggedIn){
    //         message = <div>welcome chinmay</div>
    //     }
    //     else {
    //         message = <div>welcome user</div>
    //     }
    //     return <div>{message}</div>
    // }

    // tenary - operator - approach 

    // render(){
    //     return this.state.isLoggedIn ?<div>welcome chinmay</div>:<div>welcome user</div>
    // }

    // short-circuit 
    render(){
        return this.state.isLoggedIn && <div>Welcome chinmay</div>
    }

    // render(){
    //     return(
    //         <div>
    //             <div>Welcome user</div>
    //             <div>Welcome chinmay</div>
    //         </div>
            
    //     )
    // }

}

export default UserGreeting