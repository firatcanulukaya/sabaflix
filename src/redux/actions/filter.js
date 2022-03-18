import {SET_PRE_REGISTER_USER, SET_REGISTER_SUCCESS} from "../types";
import {damlaAPI} from "../../services/api"

export const setPreRegisterUser = data => {
    return {
        type: SET_PRE_REGISTER_USER,
        payload: data
    }
};

export const postUser = (data) => dispatch => {
    try {
        damlaAPI.Register(data)
            .then(() => {
                dispatch({
                    type: SET_REGISTER_SUCCESS
                })
            })
            .catch(err => {
                console.log(err)
            })
    } catch (err) {
        console.log(err)
    }
};