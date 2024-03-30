import Restaurant from '../models/restaurant.model.js';

const restaurantController = {
  getAllRestaurants: async (req, res) => {
    try {
      const restaurants = await Restaurant.find();
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createRestaurant: async (req, res) => {
    const { name, city, overallRating, categories, dishes } = req.body;
    try {
      const newRestaurant = new Restaurant({
        name,
        city,
        overallRating,
        categories,
        dishes
      });
      const savedRestaurant = await newRestaurant.save();
      res.status(201).json(savedRestaurant);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export default restaurantController;