import axios from "axios";
import {OPEN_MODAL} from "../types";

export const getModal = id => dispatch => {
    try {
        axios.get(`http://10.80.0.168:8080/content/${id}`)
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: OPEN_MODAL,
                        payload: res.data.message
                    })
                }
            })
    } catch (err) {
        console.log(err)
    }
};