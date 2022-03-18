import {useSelector} from "react-redux";
import axios from "axios";
import {GET_POPULAR} from "../types";

export const getPopular = (data) => dispatch => {
    const {serverLink} = useSelector(state => state.util);
    try {
        axios.get(`${serverLink}/content/popular`)
            .then(res => {
                dispatch({
                    type: GET_POPULAR,
                    payload: res.data.message
                })
            })
    } catch (err) {
        console.log(err)
    }
};