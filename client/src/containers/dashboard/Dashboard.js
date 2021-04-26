import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router'
import AboutPage from './components/AboutPage'
import DashboardNavbar from './components/DashboardNavbar'
import ImagesPage from './components/ImagesPage'
import { makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogoColor, setAboutDetails } from '../../store/actions/about'
import { fetchImages } from '../../store/actions/images'
import OpeningHoursPage from './components/OpeningHoursPage'
import { setError } from '../../store/actions/error'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: 0.6,
    },
}))

function Dashboard() {
    const dispatch = useDispatch()
    const { images, about } = useSelector((state) => state)
    const classes = useStyles()
    const [imageTerm, setImageTerm] = useState('')
    const [aboutForm, setAboutForm] = useState({
        name: 'Bussiness name goes here',
        desc: 'Description goes here',
        url: 'WEBSITE hoes here',
    })

    const [hourObj, setHourObj] = useState({
        fromDay: '',
        toDay: '',
        fromHour: '',
        toHour: '',
    })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        images.length && setLoading(false)
    }, [images])

    useEffect(() => {
        dispatch(setAboutDetails(aboutForm))
    }, [aboutForm])

    async function handleImageSearch(e) {
        setLoading(true)
        e.preventDefault()
        dispatch(fetchImages(imageTerm))
    }

    function handleAboutFormChange(e) {
        setAboutForm({ ...aboutForm, [e.target.name]: e.target.value })
    }

    function handleHoursChange(e) {
        setHourObj({ ...hourObj, [e.target.name]: e.target.value })
    }

    function handleHoursSubmit(e) {
        e.preventDefault()
        const fieldsNotEmpty = Object.values(hourObj).every((f) => Boolean(f))
        if (!fieldsNotEmpty) {
            dispatch(setError('Fields empty'))
            return
        }
        dispatch(setAboutDetails({ ...about, hours: [...about.hours, hourObj] }))
    }
    function setLogo(e) {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = () => {
            let logo = reader.result
            dispatch(fetchLogoColor(logo))
        }
        reader.readAsDataURL(file)
        // make api call to server
    }
    return (
        <div className={classes.root}>
            <DashboardNavbar />
            <Switch>
                <Route
                    exact
                    path="/about"
                    render={() => <AboutPage setLogo={setLogo} handleChange={handleAboutFormChange} />}
                />
                <Route
                    exact
                    path="/images"
                    render={() => (
                        <ImagesPage
                            loading={loading}
                            images={images}
                            term={imageTerm}
                            handleSubmit={handleImageSearch}
                            setTerm={setImageTerm}
                        />
                    )}
                />
                <Route
                    exact
                    path="/hours"
                    render={() => (
                        <OpeningHoursPage
                            hourObj={hourObj}
                            handleChange={handleHoursChange}
                            setHours={handleHoursSubmit}
                        />
                    )}
                />
            </Switch>
        </div>
    )
}

export default Dashboard
