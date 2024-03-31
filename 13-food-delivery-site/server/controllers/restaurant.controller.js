import Restaurant from '../models/restaurant.model.js';

const restaurantController = {
  // Get all restaurants
  getAllRestaurants: async (req, res) => {
    try {
      const restaurants = await Restaurant.find();
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Create a new restaurant
  createRestaurant: async (req, res) => {
    const { name, city, overallRating, categories, dishes, image } = req.body;
    try {
      const newRestaurant = new Restaurant({
        name,
        city,
        overallRating,
        categories,
        dishes,
        image // Include the image field here
      });
      const savedRestaurant = await newRestaurant.save();
      res.status(201).json(savedRestaurant);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Get all unique cities
  getAllCities: async (req, res) => {
    try {
      const cities = await Restaurant.distinct('city');
      res.json(cities);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export default restaurantController;
