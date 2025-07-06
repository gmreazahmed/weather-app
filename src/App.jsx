// src/App.jsx
import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
  return (
    <WeatherProvider>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 className='text-4xl font-bold'>Weather App</h1>
        <SearchBar />
        <WeatherDisplay />
      </div>
    </WeatherProvider>
  );
};

export default App;

