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
      className="flex items-center justify-center gap-4 mt-6"
    >
      <input
        type="text"
        value={city}
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
        className="w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

