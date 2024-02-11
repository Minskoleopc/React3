import React from "react";

let ChildC = (props) => {
    console.log(props)
    return (
        <div>
             <button onClick={()=>props.greetHandler()}>greeParent</button>
        </div>
    )

}
export default ChildC