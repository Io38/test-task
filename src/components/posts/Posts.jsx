import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import AddPost from "./AddPost";

const Posts = (props) => {

    let [posts, setPosts] = useState(props.posts);

    useEffect(() => {
        setPosts(props.posts)
    }, [props.posts])


    return (<>

            {posts.map(el =>
                <div key={el.id}>
                    Post #{el.id}
                    <div className="post">
                        <NavLink to={'/post' + el.id}>
                            <div className="post_title">{el.title}</div>
                            <div className="post_body">{el.body}</div>
                        </NavLink>
                    </div>
                </div>
            )}

            <AddPost {...props}/>
        </>
    )
}


export default Posts;