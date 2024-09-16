import React, { useState } from "react";
import ConvertDate from "./ConvertDate";

export default function WeatherInfo(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function handleUnitChange() {
    setUnit(unit === "celsius" ? "fahrenheit" : "celsius");
  }

  function displayTemperature() {
    if (unit === "celsius") {
      return Math.round(props.info.temperatureCelsius);
    } else {
      return Math.round(convertToFahrenheit(props.info.temperatureCelsius));
    }
  }
  return (
    <div className="weatherItem ms-5">
      <p>
        {props.info.city}, {props.info.country}
      </p>
      <h2>
        <ConvertDate date={props.info.time} />
      </h2>
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

      <ul>
        <li>
          <div className="d-flex">
            <img src={props.info.icon} alt={props.info.description} />
            <div className="weatherDetails ms-3 text-start">
              <div className="text-capitalize">
                Description: {props.info.description}
              </div>
              <div>Humidity: {props.info.humidity}%</div>
              <div>Wind: {props.info.wind} km/h</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
