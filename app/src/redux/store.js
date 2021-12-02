import { combineReducers , createStore, applyMiddleware, compose  } from "redux"
import thunkMiddlewere from "redux-thunk"

import appReducer from "./reducers"

let reducers = combineReducers({
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddlewere)
))

window.store = store

export default store