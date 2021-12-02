import { API } from "../api"

const SET_USER = 'SET_USER'

let initialState = {

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, userType: action.userType}
        default:
            return state
    }
}

// ACTION CREATOR

export const setUser = (userType) => ({ type: SET_USER, userType})

// THUNK

export const loginUser = () => dispatch => {
    console.log('user');
}

export default appReducer