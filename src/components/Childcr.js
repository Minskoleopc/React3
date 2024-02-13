import React from "react";

let Childcr = function(props){
    return(
        <button onClick={()=> props.greetHandler("chinmay")}>GreetButton</button>
    )
}
export default Childcr