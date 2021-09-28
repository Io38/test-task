import React, {useEffect, useState} from "react";
import {deletePost} from "../../redux/post-reducer";
import AddComment from "./AddComment";
import {NavLink} from "react-router-dom";

const Post = (props) => {

    let [id, setId] = useState(props.id);
    let [title, setTitle] = useState(props.title);
    let [body, setBody] = useState(props.body);
    let [comments, setComments] = useState(props.comments);
    let [editMode, setEditMode] = useState(false);
    useEffect(() => {
        setTitle(props.title)
        setBody(props.body)
        setId(props.id)
        setComments(props.comments)
    }, [props.id, props.title, props.body, props.comments])


    const editModeOn = () => {
        setEditMode(true)
    }
    const editModeOff = () => {
        props.updatePost(id, title, body)
        setEditMode(false)
    }

    const onTitleChange = e => {
        setTitle(e.currentTarget.value)
    }

    const onBodyChange = e => {
        setBody(e.currentTarget.value)
    }

    const onDeleteClick = () => {
        props.deletePost(id)
        props.getPost(id)
    }

    return (<>

            <div>Post #{id}</div>
            <div className="post">
                {
                    editMode
                        ?
                        <div>

                            <input className="post_title" value={title} onChange={onTitleChange}/>
                            <input className="post_body" value={body} onChange={onBodyChange}/>

                        </div>
                        :
                        <div>
                            <div className="post_title">{title}</div>
                            <div className="post_body">{body}</div>

                        </div>

                }


            </div>

            {
                editMode
                    ?
                    <button className='btn_1_after' onClick={editModeOff}>Update Post</button>
                    :
                    <button className='btn_1' onClick={editModeOn}>Change post</button>
            }
            <button className='btn_2' onClick={onDeleteClick}>Delete post</button>

            {
                comments.length === 0
                    ?
                    <div className="comments">No comments yet</div>
                    :
                    <div className="comments">Comments:</div>
            }


            {comments.map(el =>

                <div className="comment" key={el.id}>
                    <div className="comment_body">{el.body}</div>
                </div>
            )}

            <AddComment {...props}/>
        </>
    )
}


export default Post;