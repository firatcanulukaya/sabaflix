import {useSelector} from "react-redux";
import axios from "axios";
import {GET_LAST_ADDED} from "../types";

export const getLastAdded = (data) => dispatch => {
    const {serverLink} = useSelector(state => state.util);
    try {
        axios.get(`${serverLink}/content/last-added`)
            .then(res => {
                dispatch({
                    type: GET_LAST_ADDED,
                    payload: res.data.message
                })
            })
    } catch (err) {
        console.log(err)
    }
};