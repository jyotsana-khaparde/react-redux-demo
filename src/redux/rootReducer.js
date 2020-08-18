import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

/**
 * Turns an object whose values are different reducer functions, into a single reducer function.
 * It will call every child reducer, and gather their results into a single state object, 
 * whose keys correspond to the keys of the passed reducer functions.
 */
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer;