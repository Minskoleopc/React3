import React , {Component} from "react";

class PropC extends Component {
    //this.propsfirstName = "ram"

    constructor(props){
        let {firstName,lastName}= props
        this.state = {
            firstName:firstName,
            lastName:lastName
        }
    }
    render(){
        //return <h1>Hello i am {this.props.firstName}{this.props.lastName} learning new things</h1>
        return <h1>Hello i am {this.firstName}{this.lastName} learning new things</h1>
    }
}
export default PropC