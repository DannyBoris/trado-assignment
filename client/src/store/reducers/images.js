import { SET_IMAGES } from '../actions/action-types'

export default (state = [], action) => {
    switch (action.type) {
        case SET_IMAGES:
            return action.payload
        default:
            return state
    }
}
