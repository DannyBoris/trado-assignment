import React from 'react'
import Loader from 'react-loader-spinner'
import { Button, makeStyles, OutlinedInput } from '@material-ui/core'
import { Search } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        flex: 1,
        ' & > form': {
            display: 'flex',
            flexDirection: 'column',
            '& > input': {
                borderRadius: 10,
                boxShadow: theme.shadows[3],
                padding: 10,
                border: '1px solid rgba(144,144,144,.1)',
            },
        },
    },
    image: {
        [theme.breakpoints.down('sm')]:{
            width:100,
            height:100,
        },
        width:175,
        backgroundColor:'rgba(144,144,144,.1)',
        height:175,
        objectFit: 'contain',
        margin:theme.spacing(.5)
 
    },
}))

export default function ImagesPage({ setTerm, handleSubmit, images, loading }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit}>
                <OutlinedInput
                    startAdornment={<Search />}
                    endAdornment={
                        <Button color="primary" variant="contained" type="submit">
                            Search
                        </Button>
                    }
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="Search images"
                    type="text"
                />
            </form>
            {!loading ? (
                <div style={{ display: 'flex',justifyContent:'center', flexWrap:'wrap' }}>
                    {images.length > 0 &&
                        images.map((img) => (
                            <img key={img} alt="preview" className={classes.image} src={img} />
                        ))}
                </div>
            ) : (
                <Loader
                    type="Oval"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            )}
        </div>
    )
}
