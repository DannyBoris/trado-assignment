const DEFAULT_STATE = {
    primary: 'rgb(255,255,255)',
    secondary: 'rgb(0,0,0)',
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return action.payload
        default:
            return state
    }
}
