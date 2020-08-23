import React, { Component } from 'react'

// function FRinput() {
//     return(
//         <div>
//             <input type='text'></input>
//         </div>
//     )
// }

/**
 * forwardRef method takes in a component as it's parameter
 * so here we are passing arrow function as a parameter to forwardRef method
 * Note: every functional component receives props as it's parameter
 * so when a component is passed as a parameter to the create ref method it receives the ref attribute as a second parameter.
 * forwardRef is mainly forwarding the ref
 */
const FRinput = React.forwardRef((props, ref) => {
    return(
        <div>
            <input ref={ref} type='text'></input>
        </div>
    )
})

export default FRinput