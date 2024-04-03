import express from 'express';
import { createExercisePlan, getExercisePlans, getExercisePlanById, updateExercisePlan, deleteExercisePlan } from '../controllers/exercise.controllers.js';

const router = express.Router();

// Create a new exercise plan
router.post('/create', createExercisePlan);

// Get all exercise plans
router.get('/', getExercisePlans);

// Get a specific exercise plan by ID
router.get('/:id', getExercisePlanById);

// Update an exercise plan by ID
router.put('/:id', updateExercisePlan);

// Delete an exercise plan by ID
router.delete('/:id', deleteExercisePlan);

export default router;