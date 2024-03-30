import $api from "../http";

export const getUsers = async (email) => {
    try {
        const user = await $api.get(`/login?email=${email}`)
        if (!user) {
            throw new Error('Такого пользователя не существует!')
        }
        return user.data
    } catch(e) {
        console.log(e.message)
        return false
    }

}

export const putUsersIcon = async (id, picture) => {
    try {
        await $api.put('/user', {id, picture})
    } catch(e) {
        console.log(e.message)
    }
}

export const getAdminAuth = async (email, password) => {
    try {
        const auth = await $api.get(`/admin?email=${email}&password=${password}`)
        if (!auth) {
            throw new Error('Неверный логин/пароль')
        }
        return auth.data
    } catch(e) {
        console.log(e.message)
        return false
    }
}

export const logoutUser = async () => {
    await $api.put(`/logout`)
}