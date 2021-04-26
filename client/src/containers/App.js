import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import { useSelector } from 'react-redux'
import '../App.css'
import Main from './Main'
function App() {
    const { theme } = useSelector((state) => state)
    console.log(theme)
    const muiTheme = createMuiTheme({
        palette: {
            primary: {
                main: theme.primary,
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
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                <Main />
            </ThemeProvider>
        </div>
    )
}

export default App
