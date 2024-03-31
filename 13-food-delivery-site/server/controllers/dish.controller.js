import Dish from "../models/dish.model.js";

const dishController = {
    getAllDishes: async (req, res) => {
      try {
        const dishes = await Dish.find();
        res.json(dishes);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
  
    createDish: async (req, res) => {
      const { name, price, rating, category, image } = req.body;
      try {
        const newDish = new Dish({
          name,
          price,
          rating,
          category,
          image // Add the image field here
        });
        const savedDish = await newDish.save();
        res.status(201).json(savedDish);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    },
  
    getDishesByCategory: async (req, res) => {
      const category = req.params.category;
      try {
        const dishes = await Dish.find({ category });
        res.json(dishes);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
  
    getDishesByRestaurant: async (req, res) => {
      const restaurantId = req.params.restaurantId;
      try {
        const dishes = await Dish.find({ restaurant: restaurantId });
        res.json(dishes);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  };
  
  export default dishController;