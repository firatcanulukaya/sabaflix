import {SET_FILTER, REMOVE_FILTER} from "../types";

const initial_state = {
    user: null,
    registerPhase: false
}

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            }
        case 'REMOVE_FILTER':
            return {
                ...state,
                filter: null
            }
        default:
            return state
    }
}

export default reducer