import {postApi} from "../API/api";

const SET_POSTS = 'SET_POSTS'
const SET_NEW_POST_TITLE_TEXT = 'SET_NEW_POST_TITLE_TEXT'
const SET_NEW_POST_BODY_TEXT = 'SET_NEW_POST_BODY_TEXT'

let initialState = {

    postData: [],
    newPostTitleText: '',
    newPostBodyText: ''
}


const postsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_POSTS:
            return {
                ...state,
                postData: [...action.postData]
            }

        case SET_NEW_POST_TITLE_TEXT:
            return {
                ...state,
                newPostTitleText: action.text
            }

        case SET_NEW_POST_BODY_TEXT:
            return {
                ...state,
                newPostBodyText: action.text
            }

        default:
            return state
    }
}


export const setPosts = (payload) => ({type: SET_POSTS, postData: payload})
export const setNewPostTitleText = (text) => ({type: SET_NEW_POST_TITLE_TEXT, text})
export const setNewPostBodyText = (text) => ({type: SET_NEW_POST_BODY_TEXT, text})


export const getPosts = () => async (dispatch) => {

    let response = await postApi.getPosts()
    dispatch(setPosts(response.data))
}

export const createPost = (title,body) => async (dispatch) => {

    if (title.trim() !== "" && title && body && body.trim() !== "") {

        let response = await postApi.createPost(title,body)
        dispatch(setNewPostBodyText(''))
        dispatch(setNewPostTitleText(''))
        window.location.reload();
    }

}


export default postsReducer;