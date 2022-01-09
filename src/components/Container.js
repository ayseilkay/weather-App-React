import React from 'react'
import { useWeather } from '../context/WeatherApiContext'
import Dropdown from './Dropdown';
import Header from './Header';
import Weather from './Weather';
import Footer from './Footer';

function Container() {

    const {city,setCity} = useWeather([]);
    return (
        <div>
            <Header/>
            <br/>
            <Dropdown/>
            <br/>
            <Weather/>
            <br/>
            <Footer/>
        </div>
    )
}

export default Container
