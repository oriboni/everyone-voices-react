import $api from "../http";

export const createComment = async (user_id, post_id, timestamp, title) => {
    try {
        await $api.post('/comment', {user_id, post_id, title, timestamp})
    } catch(e) {
        console.log(e.message)
    }
}

export const likeComment = async (user_id, comment_id) => {
    try {
        await $api.put(`/comment/like?user_id=${user_id}&comment_id=${comment_id}`)
    } catch(e) {
        console.log(e.message)
    }

}

export const dislikeComment = async (user_id, comment_id) => {
    try {
        await $api.put(`/comment/dislike?user_id=${user_id}&comment_id=${comment_id}`)
    } catch(e) {
        console.log(e)
    }


}
