import React, {useEffect, useState} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {createPost, getPosts, setNewPostBodyText, setNewPostTitleText} from "../../redux/posts-reducer";
import Posts from "./Posts";


const PostsContainer = (props) => {


    useEffect(() => {


        props.getPosts()
    }, [])



    return (<>

            <Posts {...props}/>
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        posts: state.posts.postData,
        newPostTitleText: state.posts.newPostTitleText,
        newPostBodyText: state.posts.newPostBodyText
    }
}

export default compose(
    connect(mapStateToProps, {getPosts,createPost, setNewPostTitleText, setNewPostBodyText})
)(PostsContainer)