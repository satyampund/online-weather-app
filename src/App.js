import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Hotness from './assests/img/hot-weather.png';
import Coldness from './assests/img/cold-weather.png';
import City from './assests/img/city-icon.png';
import Mobile from './assests/img/mobile-weather.png';
import Weather from './assests/img/weather-update.png';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [inpCity, setInpCity] = useState('');
  const [humidity, setHumidity] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function loadData() {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      const response = await axios.get(url);

      //fetching temp
      const tempCel = Math.round(response.data.main.temp - 273.15);
      setTemp(`${tempCel} °C`);

      //fetching humidity
      setHumidity(`${response.data.main.humidity} %`);

      //fetching description
      setDescription(response.data.weather[0].description);
    }

    loadData();
  }, [city]);

  return (
    <>
      <div className="heading-container mb-4 mt-2">
        <h1 className="heading">WEATHER APP</h1>
      </div>

      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-4">
            <img src={Coldness} className="cold-weather-img" alt="hot-weather"></img>
            <img src={Weather} className="weather-update-img mt-lg-5 mb-4" alt="hot-weather"></img>
          </div>

          <div className="col-md-4 mt-lg-4 ">
            <div className="weather-container">
              <img src={City} alt="city-icon" className="city-img"></img>
              <br></br>
              <form>
                <input
                  type="text"
                  placeholder="Enter City Name"
                  className="search-city mt-2 mb-4"
                  value={inpCity}
                  onChange={(e) => {
                    setInpCity(e.target.value);
                  }}
                />
                <br></br>
                <button
                  type="button"
                  className="btn btn-outline-dark search-btn"
                  onClick={() => setCity(inpCity)}>
                  SUBMIT
                </button>
              </form>
            </div>

            <div className="mt-5 p-4">
              <div className="row">
                <div className="col weather-card mx-2">
                  <h6>City Name</h6>
                  <h6>{city}</h6>
                </div>
                <div className="col weather-card mx-2">
                  <h6>Temperature</h6>
                  <h6>{temp}</h6>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col weather-card mx-2">
                  <h6>Humidity</h6>
                  <h6>{humidity}</h6>
                </div>
                <div className="col weather-card mx-2">
                  <h6>Description</h6>
                  <h6>{description}</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <img src={Mobile} className="mobile-weather-img" alt="hot-weather"></img>
            <img src={Hotness} className="hot-weather-img" alt="hot-weather"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
