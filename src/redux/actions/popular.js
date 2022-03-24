import axios from "axios";
import {GET_POPULAR} from "../types";

export const getPopular = () => dispatch => {
    try {
        axios.get(`http://10.80.0.168:8080/content/popular`)
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: GET_POPULAR,
                        payload: res.data.message
                    });
                }
            })
    } catch (err) {
        console.log(err)
    }
};