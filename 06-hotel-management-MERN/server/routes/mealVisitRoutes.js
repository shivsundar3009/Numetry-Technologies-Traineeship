import express from 'express';
import { recordMealVisit } from '../controllers/mealVisitController.js';

const router = express.Router();

// Route to record a meal visit
router.post('/meals/visit', recordMealVisit);

export default router;