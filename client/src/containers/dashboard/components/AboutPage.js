import React from 'react'
import { Avatar, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {},
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: 1,
        padding: theme.spacing(2),
        '& > button': {
            alignSelf: 'flex-end',
            padding: theme.spacing(2),
            background: 'none',
            border: '1px solid rgba(144,144,144,.2)',
            borderRadius: 8,
            width: '25%',
        },
        '& > div': {
            display: 'flex',
            flexDirection: 'column',
            '& > input, textarea': {
                borderRadius: 8,
                boxShadow: theme.shadows[3],
                padding: 10,
                border: '1px solid rgba(144,144,144,.1)',
                resize: 'none',
            },
            '&> label': {
                textAlign: 'left',
                marginBottom: theme.spacing(0.5),
            },
        },
    },
    avatar:{
        width:40,
        height:40,
    }
}))

export default function AboutPage({ handleChange, setLogo, preview }) {
    const classes = useStyles()
    return (
        <>
            <form className={classes.form}>
                <div>
                    <label>Bussiness name</label>
                    <input name="name" onChange={handleChange} type="text" />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="desc" onChange={handleChange} cols="30" rows="5" type="text" />
                </div>
                <div>
                    <label>Website URL:</label>
                    <input name="url" onChange={handleChange} type="text" />
                </div>
                <div>
                    <label>Logo</label>
                    <input name="url" onChange={setLogo} type="file" />
                </div>
            </form>
        </>
    )
}
