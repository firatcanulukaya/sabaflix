import {GET_SEARCH} from "../types";

const initial_state = {
    search: null,
}

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state
    }
}

export default reducer