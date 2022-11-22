import { USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "../types/type";

let initialState = {
    user  : []
}

const userReducer = (state = initialState , action) => {
    switch(action.type) {
        case USER_REQUEST : 
            return state
        case USER_SUCCESS : 
            return {
                user : action.payload,
                error : ''
            };
        case USER_FAILURE : 
            return {
                user : [],
                error : action.payload
            };
        default : 
            return state
    }
}

export default userReducer