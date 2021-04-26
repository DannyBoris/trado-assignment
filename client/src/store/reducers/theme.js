const DEFAULT_STATE = {
    primary: 'rgb(255,0,0)',
    secondary: 'rgb(0,255,0)',
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return action.payload
        default:
            return state
    }
}
