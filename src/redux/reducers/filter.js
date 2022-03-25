import {SET_FILTER, REMOVE_FILTER, GET_CATEGORIES} from "../types";

const initial_state = {
    filter: null,
    categories: null
}

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        case REMOVE_FILTER:
            return {
                ...state,
                filter: null
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}

export default reducer