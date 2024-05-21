// routes/careerJobRoutes.js
import express from 'express';
import {
  createCareerJob,
  getAllCareerJobs,
  getCareerJobById,
  updateCareerJobById,
  deleteCareerJobById
} from '../controllers/careerJobs.controllers.js';

const router = express.Router();

// Create a new career job
router.post('/', createCareerJob);

// Get all career jobs
router.get('/', getAllCareerJobs);

// Get career job by ID
router.get('/:id', getCareerJobById);

// Update career job by ID
router.put('/:id', updateCareerJobById);

// Delete career job by ID
router.delete('/:id', deleteCareerJobById);

export default router;
