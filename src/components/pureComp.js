import React, { PureComponent } from 'react'
/**
 * Regular component:- It does not implements the shouldComponentUpdate lifecycle method, it always return true by default
 * Pure Component:- A PureComponent implements the shouldComponentUpdate lifecycle method with a shallow props & state comparison
 * Summary:-
 * 1. We can create a component by extending PureComponent class.
 * 2. A PureComponent implements the shouldComponentUpdate lifecycle method by performing a
 * shallow comparision on the props and state of component.
 * 3. If there is no difference between SC of preState with currentState,
 *    and SC of preProps with currentProps, the component is not re-rendered hance performance boost.
 * 4. It is a good idea to ensure that all the childern components are also pure to avoid unexpected behaviour.
 * 5. Never mutate the state. always return a new object that reflect the new state.
 */

class PureComp extends PureComponent {
    render() {
        console.log(' i am PureComp');
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp

/**
 * Shallow comparison (SC) : -
 * 1. Primitive types : a (SC) b return true if a and b have the same value and are of the same type
 * Ex: string 'jyotsana' (SC) string 'jyotsana' return true.
 * 
 * 2. Complex types: a (SC) b return true if a and b reference the exact same object.
 * Ex1: var a = [1,2,3];
 *     var b = [1,2,3];
 *     var c = a
 *     var result1 = (a === b) //false
 *     var result2 = (a === c) //true
 * Ex2: var a = {x:1, y:2};
 *     var b = {x:1, y:2};
 *     var c = a
 *     var result1 = (a === b) //false
 *     var result2 = (a === c) //true
 * 
 */