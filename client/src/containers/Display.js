import React from 'react'

import { Divider, makeStyles, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            borderTop: '1px solid rgba(144,144,144,.2)',
            overflow: 'scroll',
        },
        borderLeft: '1px solid rgba(144,144,144,.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: 0.4,
        padding: theme.spacing(3),
        '& > p,h3': {
            textAlign: 'left',
        },
    },
    hoursContainer: {
        display: 'grid',
        gridTemplateColumns: ' repeat(2,1fr)',
    },
}))

function Display({ about }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="h3">{about.name}</Typography>
            <Typography variant="body1">{about.desc}</Typography>
            <Typography>
                Join us at:
                <Link to={about.url}> {about.url}</Link>
            </Typography>
            {about.hours.map((h) => (
                <div>
                    <div className={classes.hoursContainer}>
                        <p>{h.toDay}</p>
                        <p>{h.fromDay}</p>
                        <p>{h.fromHour}</p>
                        <p>{h.toHour}</p>
                    </div>
                    <Divider />
                </div>
            ))}
        </div>
    )
}

export default Display
