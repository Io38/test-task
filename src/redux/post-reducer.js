import {postApi} from "../API/api";

const SET_POST = 'SET_POST'
const SET_NEW_COMMENT_TEXT = 'SET_NEW_COMMENT_TEXT'

let initialState = {

    id: null,
    title: null,
    body: null,
    comments: [],
    newCommentText: null
}


const postReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_POST:
            return {
                ...state,
                id: action.id,
                title: action.title,
                body: action.body,
                comments: [...action.comments],

            }

        case SET_NEW_COMMENT_TEXT:
            return {
                ...state,
                newCommentText: action.text,

            }
        default:
            return state
    }
}


export const setPost = (id, title, body, comments) => ({type: SET_POST, id, title, body, comments})
export const setNewCommentText = (text) => ({type: SET_NEW_COMMENT_TEXT, text})


export const getPost = (postId) => async (dispatch) => {

    let response = await postApi.getPost(postId)

    let {id, title, body, comments}=response.data

    dispatch(setPost(id, title, body, comments))
}


export const updatePost = (id, title, body) => async (dispatch) => {
    let response = await postApi.updatePost(id, title, body)
    getPost(id)
}


export const deletePost = (id) => async (dispatch) => {

    let response = await postApi.deletePost(id)
    setPost(null, null, null, null)

    window.location.reload();
}

export const createComment = (postId, text) => async (dispatch) => {

    if (text.trim() !== "") {

        let response = await postApi.createComment(postId, text)
        dispatch(setNewCommentText(''))
        window.location.reload();
    }
}


export default postReducer;