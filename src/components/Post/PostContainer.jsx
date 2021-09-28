import React, {useEffect, useState} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {createComment, deletePost, getPost, setNewCommentText, updatePost} from "../../redux/post-reducer";
import {withRouter} from "react-router-dom";
import Post from "./Post";


const PostsContainer = (props) => {


    useEffect(() => {

        let postId = props.match.params.Id;
        props.getPost(postId)
    }, [])


    return (<>

            {props.id ? <Post {...props}/> : <h1>There is no such a post right now</h1>}
        </>
    )
}


let mapStateToProps = (state) => ({

    id: state.post.id,
    title: state.post.title,
    body: state.post.body,
    comments: state.post.comments,
    newCommentText: state.post.newCommentText

})

export default compose(
    connect(mapStateToProps, {getPost, updatePost, deletePost, createComment, setNewCommentText}),
    withRouter
)(PostsContainer)