import { useState } from "react";
import fetchWeather from "./fecthweather.js";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const search = async (e) => {
    if (e.code === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div>
      <h3> Weather Application</h3>
      <input
        type="text"
        placeholder="Enter ur city"
        onChange={handleChange}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="data">
          <div className="cityname">
            <h3>{weather.name}</h3>
            <span>{weather.sys.country}</span>
            <div className="temp">
              {weather.main.temp}
              <span>&deg;c</span>
            </div>
            <div className="info">
              <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
              <p>{weather.weather[0].description}</p>
              <p>Clouds</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
