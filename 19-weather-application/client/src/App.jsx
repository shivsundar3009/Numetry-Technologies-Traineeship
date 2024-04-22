import React, { useState } from 'react';
import axios from 'axios';
import img from "./assets/bg.jpg"

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!city) {
      setErrorMessage('Please enter a city name');
      return;
    }
    try {
      const response = await axios.get(`http://localhost:3000/weather/${city}`);
      setWeatherData(response.data);
      setErrorMessage('');
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setErrorMessage('Data not available');
      setWeatherData(null);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center" style={{backgroundImage: `url(${img})`}}>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="Enter city name"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-2">
            Search
          </button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </form>
        {weatherData && !errorMessage && (
          <div>
            <h2 className="text-xl font-semibold">{weatherData.city}, {weatherData.country}</h2>
            <p className="text-gray-700">Temperature: {weatherData.temperature}°C</p>
            <p className="text-gray-700">Humidity: {weatherData.humidity}%</p>
            <p className="text-gray-700">Description: {weatherData.description}</p>
            <p className="text-gray-700">Wind Speed: {weatherData.windSpeed} m/s</p>
            <p className="text-gray-700">Wind Direction: {weatherData.windDirection}</p>
            <img src={weatherData.icon} alt="Weather Icon" className="mt-4"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
