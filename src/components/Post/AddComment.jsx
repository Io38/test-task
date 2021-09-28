import React, {useEffect, useState} from "react";

const AddComment = (props) => {

    let [commentText, setCommentText] = useState(props.newCommentText);

    useEffect(() => {
        setCommentText(props.newCommentText)
    }, [props.newCommentText])

    const onCommentChange = e => {
        props.setNewCommentText(e.currentTarget.value)
    }

    const onButtonClick = () => {
        console.log(commentText)
        props.createComment(props.id, commentText)
    }
    return <div className="new_element">


        <h2>ADD A NEW COMMENT</h2>
        <div>
            <input placeholder="Input text of new comment" value={commentText} onChange={onCommentChange}/>
        </div>

        <button onClick={onButtonClick}>Add Comment</button>
    </div>


}

export default AddComment