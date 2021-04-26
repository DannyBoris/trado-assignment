import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        height: 70,
        display: 'flex',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        borderBottom: '1px solid black',
    },
}))

export default function DashboardNavbar() {
    const classes = useStyles()
    return (
        <nav className={classes.root}>
            <Link to="/about">
                <span>About</span>
            </Link>
            <Link to="/images">
                <span>Images</span>
            </Link>
            <Link to="/hours">
                <span>Opening Hours</span>
            </Link>
        </nav>
    )
}
