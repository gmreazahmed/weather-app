// src/context/WeatherContext.jsx
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = "4d59086d48d347a6eebbe33ab7283ef0";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("City not found.");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, loading, error, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
