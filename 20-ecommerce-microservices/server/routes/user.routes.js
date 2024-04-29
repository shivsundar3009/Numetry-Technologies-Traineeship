// routes/userRoutes.js
import express from 'express';
import { createUser, loginUser, updateUser } from '../controllers/user.controllers.js';

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.put('/:userId', updateUser); // Add route for updating user

export default router;
