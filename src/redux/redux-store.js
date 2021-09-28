import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import postsReducer from "./posts-reducer";
import postReducer from "./post-reducer";


let reducers = combineReducers({
    posts: postsReducer,
    post: postReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))


window.store = store;

export default store;