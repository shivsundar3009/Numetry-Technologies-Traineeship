import express from 'express';
import dishController from '../controllers/dish.controller.js';

const router = express.Router();

router.get('/getDishes', dishController.getAllDishes);
router.post('/createsDish', dishController.createDish);
router.get('/category/:category', dishController.getDishesByCategory);

export default router;