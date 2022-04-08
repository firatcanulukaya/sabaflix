import {OPEN_MODAL, CLOSE_MODAL} from "../types";

const initial_state = {
    open: false,
    content: null,
}

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                open: true,
                content: action.payload
            }
        case CLOSE_MODAL:
            return {
                ...state,
                open: false,
                content: null
            }
        default:
            return state
    }
}

export default reducer