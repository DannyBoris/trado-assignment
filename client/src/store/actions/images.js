import { apiCall, PIXABAY_BASE_URL } from '../../services/api'
import { SET_IMAGES } from './action-types'
import { setError } from './error'

export function setImages(images) {
    return {
        type: SET_IMAGES,
        payload: images,
    }
}

export function fetchImages(q) {
    return function (dispatch) {
        apiCall('get', `${PIXABAY_BASE_URL}/?key=21344459-24ae0bda7764e72ff3420d8c2&q=${q}`)
            .then((res) => {
                console.log(res.hits)
                const smallImages = res.hits.slice(0, 6).map((img) => img.previewURL)
                dispatch(setImages(smallImages))
            })
            .catch((err) => setError(err))
    }
}
