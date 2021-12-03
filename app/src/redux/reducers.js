import { API } from "../api"

const TOGGLE_SCELETON = 'TOGGLE_SCELETON'
const SET_PHOTOS = 'SET_PHOTOS'

let initialState = {
    photos: [],
    togglerSceleton: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SCELETON:
            return { ...state, togglerSceleton: action.togglerSceleton}
        case SET_PHOTOS:
            return { ...state, photos: action.photos}
        default:
            return state
    }
}

// ACTION CREATOR

export const setPhotos = (photos) => ({ type: SET_PHOTOS, photos})
export const toggleSceleton = (togglerSceleton) => ({ type: TOGGLE_SCELETON, togglerSceleton})

// THUNK

export const getPhotos = () => dispatch => {
    dispatch(toggleSceleton)
}

export default appReducer