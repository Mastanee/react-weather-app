import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="row">
      <div className="col-8"></div>
      <div className="col-4 forecast">
        <from>
          <input type="search" placeholder="Enter a city..." />
          <button className="btn btn-primary">Search</button>
        </from>

        <h1>11°C</h1>
        <ul>
          <li> Description: Heavy rain</li>
          <li> Humidity: 76%</li>
          <li> Wind: 13 km/h</li>
          <img
            src="https://cdn-icons-png.flaticon.com/128/8841/8841317.png"
            alt="heavy rain"
          />
        </ul>
        <hr />
        <ul>
          <li>
            <li>wed 11/09/2024</li>
            <li>12°C</li>
            <li>Rainy</li>
            <img
              src="https://cdn-icons-png.flaticon.com/128/8841/8841315.png"
              alt=""
            />
          </li>
          <li>
            <li>Thu 12/09/2024</li>
            <li>11°C</li>
            <li>Heavy Rain</li>
            <img
              src="https://cdn-icons-png.flaticon.com/128/8841/8841317.png"
              alt="heavy rain"
            />
          </li>
          <li>
            <li>Fri 13/09/2024</li>
            <li>13°C</li>
            <li>Cloudy</li>
            <img
              src="https://cdn-icons-png.flaticon.com/128/414/414927.png"
              alt=""
            />
          </li>
          <li>
            <li>Sat 14/09/2024</li>
            <li>13°C</li>
            <li>Cloudy</li>
            <img
              src="https://cdn-icons-png.flaticon.com/128/414/414927.png"
              alt=""
            />
          </li>
          <li>
            <li>Sun 15/09/2024</li>
            <li>14°C</li>
            <li>Sunny</li>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4064/4064276.png"
              alt="Sunny"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
