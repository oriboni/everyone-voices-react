import $api from "../http";
import {googleUserInfo} from "../API/googleUserInfo";
import {getUsers, putUsersIcon} from "../API/getUsers";

export default class AuthService {
    static async userLogin(tokenResponse) {
        const userInfo = await googleUserInfo(tokenResponse.access_token)
        const users = await getUsers(userInfo.email)
        if (users) {
            localStorage.setItem('token', users.accessToken)
            const user = {
                ...userInfo,
                name: users.name,
                id: users.id
            }
            return users
        }
        return null
    }
}