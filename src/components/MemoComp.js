//memo component 
import React from 'react'

function Memo (props){
    console.log('rendering memo component')
    return(
        <div>
            {props.name}
        </div>
    )
}

export default React.memo(Memo)