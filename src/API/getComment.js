import axios from "axios";

export const createComment = async (user_id, post_id, timestamp, title) => {
    await axios.post('http://localhost:5000/api/comment', {user_id, post_id, title, timestamp})
}

export const likeComment = async (user_id, comment_id) => {
    await axios.put(`http://localhost:5000/api/comment/like?user_id=${user_id}&comment_id=${comment_id}`)
}

export const dislikeComment = async (user_id, comment_id) => {
    await axios.put(`http://localhost:5000/api/comment/dislike?user_id=${user_id}&comment_id=${comment_id}`)
}
