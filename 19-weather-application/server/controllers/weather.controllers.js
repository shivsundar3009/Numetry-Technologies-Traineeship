// controllers/weatherController.js
import Weather from '../models/weather.model.js';

// Controller to create weather data for a specific city
export const createWeatherData = async (req, res) => {
  try {
    const { city, country, temperature, humidity, description, icon, windSpeed, windDirection } = req.body;
    const newWeather = new Weather({ city, country, temperature, humidity, description, icon, windSpeed, windDirection });
    await newWeather.save();
    res.status(201).json(newWeather);
  } catch (error) {
    console.error('Error creating weather data:', error);
    res.status(500).json({ message: 'Failed to create weather data' });
  }
};

// Controller to get weather data for a specific city by name
export const getWeatherDataByCity = async (req, res) => {
  const { city } = req.params;
  try {
    const weatherData = await Weather.findOne({ city });
    if (weatherData) {
      res.json(weatherData);
    } else {
      res.status(404).json({ message: 'Weather data not found' });
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ message: 'Failed to fetch weather data' });
  }
};

// Controller to get all weather data
export const getAllWeatherData = async (req, res) => {
  try {
    const weatherData = await Weather.find();
    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ message: 'Failed to fetch weather data' });
  }
};
