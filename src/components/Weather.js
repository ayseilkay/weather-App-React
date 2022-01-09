import React from 'react'
// import rain from '../images/rain.png'
// import cloudy from '../images/cloudy.png'
// import sunny from '../images/sunny.png'
// import snow from '../images/snow.png'
// import fog from '../images/fog.png'
import { useWeather } from '../context/WeatherApiContext'
import { useEffect,useState } from 'react'
import axios from 'axios';



function Weather() {
    const [weather, setWeather] = useState([]);
    const {city,setCity}=useWeather()
    const [coordinates, setCoordinates] = useState([]);
    // console.log(city)
    const apiKey = "6e2e152c3d6bbe7aacc92dffbc879c90"
    const weatherApi= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const dailyAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=current,minutely,hourly&units=metric&appid=${apiKey}`;
    console.log(weatherApi)
    console.log(dailyAPI)

    useEffect(() => {
        axios(weatherApi)
          .then((response) => {
            setCoordinates(response.data.coord);
          })
          .catch((err) => {});
        axios(dailyAPI)
          .then((response) => {
            setWeather(response.data);
          })
          .catch((err) => {});
      }, [weatherApi, dailyAPI]);
      useEffect(() => {
        document.querySelector("#card1") &&
          document.querySelector("#card1").classList.remove("bg-opacity-100");
        document.querySelector("#card1") &&
          document
            .querySelector("#card1")
            .classList.add("border-4", "border-orange-600");
      });
    
      function dtConverter(UNIX_TIMESTAMP) {
        var date = new Date(UNIX_TIMESTAMP * 1000).toString().split(" ")[0];
        return date;
      }
      return (
        <ul className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 justify-items-stretch text-center">
          {weather.daily &&
            weather.daily.map((item, index) => (
              <li
                id={`card${index + 1}`}
                key={index + 1}
                className="bg-opacity-80 bg-white rounded-xl shadow-md m-2"
              >
                <div className="text-xl font-medium text-black">
                  {dtConverter(item.dt)}
                </div>
                <div className="flex items-center justify-center filter drop-shadow-lg">
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="weatherImg"
                  />
                </div>
                <div className="text-gray-700 font-medium">
                  {item.weather[0].description.toUpperCase()}
                </div>
                <div className="font-bold">
                  <span className="text-gray-900 inline-block mr-2">
                    {Math.floor(item.temp.min)}º
                  </span>
                  <span className="text-gray-900 inline-block mr-2">/</span>
                  <span className="text-gray-500 inline-block">
                    {Math.floor(item.temp.max)}º
                  </span>
                </div>
              </li>
            ))}
        </ul>
      );
    }
    
export default Weather
