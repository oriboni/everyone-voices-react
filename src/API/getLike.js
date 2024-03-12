import axios from "axios";

export const incrementLike = async (postId) => {
    console.log(postId)
    await axios.put('http://localhost:5000/api/post/like', {...postId})
}

export const decrementLike = async (postId) => {
    console.log(postId)
    await axios.put('http://localhost:5000/api/post/dislike', {...postId})
}