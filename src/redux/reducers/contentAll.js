import {GET_ALL_CONTENT} from "../types";

const initial_state = {
    content: {},
}

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_ALL_CONTENT:
            return {
                ...state,
                content: action.payload
            }
        default:
            return state
    }
}

export default reducer