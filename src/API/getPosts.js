import axios from "axios";

export const getPosts = async (userId) => {
    return await axios.get(`http://localhost:5000/api/postl?user_id=${userId}`)
}

export const createPost = async (post) => {
    await axios.post(`http://localhost:5000/api/post`, post)
}
