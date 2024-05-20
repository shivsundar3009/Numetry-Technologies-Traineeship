// routes/staffRoutes.js
import express from 'express';
import { createStaff, getAllStaff, getStaffById, updateStaffById, deleteStaffById } from '../controllers/staff.controllers.js';

const router = express.Router();

// Route to create a new staff member
router.post('/', createStaff);

// Route to get all staff members
router.get('/', getAllStaff);

// Route to get a staff member by ID
router.get('/:id', getStaffById);

// Route to update a staff member by ID
router.put('/:id', updateStaffById);

// Route to delete a staff member by ID
router.delete('/:id', deleteStaffById);

export default router;
