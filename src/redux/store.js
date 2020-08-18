import { createStore }  from 'redux'
import cakeReducer from './cake/cakeReducer'

const store = createStore(cakeReducer)
export default store

/**
 * After creating redux store next step is to provide this store to our react application
 * this is where the react-redux library used, react-redux library exports a component called provider
 * look file app.js
 */