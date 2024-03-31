import express from 'express';
import restaurantController from '../controllers/restaurant.controller.js';

const router = express.Router();

// Route to get all restaurants
router.get('/restaurants', restaurantController.getAllRestaurants);

// Route to create a new restaurant
router.post('/restaurants', restaurantController.createRestaurant);

// Route to get all cities
router.get('/cities', restaurantController.getAllCities);

export default router;
