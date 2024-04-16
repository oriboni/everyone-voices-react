import {googleUserInfo} from "../API/googleUserInfo";
import {getUsers} from "../API/getUsers";

export default class AuthService {
    static async userLogin(tokenResponse) {
        const userInfo = await googleUserInfo(tokenResponse.access_token)
        const users = await getUsers(userInfo.email)
        if (users) {
            localStorage.setItem('token', users.accessToken)
            users.user.picture = userInfo.picture
            return users
        }
        return null
    }
}