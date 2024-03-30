import $api from "../http";

export const createComment = async (user_id, post_id, timestamp, title) => {
    await $api.post('/comment', {user_id, post_id, title, timestamp})
}

export const likeComment = async (user_id, comment_id) => {
    await $api.put(`/comment/like?user_id=${user_id}&comment_id=${comment_id}`)
}

export const dislikeComment = async (user_id, comment_id) => {
    await $api.put(`/comment/dislike?user_id=${user_id}&comment_id=${comment_id}`)
}
