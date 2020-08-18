import { createStore, applyMiddleware }  from 'redux'
import rootReducer from './rootReducer'
// logger is basically locks information related to the redux store
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))
export default store

/**
 * After creating redux store next step is to provide this store to our react application
 * this is where the react-redux library used, react-redux library exports a component called provider
 * look file app.js
 */

/**
 * Use logger middleware:-
 * 1. first step to install the package - npm i redux-logger
 * 2. second step is to import it in our store.js file
 * 3. 3rd step is to apply this logger middleware for that we first import applyMiddleware function
 *    from redux then to the createStore function we pass in a second parameter applyMiddleware,
 *    and what is our Middleware ? it is logger
 */