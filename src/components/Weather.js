import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion'
import classes from './Weather.module.css'


const Weather = () => {

   const weather = useSelector(state => state.city.weather)
   const city = useSelector(state => state.city.city)
    console.log(weather)

    let imgSrc = weather[0].IsDayTime ? './images/day.svg' : './images/night.svg'
    let icon = `./images/icons/${weather[0].WeatherIcon}.svg`

    return (
        <motion.div initial={{x:'-100vw'}} animate={{x:0}} className={classes.weather}>
            <div className={classes.weatherImage}>
                <img src={imgSrc} alt="day/night" />
            </div>
            <div className={classes.icon}>
                <img src={icon} alt="weather icon" />
            </div>
            <div className={classes.weatherDesc}>
                <span>{city[0].EnglishName}, </span>
                <span>{city[0].Country.EnglishName}</span>
                 <h3>{weather[0].WeatherText}</h3>
                 <h3>{weather[0].Temperature.Metric.Value} градусов</h3>
            </div>
        </motion.div>
    )
}

export default Weather
