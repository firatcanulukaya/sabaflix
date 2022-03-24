import axios from "axios";
import {GET_LAST_ADDED} from "../types";

export const getLastAdded = () => dispatch => {
    try {
        axios.get(`http://10.80.0.168:8080/content/last-added`)
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: GET_LAST_ADDED,
                        payload: res.data.message
                    })
                }
            })
    } catch (err) {
        console.log(err)
    }
};