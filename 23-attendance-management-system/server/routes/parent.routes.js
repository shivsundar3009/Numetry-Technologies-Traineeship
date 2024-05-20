// routes/parentRoutes.js
import express from 'express';
import { createParent, getAllParents, getParentById, updateParentById, deleteParentById } from '../controllers/parent.controllers.js';

const router = express.Router();

// Routes for Parent CRUD operations
router.post('/', createParent); // Create new parent
router.get('/', getAllParents); // Get all parents
router.get('/:id', getParentById); // Get parent by ID
router.put('/:id', updateParentById); // Update parent by ID
router.delete('/:id', deleteParentById); // Delete parent by ID

export default router;
