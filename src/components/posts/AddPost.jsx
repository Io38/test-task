import React, {useEffect, useState} from "react";
import {createPost, getPosts} from "../../redux/posts-reducer";


const AddPost = (props) => {

    let [title, setTitle] = useState(props.newPostTitleText);

    let [body, setBody] = useState(props.newPostBodyText);

    useEffect(() => {
        setTitle(props.newPostTitleText)
    }, [props.newPostTitleText])


    useEffect(() => {
        setBody(props.newPostBodyText)
    }, [props.newPostBodyText])


    const onTitleChange = e => {
        props.setNewPostTitleText(e.currentTarget.value)
    }

    const onBodyChange = e => {
        props.setNewPostBodyText(e.currentTarget.value)
    }

    const onButtonClick = () => {
        props.createPost(title, body)

    }


    return <div className="new_element">
        <h2>ADD A NEW POST</h2>
        <div>
            <input placeholder="Input title of new post" value={title} onChange={onTitleChange}/>
        </div>


        <div>
            <input placeholder="Input body of new post" value={body} onChange={onBodyChange}/>
        </div>

        <button onClick={onButtonClick}>Add Post</button>
    </div>
}


export default AddPost