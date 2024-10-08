import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

function Test() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    fetch(` https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=${import.meta.env.VITE_APP_ID}`)
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);

  return (
    <div>
      {weatherData.list && weatherData.list.map((forecast, index) => (
        <div key={index}>
          <p>
            {dayjs(forecast.dt_txt).format('dddd')}
          </p>
          <p>{forecast.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
}
export default Test
