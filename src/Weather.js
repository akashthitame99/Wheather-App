import React, {  useState } from "react";
import "./App.css";
import { MdLocationCity } from "react-icons/md";
import {FaSearchLocation} from "react-icons/fa";
import {SiSoundcloud} from "react-icons/si";


function Weather() {
  const [city, setcity] = useState({});
  const [search, setsearch] = useState("");

  const getdata = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b7d5a206a78d2167b854f7e03d4f67fe`;
    const res = await fetch(url);
    const resjson = await res.json();
    console.log(resjson.main);
    setcity(resjson.main);
  };
  return (
    <div className="body">
      <div className="container">
        <div className="heading">
          <h3>Weather <SiSoundcloud/></h3>
        </div>
        <input
          type="search"
          placeholder="  Enter City Name"
          onChange={(e) => setsearch(e.target.value)}
        ></input>
        <button onClick={getdata}>< FaSearchLocation/></button>
       {!city ?(<p>Data not found</p>):(

         <div>
 <div className="location">
          <h1>
            <MdLocationCity className="icon" />
          </h1>
          <h1>{search}</h1>
        </div>
        <div className="temp">
          <h1>{city.temp} °C</h1>
        
        </div>
        <div className="humidity">
        <h3>Humidity : {city.humidity} %</h3>
        </div>
        <div className="tempm">
          <h3>Max_Temp: {city.temp_max} °C || </h3>
          <h3>Min_Temp: {city.temp_min} °C</h3>
        </div>


         </div>
       )}
      </div>
    </div>
  );
}

export default Weather;
