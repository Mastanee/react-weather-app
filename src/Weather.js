import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handelResponse(response) {
    setWeatherData({
      ready: true,
      temperatureCelsius: response.data.temperature.current,
      city: response.data.city,
      country: response.data.country,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      time: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "8946076a3b1o36f41e14b4f240b5t2f6";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  // If weatherData is not ready, initiate the search automatically
  if (!weatherData.ready) {
    search();
    return "Loading...";
  }

  return (
    <div className="container px-0">
      <div className="row weatherContainer w-100 mx-0 h-100">
        <div className="col-9 h-100 currentWeather">
          <form className="searchBox d-flex" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
          <WeatherInfo info={weatherData} />
        </div>
      </div>
    </div>
  );
}
