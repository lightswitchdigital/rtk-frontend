import { API } from "../api"

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_PHOTOS = 'SET_PHOTOS'
const SET_USER = 'SET_USER'
const SET_MESSAGE = 'SET_MESSAGE'
const SET_INITIAL = 'SET_INITIAL'
const SET_RECORD = 'SET_RECORD'

let initialState = {
    photos: [],
    isFetching: false,
    initialized: false,
    userType: '',
    users: [
        {login: 'user', password: '1111', type: 'user'}
    ],
    errorMessage: '',
    record: {}
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        case SET_PHOTOS:
            return { ...state, photos: action.photos}
        case SET_USER:
            return { ...state, userType: action.userType}
        case SET_INITIAL:
            return { ...state, initialized: action.initialized}
        case SET_MESSAGE:
            return { ...state, errorMessage: action.errorMessage}
        case SET_RECORD:
            return { ...state, record: action.record}
        
        default:
            return state
    }
}

// ACTION CREATOR

export const setUser = (userType) => ({ type: SET_USER, userType})
export const setRecord = (record) => ({ type: SET_RECORD, record})
export const setPhotos = (photos) => ({ type: SET_PHOTOS, photos})
export const setInitial = (initialized) => ({ type: SET_INITIAL, initialized})
export const setMessage = (errorMessage) => ({ type: SET_MESSAGE, errorMessage})
export const toggleFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})

// THUNK

export const getPhotos = () => dispatch => {
    dispatch(toggleFetching(true))
    setTimeout(() => {dispatch(toggleFetching(false))}, 1000)
}

export const loginUser = (login, password) => (dispatch) => {
    const user = initialState.users.find(user => user.login === login)
    if(user){
        if(user.password === password){
            dispatch(setUser(user.type))   
            dispatch(setInitial(true))
            localStorage.setItem('login', user.login);
            localStorage.setItem('password', user.password);
        }else{
            dispatch(setMessage('Пароль неверен'))
        }
    }else{
        dispatch(setMessage('Логин неверен'))
    }
}

export const getRecords = () => (dispatch) => {
    return async (dispatch) => {
        dispatch(toggleFetching(true))
        let data = await API.getRecords()
        
        dispatch(setRecord(data.data))
        dispatch(toggleFetching(false))
    }
}

export const logOut = () => (dispatch) => {
    dispatch(setUser(''))   
    dispatch(setInitial(false))
    localStorage.removeItem('login');
    localStorage.removeItem('password');
}

export default appReducer