import { createContext,useState,useContext } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({children})=>{

    const [city , setCity]= useState('İzmir')

    const values = {city,setCity }

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);