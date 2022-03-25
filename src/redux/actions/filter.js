import {SET_FILTER, GET_CATEGORIES} from "../types";
import axios from "axios";

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        payload: filter
    }
};

export const getCategories = () => dispatch =>{
    axios.get("http://10.80.0.168:8080/contentCategory")
        .then(res => {
            if (res.status === 200) {
                dispatch({
                    type: GET_CATEGORIES,
                    payload: res.data.message
                })
            }
        })
};