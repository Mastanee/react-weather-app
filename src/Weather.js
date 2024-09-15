import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(""); // Initialize the city state
  const [unit, setUnit] = useState("celsius"); // Track current unit (°C or °F)

  function handelResponse(response) {
    setWeatherData({
      ready: true,
      temperatureCelsius: response.data.temperature.current, // Store in Celsius
      city: response.data.city,
      country: response.data.country,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      time: new Date(response.data.time * 1000).toLocaleString(),
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const apiKey = "8946076a3b1o36f41e14b4f240b5t2f6";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handelResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value); // Update the city state with input value
  }

  function convertToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32; // Convert Celsius to Fahrenheit
  }

  function handleUnitChange() {
    setUnit(unit === "celsius" ? "fahrenheit" : "celsius"); // Toggle unit
  }

  function displayTemperature() {
    if (unit === "celsius") {
      return Math.round(weatherData.temperatureCelsius);
    } else {
      return Math.round(convertToFahrenheit(weatherData.temperatureCelsius));
    }
  }

  if (weatherData.ready) {
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
            <div className="weatherItem ms-5">
              <p>
                {weatherData.city}, {weatherData.country}
              </p>
              <h1>
                <span className="temperature">{displayTemperature()}</span>
                <span className="unit">
                  °{unit === "celsius" ? "C" : "F"} |{" "}
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      handleUnitChange();
                    }}
                  >
                    °{unit === "celsius" ? "F" : "C"}
                  </a>
                </span>
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
        </div>
      </div>
    );
  } else {
    return (
      <div className="container px-0">
        <div className="col-9 h-100 currentWeather">
          <form className="searchBox d-flex" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus
              onChange={handleCityChange}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}
