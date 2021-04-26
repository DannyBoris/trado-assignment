import Dashboard from './dashboard/Dashboard'
import Display from './Display'
import { makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import { useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('sm')]: {
            height: '100vmin',
        },
        boxShadow: theme.shadows[15],
        background: 'white',
        display: 'flex',
        height: '75vmin',
        width: '100vmin',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: theme.palette.primary.main,
    },
}))

function Main() {
    const classes = useStyles()
    const { enqueueSnackbar } = useSnackbar()
    const { about, error } = useSelector((state) => state)
    useEffect(() => {
        error &&
            enqueueSnackbar(error, {
                variant: 'error',
                anchorOrigin: { vertical: 'top', horizontal: 'center' },
            })
    }, [error])
    return (
        <div className={classes.container}>
            <Dashboard />
            <Display about={about} />
        </div>
    )
}

export default Main
