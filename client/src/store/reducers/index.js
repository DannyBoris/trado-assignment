import { combineReducers } from 'redux'
import about from './about'
import error from './error'
import images from './images'
import theme from './theme'

const rootReducer = combineReducers({
    about,
    images,
    error,
    theme
})

export default rootReducer
