import $api from "../http";

export const getPosts = async (userId, sorting) => {
    return await $api.get(`/post?sorting=${sorting}&user_id=${userId}`)
}

export const createPost = async (post) => {
    await $api.post(`/post`, post)
}