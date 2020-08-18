import { BUY_ICECREAM } from './iceCreamTypes'

const initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
    console.log('action.type', action.type);
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state, // it make the copy of state object and then only update numOfIceCreams
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

export default iceCreamReducer