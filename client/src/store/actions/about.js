import { apiCall } from '../../services/api'
import { SET_ABOUT_DETAILS } from './action-types'
import { setError } from './error'
import { setTheme } from './theme'

export function setAboutDetails(data) {
    return {
        type: SET_ABOUT_DETAILS,
        payload: data,
    }
}

export function fetchLogoColor(data) {
    return function (dispatch) {
        apiCall('post', '/api/logo', { data })
            .then((res) => {
                let { primary, secondary } = res
                primary = `rgb(${primary.join()})`
                secondary = `rgb(${secondary.join()})`
                dispatch(setTheme({ primary, secondary }))
            })
            .catch((err) => dispatch(setError(err)))
    }
}
