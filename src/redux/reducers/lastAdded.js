import {GET_LAST_ADDED} from "../types";

const initial_state = {
    content: {},
}

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_LAST_ADDED:
            return {
                ...state,
                content: action.payload
            }
        default:
            return state
    }
}

export default reducer