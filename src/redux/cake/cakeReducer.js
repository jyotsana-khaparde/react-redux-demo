import { BUY_CAKE } from './cakeTypes'

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    console.log('action.type', action.type);
    switch (action.type) {
        case BUY_CAKE: return {
            ...state, // it make the copy of state object and then only update numOfCakes
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

export default cakeReducer