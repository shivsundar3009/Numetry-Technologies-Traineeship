import express from 'express';
import restaurantController from '../controllers/restaurant.controller.js';

const router = express.Router();

router.get('/getRestaurants', restaurantController.getAllRestaurants);
router.post('/createRestaurant', restaurantController.createRestaurant);

export default router;