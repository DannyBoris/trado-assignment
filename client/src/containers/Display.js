import React from 'react'

import { Divider, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        borderLeft: '1px solid',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: 0.4,
        padding: theme.spacing(3),
        '& > p': {
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
                <a href="#"> {about.url}</a>
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
