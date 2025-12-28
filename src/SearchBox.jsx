import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox(){
    let [city, setCity] = useState("");
    
    let API_kEY="590bcda16cdbc86411cf19646926c881";
    let API_URL=`https://api.openweathermap.org/data/2.5/weather`;

    let getWeather=async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_kEY}&units=metric`);
        let data=await response.json();
        console.log(data);
        let res={
            temp:data.main.temp,
            temp_max:data.main.temp_max,
            temp_min:data.main.temp_min,
            humidity:data.main.humidity,
            pressure:data.main.pressure,
            feels_like:data.main.feels_like,
            weather:data.weather[0].description,
            wind_speed:data.wind.speed,
        }
        console.log(res);
    }

    let handleChange=(evn)=>{
        setCity(evn.target.value);
    }
    let handleSubmit=(evn)=>{
        evn.preventDefault();
        console.log(city);
        setCity("");
        getWeather();
    }
    return (
        <div className="searchBox">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>&nbsp;
            <br /><br />
            <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}