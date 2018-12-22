
import {FETCH_USER} from "../constants/action-types";
import {USER_FETCH_SUCCEEDED} from "../constants/action-types";



const initialState = {
    user: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return { ...state, user: [...state.user, action.payload] };
        case USER_FETCH_SUCCEEDED:
            return { ...state, user: [...state.user, ...action.payload.data] };
        default:
            return state;
    }
};

export default userReducer;