import axios from 'axios'

export const PIXABAY_BASE_URL = 'https://pixabay.com/api'
export function apiCall(method, path, data, config) {
    return new Promise((resolve, reject) => {
        return axios[method](path, data, config)
            .then((res) => resolve(res.data))
            .catch((err) => reject(err.response.statusText))
    })
}
