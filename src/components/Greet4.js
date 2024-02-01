import React from "react";
function Greet4 (props){

    let {name , lastName} = props
    return(
        <div>
            <h1>Hello Greet 3 {name}{lastName}</h1>
        </div>
    )

}
export default Greet4