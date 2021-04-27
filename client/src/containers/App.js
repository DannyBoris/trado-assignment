import { createMuiTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@material-ui/core'
import { useSelector } from 'react-redux'
import '../App.css'
import Main from './Main'
function App() {
    const { theme } = useSelector((state) => state)

    const muiTheme = createMuiTheme({
        palette: {
            primary: {
                main: theme.primary,
            },
            secondary: {
                main: theme.secondary,
            },
        },
        typography: {
            allVariants: {
                color: theme.secondary,
            },
        },
    })

    return (
        <div className="App">
            <ThemeProvider theme={responsiveFontSizes(muiTheme)}>
                <CssBaseline />
                <Main />
            </ThemeProvider>
        </div>
    )
}

export default App
