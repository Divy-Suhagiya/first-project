import axios from "axios";
import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from "../types/type";



export const fetchuser = () => {
    return (dispatch) => {
        dispatch(userRequest());
        axios.get("https://student-api.mycodelibraries.com/api/user/get" ).then(response => {
            const user = response.data.data
            dispatch(userSuccess(user))
        }).catch(error => {
            dispatch(userFailure(error.massage))
        })
    }
}

export const userRequest = () => {
    return {
        type: USER_REQUEST
    }
}
export const userSuccess = (user) => {
    return {
        type: USER_SUCCESS,
        payload: user
    }
}
export const userFailure = (error) => {
    return {
        type: USER_FAILURE,
        payload: error
    }
}