import React, { Component } from 'react'
import FRinput from './FRinput'

class FRParentInput extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }
    clickHandler = () => {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <FRinput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>FR Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput

/**
 * 1. create a ref and the parent component
 * 2. attach the ref to the child component instance using ref attribute
 * 3. we need to forward this ref to the input element in the child component
 *    & ref forwarding can be achived using the forward ref method from the react library
 * 4. 
 */