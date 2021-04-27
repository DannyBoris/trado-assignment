import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { NavLink as Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        height: 70,
        display: 'flex',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
}))

const links = []

export default function DashboardNavbar() {
    const classes = useStyles()
    return (
        <nav className={classes.root}>
            <Link
                activeStyle={{
                    borderBottom: '1px solid black',
                }}
                to="/about"
            >
                <Typography variant="body1">About</Typography>
            </Link>
            <Link
                activeStyle={{
                    borderBottom: '1px solid black',
                }}
                to="/images"
            >
                <Typography variant="body1">Images</Typography>
            </Link>
            <Link
                activeStyle={{
                    borderBottom: '1px solid black',
                }}
                to="/hours"
            >
                <Typography variant="body1">Opening Hours</Typography>
            </Link>
        </nav>
    )
}
