
import React from "react";

function Namelist2(){
    let names = ["amol","raj","sanjay","sachin"]
    let listName = names.map((names)=> <h1>{names}</h1>)
    let personList = [
        {   
            id:1,
            firstName:"chinmay",
            lastName:"deshpande",
            rollNo:34

        },
        {
            id:2,
            firstName:"amol",
            lastName:"rao",
            rollNo:32

        },
        {
            id:3,
            firstName:"tanmay",
            lastName:"deshmukh",
            rollNo:33

        }

        
    ]
    personList = personList.map((person)=> <h1>My firstName is {person.firstName} and my lastName is {person.lastName}-{person.rollNo}</h1>)

    return(
        // <div>
        //     <h1>{names[0]}</h1>
        //     <h1>{names[1]}</h1>
        //     <h1>{names[2]}</h1>
        //     <h1>{names[3]}</h1>
        // </div>
        //names.map((names)=> <h1>{names}</h1>)
        <div>
             {/* {listName} */}

             {personList}

        </div>
       

    )

}
export default Namelist2