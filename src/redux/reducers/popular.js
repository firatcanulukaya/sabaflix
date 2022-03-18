import {GET_POPULAR} from "../types";

const initial_state = {
    content: {},
}

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_POPULAR:
            return {
                ...state,
                content: action.payload
            }
        default:
            return state
    }
}

export default reducer