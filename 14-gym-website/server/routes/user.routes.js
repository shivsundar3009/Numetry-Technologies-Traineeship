import express from 'express';
import { createUser, updateUser, loginUser } from '../controllers/user.controllers.js';

const router = express.Router();

// Routes for user management
router.post('/users', createUser); // Create a new user
router.put('/users/:id', updateUser); // Update a user by ID
// Route for user login
router.post('/login', loginUser);

export default router;
