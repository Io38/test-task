import * as axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://bloggy-api.herokuapp.com/'
    }
)

export const postApi = {

    getPosts() {
        return instance.get('posts')
    },

    getPost(id) {
        return instance.get(`posts/${id}?_embed=comments`)
    },
    createPost(title, body) {
        return instance.post(`posts`, {title, body})
    },
    updatePost(id, title, body) {
        return instance.put(`posts/${id}`, {title, body})
    },
    deletePost(id) {
        return instance.delete(`posts/${id}`)
    },
    createComment(postId, body) {
        return instance.post('comments', {postId, body})
    }
}