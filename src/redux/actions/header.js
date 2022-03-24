import axios from "axios";
import {GET_HEADER} from "../types";

export const getHeader = () => dispatch => {
    try {
        axios.get(`http://10.80.0.168:8080/content/most-popular`)
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: GET_HEADER,
                        payload: res.data.message
                    });
                }
            })
    } catch (err) {
        console.log(err)
    }
};