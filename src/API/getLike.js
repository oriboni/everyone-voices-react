import $api from "../http";

export const incrementLike = async (postId) => {
    try {
        await $api.put('/post/like', {...postId})
    } catch(e) {
        console.log(e.message)
    }

}

export const decrementLike = async (postId) => {
    try {
        await $api.put('/post/dislike', {...postId})
    } catch (e) {
        console.log(e.message)
    }

}