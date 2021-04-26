import { SET_ABOUT_DETAILS } from '../actions/action-types'

const DEFAULT_STATE = {
    name: '',
    desc: '',
    url: '',
    logo: '', // base64 string
    hours: [],
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_ABOUT_DETAILS:
            return { ...state, ...action.payload }

        default:
            return state
    }
}
