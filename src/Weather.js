import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="container px-0">
      <div className="row weatherContainer w-100 mx-0 ">
        <div className="col-9 h-100">
          <h1>hello weather</h1>
        </div>
        <div className="col-3 weather text-center h-100">
          <div className="currentWeather h-100 d-flex flex-column">
            <from className="searchBox d-flex ">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control "
                autoFocus="on"
              />
              <button className="btn btn-primary ">Search</button>
            </from>

            <h1>11°C</h1>
            <ul>
              <li>
                <div className="d-flex ">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/8841/8841317.png"
                    alt="Rainy"
                  />
                  <div className="ms-3 text-start">
                    <div>Thursday, Sep 22</div>
                    <div>Description: Heavy rain</div>
                    <div>Humidity: 76%</div>
                    <div>Wind: 13 km/h</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <hr />
          <div className="forecastWeather">
            <ul>
              <li className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/8841/8841315.png"
                    alt="Rainy"
                  />
                  <div className="ms-3 text-start">
                    <div>Wednsday, Sep 22</div>
                    <div>Sunny</div>
                  </div>
                </div>
                <div className="forecast-temperature">
                  <span>12°C</span>
                </div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/8841/8841317.png"
                    alt="Rainy"
                  />
                  <div className="ms-3 text-start">
                    <div>Wednsday, Sep 22</div>
                    <div>Heavy Rain</div>
                  </div>
                </div>
                <div className="forecast-temperature">
                  <span>11°C</span>
                </div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/414/414927.png"
                    alt="Rainy"
                  />
                  <div className="ms-3 text-start">
                    <div>Wednsday, Sep 22</div>
                    <div>Heavy Rain</div>
                  </div>
                </div>
                <div className="forecast-temperature">
                  <span>11°C</span>
                </div>
              </li>

              <li className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/414/414927.png"
                    alt="Cloudy"
                  />
                  <div className="ms-3 text-start">
                    <div>Saturday, Sep 21</div>
                    <div>Cloudy</div>
                  </div>
                </div>
                <div className="forecast-temperature">
                  <span>9°C</span>
                </div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/4064/4064276.png"
                    alt="Sunny"
                  />
                  <div className="ms-3 text-start">
                    <div>Sunday, Sep 22</div>
                    <div>Sunny</div>
                  </div>
                </div>
                <div className="forecast-temperature">
                  <span>14°C</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
