//list rendering
import React from 'react'

function Person(props){
    return(
        <div>
            <h1> this is {props.person.name} and im {props.person.age} years old </h1>
        </div>
    )
}

export default Person