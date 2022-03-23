import {useSelector} from "react-redux";
import axios from "axios";
import {GET_HEADER} from "../types";

export const getHeader = () => dispatch => {
    const {serverLink} = useSelector(state => state.util);
    try {
        axios.get(`${serverLink}/content`)
            .then(res => {
                dispatch({
                    type: GET_HEADER,
                    payload: res.data.message
                })
            })
    } catch (err) {
        console.log(err)
    }
};