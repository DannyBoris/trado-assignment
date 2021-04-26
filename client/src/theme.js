import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
    palette: {
        background: {
            default: 'rgba(173, 202, 255)',
        },
    },

    typography: {
        allVariants: {
            fontFamily: 'Taviraj',
        },
        button: {
            textTransform: 'none',
        },
    },
})
