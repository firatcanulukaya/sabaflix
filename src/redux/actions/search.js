import axios from "axios";
import {GET_SEARCH} from "../types";

export const getSearch = data => dispatch => {
    try {
        axios.get(`http://10.80.0.168:8080/c?search=${data}`)
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: GET_SEARCH,
                        payload: res.data.message
                    });
                }
            })
    } catch (err) {
        console.log(err)
    }
};