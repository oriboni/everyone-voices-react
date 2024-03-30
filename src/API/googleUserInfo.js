import axios from "axios";

export const googleUserInfo = async (token) => {
    try {
        return await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {Authorization: `Bearer ${token}`},
        })
            .then((userInfo) => {
                return {email: userInfo.data.email, name: userInfo.data.name, picture: userInfo.data.picture}
            })
    } catch (e) {
        console.log(e.message)
    }

}