import axios from "axios";

export const getPosts = async (userId) => {
    console.log(userId)
    return await axios.get(`http://localhost:5000/api/postl?user_id=${userId}`)
}

export const createPost = async (post) => {
    console.log(post)
    await axios.post(`http://localhost:5000/api/post`, post)
}
