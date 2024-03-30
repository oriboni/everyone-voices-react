import $api from "../http";

export const getPosts = async (userId, sorting) => {
    return await $api.get(`/post?sorting=${sorting}&user_id=${userId}`)
}

export const createPost = async (post) => {
    try {
        await $api.post(`/post`, post)
    } catch(e) {
        console.log(e.message)
    }
}