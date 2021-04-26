import { SET_ERROR } from './action-types'

export function setError(err) {
    return {
        type: SET_ERROR,
        payload: err,
    }
}
