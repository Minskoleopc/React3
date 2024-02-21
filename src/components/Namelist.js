import React from 'react'
function Namelist(){
    // let names = ["amol","ram","sham","sachin"]
    // let namesList = names.map(name => <h1>{name}</h1>)
    // return (
    // <div>
    //     {/* <h1>{names[0]}</h1>
    //     <h1>{names[1]}</h1>
    //     <h1>{names[2]}</h1>
    //     <h1>{names[3]}</h1> */}
    //     {/* {
    //         names.map(name => <h1>{name}</h1>)
    //     } */}
    //     {/* 
    //     {
    //        namesList 
    //     } */}

    // </div>
    // )

    const persons = [
        {
            firstName:"chinmay",
            lastName:"deshpande"
        },
        {
            firstName:"poorva",
            lastName:"vyas"
        },
        {
            firstName:"raj",
            lastName:"dixit"
        }

    ] 
    let personList = persons.map(person => <h1>My firstName is {person.firstName} and lastName is {person.lastName}</h1>)
    return(
        <div>
            {personList}
        </div>
    )







}

export default Namelist