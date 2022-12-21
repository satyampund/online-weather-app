import './App.css';
import Hotness from './assests/img/hot-weather.png';
import Coldness from './assests/img/cold-weather.png';
import City from './assests/img/city-icon.png';

function App() {
  return (
    <>
      <div className="container-fluid text-center">
        {/* <h1>Weather App</h1> */}
        <div className="row">
          <div className="col-4">
            <img src={Coldness} className="weather-img" alt="hot-weather"></img>
          </div>

          <div className="col-4 ">
            <div className="weather-container">
              <img src={City} alt="city-icon" className="city-img"></img>
              <br></br>
              <input type="text" placeholder="Enter City Name" className="search-city mt-2 mb-4" />
              <br></br>
              <button type="button" className="btn btn-outline-primary search-btn">
                SUBMIT
              </button>
            </div>

            <div className="weather-card mt-5 p-4">
              <div className="row">
                <div className="col weather-card mx-2">
                  <h6>City Name</h6>
                  <h6>Ahmednagar</h6>
                </div>
                <div className="col weather-card mx-2">
                  <h6>Temperature</h6>
                  <h6>22 C</h6>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col weather-card mx-2">
                  <h6>Humidity</h6>
                  <h6>22 C</h6>
                </div>
                <div className="col weather-card mx-2">
                  <h6>Wind Speed</h6>
                  <h6>22 C</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <img src={Hotness} className="weather-img" alt="hot-weather"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
