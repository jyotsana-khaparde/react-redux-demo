import { createStore }  from 'redux'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)
export default store

/**
 * After creating redux store next step is to provide this store to our react application
 * this is where the react-redux library used, react-redux library exports a component called provider
 * look file app.js
 */