import $api from "../http";

export const getPosts = async (userId, sorting) => {
    return await $api.get(`/post/allPost?sorting=${sorting}&user_id=${userId}`)
}

export const createPost = async (post) => {
    try {
        return await $api.post(`/post/create`, post)
    } catch(e) {
        console.log(e.message)
    }
}