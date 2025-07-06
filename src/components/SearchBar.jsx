// src/components/SearchBar.jsx
import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const { fetchWeather } = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city.trim());
  };

  return (
      <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-2 mt-4"
    >
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

