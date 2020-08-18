import React from 'react'
/**
 * useSelector is a hook the react-redux liburary provide  which acts as a mapStateToProps function
 * soto hold any state that is maintained in the redux store we use useSelector hook
 *  */ 
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    /**
     * useSelector function recive the redux state as it's argument
     * so we access the numOfCakes from the redux state & stored it in a veriable(numOfCakes) 
     * that belongs to our react component
     */
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    /**
     * A hook to access the redux dispatch function.
     * it returns the reference to the dispatch function from the redux store
     */
    const dispatch = useDispatch()
    return(
        <div>
            <h2>(HooksCakeContainer)Number of cake {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer