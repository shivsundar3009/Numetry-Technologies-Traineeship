import City from '../models/city.model.js';

// Get all cities
export const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new city
export const createCity = async (req, res) => {
  const { name } = req.body;

  try {
    // Check if city already exists
    const existingCity = await City.findOne({ name });
    if (existingCity) {
      return res.status(400).json({ message: 'City already exists' });
    }

    // Create new city
    const newCity = new City({ name });
    await newCity.save();

    res.status(201).json({ message: 'City created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
