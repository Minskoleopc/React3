import React , {Component} from "react";

class PropC extends Component {
    //this.propsfirstName = "ram"
    render(){
        return <h1>Hello i am {this.props.firstName}{this.props.lastName} learning new things</h1>
    }
}
export default PropC