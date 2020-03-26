import {UserActionTypes} from "./user.types";

const INITIAL_STATE = {
        currentUser: null //default state when action is fired
}

const userReducer = (state = INITIAL_STATE, action) =>{
    
    //return results based on the action
    
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:

            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }

}

export default userReducer;