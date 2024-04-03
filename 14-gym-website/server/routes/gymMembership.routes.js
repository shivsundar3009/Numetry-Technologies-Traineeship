import express from 'express';
import { createGymMembership, getGymMembershipByAgeGroup, getAllGymMemberships } from '../controllers/gymMembership.controller.js';

const router = express.Router();

// Gym Membership Routes
router.post('/gym-membership', createGymMembership);
router.get('/gym-membership/:ageGroup', getGymMembershipByAgeGroup);
router.get('/gym-membership', getAllGymMemberships);
// Add other gym membership routes as needed

export default router;