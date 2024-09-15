import React, { useState } from "react";

import axios from "axios";
import "./weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handelResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      country: response.data.country,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      time: new Date(response.data.time * 1000).toLocaleString(),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="container px-0">
        <div className="row weatherContainer w-100 mx-0 h-100">
          <div className="col-9 h-100 currentWeather">
            <form className="searchBox d-flex">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus
              />
              <button className="btn btn-primary">Search</button>
            </form>
            <div className="weatherItem ms-5">
              <p>
                {weatherData.city}, {weatherData.country}
              </p>
              <h1>
                {" "}
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>{" "}
                <span className="unit">°C</span>
              </h1>
              <h2>{weatherData.time}</h2>
              <ul>
                <li>
                  <div className="d-flex">
                    <img src={weatherData.icon} alt={weatherData.description} />
                    <div className="weatherDetails ms-3 text-start">
                      <div className="text-capitalize">
                        Description: {weatherData.description}
                      </div>
                      <div>Humidity: {weatherData.humidity}%</div>
                      <div>Wind: {weatherData.wind} km/h</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3 weather text-center h-100">
            <div className="forecastWeather">
              <ul>
                {[
                  {
                    day: "Wednesday, Sep 22",
                    weather: "Sunny",
                    temp: "12°C",
                    icon: "https://cdn-icons-png.flaticon.com/128/8841/8841315.png",
                  },
                  {
                    day: "Wednesday, Sep 22",
                    weather: "Heavy Rain",
                    temp: "11°C",
                    icon: "https://cdn-icons-png.flaticon.com/128/8841/8841317.png",
                  },
                  {
                    day: "Wednesday, Sep 22",
                    weather: "Heavy Rain",
                    temp: "11°C",
                    icon: "https://cdn-icons-png.flaticon.com/128/414/414927.png",
                  },
                  {
                    day: "Saturday, Sep 21",
                    weather: "Cloudy",
                    temp: "9°C",
                    icon: "https://cdn-icons-png.flaticon.com/128/414/414927.png",
                  },
                  {
                    day: "Sunday, Sep 22",
                    weather: "Sunny",
                    temp: "14°C",
                    icon: "https://cdn-icons-png.flaticon.com/128/4064/4064276.png",
                  },
                ].map((forecast, index) => (
                  <li
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center">
                      <img src={forecast.icon} alt={forecast.weather} />
                      <div className="ms-3 text-start">
                        <div>{forecast.day}</div>
                        <div>{forecast.weather}</div>
                      </div>
                    </div>
                    <div className="forecast-temperature">
                      <span>{forecast.temp}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8946076a3b1o36f41e14b4f240b5t2f6";
    let city = "Bern";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handelResponse);
    return (
      <div className="container px-0">
        <div className="col-9 h-100 currentWeather">
          <form className="searchBox d-flex">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus
            />
            <button className="btn btn-primary">Search</button>
          </form>

          <p>The tempereture is loading...</p>
        </div>
      </div>
    );
  }
}
