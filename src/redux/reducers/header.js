import {GET_HEADER} from "../types";

const initial_state = {
    content: null
}

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_HEADER:
            return {
                ...state,
                content: action.payload
            }
        default:
            return state
    }
}

export default reducer