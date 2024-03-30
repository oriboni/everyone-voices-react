import axios from "axios";

export const api_url = 'http://localhost:5000/api'

const $api = axios.create({
    withCredentials: true,
    baseURL: api_url
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401) {
        try {
            const response = await axios.get(`${api_url}/refresh`, {withCredentials: true})
            console.log(response.data)
            localStorage.setItem('token', response.data.accessToken)
            return $api.request(originalRequest)
        } catch(e) {
            console.log(e.message)
        }

    }
})

export default $api