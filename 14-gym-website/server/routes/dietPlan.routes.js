import express from 'express';
import { createDietPlan, getDietPlans, getDietPlanById, updateDietPlan, deleteDietPlan } from '../controllers/dietPlan.controllers.js';

const router = express.Router();

// Create a new diet plan
router.post('/create', createDietPlan);

// Get all diet plans
router.get('/', getDietPlans);

// Get a specific diet plan by ID
router.get('/:id', getDietPlanById);

// Update a diet plan by ID
router.put('/:id', updateDietPlan);

// Delete a diet plan by ID
router.delete('/:id', deleteDietPlan);

export default router;