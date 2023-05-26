//file for using methods as props

import React from 'react'

function ChildComponent(props){
    return(
        <div>
            <button onClick={()=> props.greetHandler('child')}>greet parent</button>
        </div>
    )
}

export default ChildComponent