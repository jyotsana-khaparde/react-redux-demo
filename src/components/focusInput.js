import React, { Component } from 'react'
import Input from './input'

class FocusInputComponent extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }

    clickHandler = () =>  {
        // <this.componentRef.current> this gives access to the Input component & then we can call focusInput method
        this.componentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}
export default FocusInputComponent

/**
 * WE want to achieve here is when we click on Focus Input button in the parent component the input element
 * in the child component should receive the focus & we achive that using refs on child component
 * 1. in the parent component which is FocusInput component we will create a ref using React.createRef() method
 * 2. we attach the ref to child component so on out input component we will add the ref attribute and 
 *    then attach this.componentRef eg: <Input ref={this.componentRef}/>
 * 3. add clickHandler to the button and within the clickHandler called the child component method using the ref
 * 
 */