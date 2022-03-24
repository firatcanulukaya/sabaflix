import axios from "axios";
import {GET_ALL_CONTENT} from "../types";

export const getAllContent = () => dispatch => {
    try {
        axios.get(`http://10.80.0.168:8080/content`)
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: GET_ALL_CONTENT,
                        payload: res.data.message
                    });
                }
            })
    } catch (err) {
        console.log(err)
    }
};