import { API } from "../api"

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_PHOTOS = 'SET_PHOTOS'

let initialState = {
    photos: [],
    isFetching: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        case SET_PHOTOS:
            return { ...state, photos: action.photos}
        default:
            return state
    }
}

// ACTION CREATOR

export const setPhotos = (photos) => ({ type: SET_PHOTOS, photos})
export const toggleFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})

// THUNK

export const getPhotos = () => dispatch => {
    dispatch(toggleFetching(true))
    setTimeout(() => {dispatch(toggleFetching(false))}, 2000)
}

export default appReducer