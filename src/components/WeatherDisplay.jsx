// src/components/WeatherDisplay.jsx
import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherDisplay = () => {
  const { weatherData, loading, error } = useContext(WeatherContext);

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!weatherData) return <p className="text-center text-gray-500">No data yet.</p>;

  const { name, main, weather, wind } = weatherData;

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-center mb-4">{name}</h2>

      <div className="flex items-center justify-center mb-4">
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
          className="w-20 h-20"
        />
      </div>

      <p className="text-xl text-center capitalize mb-2">
        {weather[0].description}
      </p>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Temperature:</span>
          <span>{main.temp}°C</span>
        </div>
        <div className="flex justify-between">
          <span>Feels Like:</span>
          <span>{main.feels_like}°C</span>
        </div>
        <div className="flex justify-between">
          <span>Humidity:</span>
          <span>{main.humidity}%</span>
        </div>
        <div className="flex justify-between">
          <span>Wind Speed:</span>
          <span>{wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
