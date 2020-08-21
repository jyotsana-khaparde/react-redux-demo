import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        // this.cbRef = null
        // this.setCbRef = element => {
        //     this.cbRef = element
        // }
    }

    componentDidMount() {
        /** this current property points to the actual Dom node */
        this.inputRef.current.focus()
        console.log('inputRef--> ',this.inputRef);
        // if(this.cbRef) {
        //     this.cbRef.focus()
        // }
    }

    clickHandler = () => {
        /** here we are accesing the value property of the input DOM node which is available
        * as the current property
        */
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                {/* ref make it possible to access dom nodes direcly within react */}
                <input placeholder='createRef' type='text' ref={this.inputRef} />
                {/* <input placeholder='callbackRef' type='text' ref={this.setCbRef} /> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
export default RefsDemo

/**
 * create ref method:- 
 * FIRST WAY:-
 * 1. create ref we do it using React.createRef() <- this method (it is common to create 
 *    constructor in the component so that they can be referenced throughout the component)
 * 2. second step is to attach this ref to our input element in the render method, to attach ref
 *    we use of the reserved ref attribute.
 * 
 * SECOND WAY:-
 * 1. callback refs -> create a property and assign a value null
 * 2. create a method that will assign DOM element to the ref we have just created in step 1
 * 3. 3rd step is to attach that ref to the input element
 * 4. react will call the ref callback with the DOM element when the component mounts and call
 *    it with null when it unmount
 * 
 * DIFFERENCES B/W create ref & callback refs
 * 1. with create ref approch you create a reference using React.createRef(),
 *    with callback ref approach you first create a property & then creates a method that assigns
 *    the property with a DOM element passed as a parameter.
 * 2. in create ref approach we attach the reference to the element using the ref prop and assigning the property,
 *    in callback ref approach we attach the ref to an element using the method that in turn assign the element to the property
 * 3. with create ref approch the element can be accessed using this.<reference variable>.current &
 *    in callback ref approach it is directly accessed using this.<reference variable>
 * 
 */