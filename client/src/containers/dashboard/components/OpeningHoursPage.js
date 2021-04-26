import React, { useState } from 'react'
import { makeStyles, OutlinedInput, Select, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        padding: theme.spacing(2),
        '& > form': {
            display: 'flex',
            padding: theme.spacing(0, 2),
            flexDirection: 'column',
            justifyContent: 'space-around',
            border: '1px solid',
            height: '50%',
            '& > div': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '& > p, input': {
                    flex: 1,
                    border: 'none',
                    textAlign: 'left',
                },
            },
        },
    },
}))

export default function OpeningHoursPage({ setHours, handleChange }) {
    const days = ['Sunday', 'Monday', 'Thuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday']
    const classes = useStyles()

    const SelectWithDays = (name) => (
        <Select name={name} onChange={handleChange} variant="outlined" disableUnderline native>
            {days.map((d) => (
                <option>{d}</option>
            ))}
        </Select>
    )
    return (
        <div className={classes.root}>
            <form onSubmit={setHours}>
                <div>
                    <Typography>From</Typography>
                    {SelectWithDays('fromDay')}
                    <OutlinedInput onChange={handleChange} name="fromHour" type="time" />
                </div>
                <div>
                    <Typography>To</Typography>
                    {SelectWithDays('toDay')}
                    <OutlinedInput onChange={handleChange} name="toHour" type="time" />
                </div>
                <Button type="submit" variant="outlined">
                    Add hours
                </Button>
            </form>
        </div>
    )
}
