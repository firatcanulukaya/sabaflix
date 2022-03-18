import {useSelector} from "react-redux";
import axios from "axios";
import {GET_ALL_CONTENT} from "../types";

export const getAllContent = (data) => dispatch => {
    const {serverLink} = useSelector(state => state.util);
    try {
        axios.get(`${serverLink}/content`)
            .then(res => {
                dispatch({
                    type: GET_ALL_CONTENT,
                    payload: res.data.message
                })
            })
    } catch (err) {
        console.log(err)
    }
};