import axios from "axios";

export const createComment = async (user_id, post_id, timestamp, title) => {
    console.log(user_id, post_id, timestamp, title)
    await axios.post('http://localhost:5000/api/comment', {user_id, post_id, title, timestamp})
}
